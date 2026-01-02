import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;

const ipHits = new Map();

function getClientIp(req) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();

  const xr = req.headers.get("x-real-ip");
  if (xr) return xr.trim();

  return "unknown";
}

function checkRateLimit(ip) {
  const now = Date.now();
  const hit = ipHits.get(ip);

  if (!hit) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (now > hit.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (hit.count >= RATE_LIMIT_MAX) {
    return { allowed: false, resetAt: hit.resetAt };
  }

  hit.count += 1;
  ipHits.set(ip, hit);
  return { allowed: true };
}

export async function POST(req) {
  try {
    const body = await req.json();

    const ip = getClientIp(req);
    const rl = checkRateLimit(ip);

    if (!rl.allowed) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    const website = String(body.website || "").trim();
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 0),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"in7ruder" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New contact request: ${service}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json(
      { ok: true, messageId: info.messageId || null },
      { status: 200 }
    );
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);

    return NextResponse.json(
      {
        ok: false,
        error: "Server error",
        detail:
          process.env.NODE_ENV === "development"
            ? String(err?.message || err)
            : undefined,
      },
      { status: 500 }
    );
  }
}
