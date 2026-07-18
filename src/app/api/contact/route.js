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

const errors = {
  en: { rate: "Too many requests. Please try again later.", fields: "Please check the required fields and try again.", unavailable: "Contact is temporarily unavailable. Please email matias@in7ruder.com." },
  de: { rate: "Zu viele Anfragen. Bitte versuchen Sie es später erneut.", fields: "Bitte prüfen Sie die Pflichtfelder und versuchen Sie es erneut.", unavailable: "Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte schreiben Sie an matias@in7ruder.com." },
};

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
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
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 415 });
    }

    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: "Request is too large." }, { status: 413 });
    }
    const body = JSON.parse(rawBody);
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });
    const language = body.lang === "de" ? "de" : "en";
    const errorCopy = errors[language];

    if (!isAllowed(getClientIp(request))) {
      return NextResponse.json({ ok: false, error: errorCopy.rate }, { status: 429 });
    }

    const name = clean(body.name, 80);
    const email = clean(body.email, 160).toLowerCase();
    const company = clean(body.company, 120);
    const service = clean(body.service, 60);
    const message = clean(body.message, 2000);

    if (!name || !emailPattern.test(email) || !allowedServices.has(service) || message.length < 20) {
      return NextResponse.json({ ok: false, error: errorCopy.fields }, { status: 400 });
    }

    const requiredEnvironment = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_FROM", "MAIL_TO"];
    if (requiredEnvironment.some((key) => !process.env[key])) {
      console.error("CONTACT_CONFIGURATION_ERROR");
      return NextResponse.json({ ok: false, error: errorCopy.unavailable }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      disableFileAccess: true,
      disableUrlAccess: true,
    });

    const safe = { name: escapeHtml(name), email: escapeHtml(email), company: escapeHtml(company || "Not provided"), service: escapeHtml(service), message: escapeHtml(message) };
    const text = `Language: ${language}\nName: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nService: ${service}\n\nContext:\n${message}`;
    const html = `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5"><h2>New security call request</h2><p><strong>Language:</strong> ${language}</p><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Company:</strong> ${safe.company}</p><p><strong>Service:</strong> ${safe.service}</p><p><strong>Context:</strong></p><pre style="white-space:pre-wrap;background:#f3f5ef;padding:16px;border-radius:8px">${safe.message}</pre></div>`;

    const info = await transporter.sendMail({
      from: `"in7ruder" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Security call request: ${service}`,
      text,
      html,
      headers: { "X-Auto-Response-Suppress": "All" },
    });

    return NextResponse.json({ ok: true, messageId: info.messageId || null });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);
    return NextResponse.json({ ok: false, error: "Server error. Please email matias@in7ruder.com." }, { status: 500 });
  }
}
