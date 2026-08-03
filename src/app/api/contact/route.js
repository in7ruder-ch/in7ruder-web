import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_BODY_BYTES = 16_000;
const ipHits = new Map();

const allowedServices = new Set([
  "social-engineering-readiness",
  "social-engineering-training",
  "phishing-readiness",
  "penetration-testing",
  "not-sure",
]);

const emailPattern = /^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/;
const NO_STORE_HEADERS = { "Cache-Control": "no-store, max-age=0" };

const errors = {
  en: { rate: "Too many requests. Please try again later.", fields: "Please check the required fields and try again.", unavailable: "Contact is temporarily unavailable. Please email matias@in7ruder.com." },
  de: { rate: "Zu viele Anfragen. Bitte versuchen Sie es später erneut.", fields: "Bitte prüfen Sie die Pflichtfelder und versuchen Sie es erneut.", unavailable: "Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte schreiben Sie an matias@in7ruder.com." },
};

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function respond(payload, status = 200, headers = {}) {
  return NextResponse.json(payload, { status, headers: { ...NO_STORE_HEADERS, ...headers } });
}

function hasAllowedOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isAllowed(ip) {
  const now = Date.now();
  if (ipHits.size > 5_000) {
    for (const [key, value] of ipHits) {
      if (now > value.resetAt) ipHits.delete(key);
    }
  }
  const existing = ipHits.get(ip);
  if (!existing || now > existing.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (existing.count >= RATE_LIMIT_MAX) return false;
  existing.count += 1;
  return true;
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    if (!hasAllowedOrigin(request)) {
      return respond({ ok: false, error: "Invalid request origin." }, 403);
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return respond({ ok: false, error: "Invalid request." }, 415);
    }

    const declaredLength = Number(request.headers.get("content-length") || 0);
    if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
      return respond({ ok: false, error: "Request is too large." }, 413);
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return respond({ ok: false, error: "Request is too large." }, 413);
    }

    let body;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return respond({ ok: false, error: "Invalid JSON body." }, 400);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return respond({ ok: false, error: "Invalid request." }, 400);
    }

    if (clean(body.website, 200)) return respond({ ok: true });
    const language = body.lang === "de" ? "de" : "en";
    const errorCopy = errors[language];

    if (!isAllowed(getClientIp(request))) {
      return respond(
        { ok: false, error: errorCopy.rate },
        429,
        { "Retry-After": String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)) },
      );
    }

    const name = clean(body.name, 80);
    const email = clean(body.email, 160).toLowerCase();
    const company = clean(body.company, 120);
    const service = clean(body.service, 60);
    const message = clean(body.message, 2000);

    if (!name || !emailPattern.test(email) || !allowedServices.has(service) || message.length < 20) {
      return respond({ ok: false, error: errorCopy.fields }, 400);
    }

    const requiredEnvironment = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_FROM", "MAIL_TO"];
    if (requiredEnvironment.some((key) => !process.env[key])) {
      console.error("CONTACT_CONFIGURATION_ERROR");
      return respond({ ok: false, error: errorCopy.unavailable }, 503);
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      disableFileAccess: true,
      disableUrlAccess: true,
      requireTLS: process.env.SMTP_SECURE !== "true",
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
      tls: { minVersion: "TLSv1.2", servername: process.env.SMTP_HOST },
    });

    const safe = { name: escapeHtml(name), email: escapeHtml(email), company: escapeHtml(company || "Not provided"), service: escapeHtml(service), message: escapeHtml(message) };
    const text = `Language: ${language}\nName: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nService: ${service}\n\nContext:\n${message}`;
    const html = `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5"><h2>New security call request</h2><p><strong>Language:</strong> ${language}</p><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Company:</strong> ${safe.company}</p><p><strong>Service:</strong> ${safe.service}</p><p><strong>Context:</strong></p><pre style="white-space:pre-wrap;background:#f3f5ef;padding:16px;border-radius:8px">${safe.message}</pre></div>`;

    await transporter.sendMail({
      from: `"IN7RUDER | New Security Enquiry" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Security call request: ${service}`,
      text,
      html,
      headers: { "X-Auto-Response-Suppress": "All" },
    });

    return respond({ ok: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR", {
      name: error instanceof Error ? error.name : "UnknownError",
      code: error && typeof error === "object" && "code" in error ? String(error.code) : "UNKNOWN",
    });
    return respond({ ok: false, error: "Server error. Please email matias@in7ruder.com." }, 500);
  }
}
