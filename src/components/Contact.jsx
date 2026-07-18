"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const serviceOptions = [
  { value: "social-engineering-readiness", label: "Social Engineering Readiness" },
  { value: "penetration-testing", label: "Penetration Testing" },
  { value: "appsec-review", label: "Application Security Review" },
  { value: "not-sure", label: "I would like to discuss the situation first" },
];

const aliases = {
  pentesting: "penetration-testing",
  "phishing-readiness": "social-engineering-readiness",
  "social-engineering-training": "social-engineering-readiness",
  "corporate-social-engineering-training": "social-engineering-readiness",
  "secure-fullstack": "appsec-review",
  "secure-full-stack-development": "appsec-review",
};

function ContactForm() {
  const searchParams = useSearchParams();
  const incoming = searchParams.get("service") || "";
  const normalizedIncoming = incoming.toLowerCase().trim().replace(/\s+/g, "-");
  const initialService = serviceOptions.some((option) => option.value === normalizedIncoming)
    ? normalizedIncoming
    : aliases[normalizedIncoming] || "";
  const [selectedService, setSelectedService] = useState(initialService);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) {
        setStatus("error");
        setMessage(result?.error || "Your request could not be sent. Please email matias@in7ruder.com.");
        return;
      }
      form.reset();
      setSelectedService("");
      setStatus("success");
      setMessage("Thank you. I will review the context and reply within one business day.");
    } catch {
      setStatus("error");
      setMessage("Your request could not be sent. Please email matias@in7ruder.com.");
    }
  }

  const fieldClass = "mt-2 w-full border border-white/25 bg-transparent px-3.5 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-white focus:ring-0";

  return (
    <form onSubmit={handleSubmit} className="border-t border-white/30 pt-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">Name<input name="name" type="text" required maxLength={80} autoComplete="name" className={fieldClass} /></label>
        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">Work email<input name="email" type="email" required maxLength={160} autoComplete="email" className={fieldClass} /></label>
        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">Company<input name="company" type="text" maxLength={120} autoComplete="organization" className={fieldClass} /></label>
        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">Area of interest
          <select name="service" required value={selectedService} onChange={(event) => setSelectedService(event.target.value)} className={`${fieldClass} appearance-none`}>
            <option value="" className="text-black">Select an engagement</option>
            {serviceOptions.map((option) => <option key={option.value} value={option.value} className="text-black">{option.label}</option>)}
          </select>
        </label>
      </div>
      <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.12em] text-white/55">What prompted the conversation?
        <textarea name="message" required minLength={20} maxLength={2000} rows={4} placeholder="A short description of the situation is enough." className={`${fieldClass} resize-y normal-case tracking-normal`} />
      </label>
      <div className="absolute -left-[9999px]" aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-white/45">Your information is used only to assess and respond to this request.</p>
        <button type="submit" disabled={status === "loading"} className="accent-inverse-cta shrink-0 justify-center disabled:cursor-wait disabled:opacity-60">
          {status === "loading" ? "Sending..." : "Request a conversation"}
        </button>
      </div>
      <div aria-live="polite" className="mt-4 min-h-6">{message && <p className={`text-sm font-medium ${status === "error" ? "text-[#ffaaa0]" : "text-white/75"}`}>{message}</p>}</div>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--accent)] text-white">
      <div className="page-wrap py-16 md:py-24">
        <header className="max-w-3xl">
          <p className="eyebrow eyebrow-dark">Start with context</p>
          <h2 className="section-title serif-display mt-7">A useful first conversation.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">Twenty minutes is enough to understand the situation, establish whether there is a fit and identify the next sensible step. I reply within one business day.</p>
        </header>
        <div className="mt-12 max-w-4xl">
          <Suspense fallback={<div className="min-h-[30rem] border-t border-white/30" />}><ContactForm /></Suspense>
        </div>
      </div>
    </section>
  );
}
