"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const copyByLanguage = {
  en: {
    options: [
      { value: "social-engineering-readiness", label: "Social Engineering Readiness" },
      { value: "penetration-testing", label: "Penetration Testing" },
      { value: "not-sure", label: "I would like to discuss the situation first" },
    ],
    eyebrow: "Start with context",
    title: "A useful first conversation.",
    intro: "Twenty minutes is enough to understand the situation, establish whether there is a fit and identify the next sensible step. I reply within one business day.",
    name: "Name",
    email: "Work email",
    company: "Company",
    interest: "Area of interest",
    select: "Select an engagement",
    prompt: "What prompted the conversation?",
    placeholder: "A short description of the situation is enough.",
    privacy: "Your information is used only to assess and respond to this request.",
    privacyLink: "Read the Privacy Notice",
    send: "Request a conversation",
    sending: "Sending...",
    success: "Thank you. I will review the context and reply within one business day.",
    error: "Your request could not be sent. Please email matias@in7ruder.com.",
  },
  de: {
    options: [
      { value: "social-engineering-readiness", label: "Social Engineering Readiness" },
      { value: "penetration-testing", label: "Penetrationstest" },
      { value: "not-sure", label: "Ich möchte zuerst die Situation besprechen" },
    ],
    eyebrow: "Mit Kontext beginnen",
    title: "Ein sinnvolles Erstgespräch.",
    intro: "Zwanzig Minuten reichen aus, um die Situation zu verstehen, die Zusammenarbeit einzuordnen und den nächsten sinnvollen Schritt festzulegen. Ich antworte innerhalb eines Werktages.",
    name: "Name",
    email: "Geschäftliche E-Mail",
    company: "Unternehmen",
    interest: "Interessengebiet",
    select: "Leistung auswählen",
    prompt: "Was hat das Gespräch ausgelöst?",
    placeholder: "Eine kurze Beschreibung der Situation genügt.",
    privacy: "Ihre Angaben werden ausschliesslich zur Prüfung und Beantwortung Ihrer Anfrage verwendet.",
    privacyLink: "Datenschutzerklärung lesen",
    send: "Erstgespräch anfragen",
    sending: "Wird gesendet...",
    success: "Vielen Dank. Ich prüfe Ihre Anfrage und antworte innerhalb eines Werktages.",
    error: "Ihre Anfrage konnte nicht gesendet werden. Bitte schreiben Sie an matias@in7ruder.com.",
  },
};

const aliases = {
  pentesting: "penetration-testing",
  "phishing-readiness": "social-engineering-readiness",
  "social-engineering-training": "social-engineering-readiness",
  "corporate-social-engineering-training": "social-engineering-readiness",
};

function ContactForm({ lang }) {
  const copy = copyByLanguage[lang] || copyByLanguage.en;
  const searchParams = useSearchParams();
  const incoming = searchParams.get("service") || "";
  const normalizedIncoming = incoming.toLowerCase().trim().replace(/\s+/g, "-");
  const initialService = copy.options.some((option) => option.value === normalizedIncoming)
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
    const payload = { ...Object.fromEntries(new FormData(form).entries()), lang };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) {
        setStatus("error");
        setMessage(result?.error || copy.error);
        return;
      }
      form.reset();
      setSelectedService("");
      setStatus("success");
      setMessage(copy.success);
    } catch {
      setStatus("error");
      setMessage(copy.error);
    }
  }

  const fieldClass = "mt-2 w-full border border-white/25 bg-transparent px-3.5 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-white focus:ring-0";

  return (
    <form onSubmit={handleSubmit} className="border-t border-white/30 pt-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">{copy.name}<input name="name" type="text" required maxLength={80} autoComplete="name" className={fieldClass} /></label>
        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">{copy.email}<input name="email" type="email" required maxLength={160} autoComplete="email" className={fieldClass} /></label>
        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">{copy.company}<input name="company" type="text" maxLength={120} autoComplete="organization" className={fieldClass} /></label>
        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">{copy.interest}
          <select name="service" required value={selectedService} onChange={(event) => setSelectedService(event.target.value)} className={`${fieldClass} appearance-none`}>
            <option value="" className="text-black">{copy.select}</option>
            {copy.options.map((option) => <option key={option.value} value={option.value} className="text-black">{option.label}</option>)}
          </select>
        </label>
      </div>
      <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.12em] text-white/55">{copy.prompt}
        <textarea name="message" required minLength={20} maxLength={2000} rows={4} placeholder={copy.placeholder} className={`${fieldClass} resize-y normal-case tracking-normal`} />
      </label>
      <div className="absolute -left-[9999px]" aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-white/60">
          {copy.privacy}{" "}
          <Link href={`/${lang}/privacy`} className="border-b border-white/45 pb-px text-white transition hover:border-white hover:text-white">
            {copy.privacyLink}
          </Link>
        </p>
        <button type="submit" disabled={status === "loading"} className="accent-inverse-cta shrink-0 justify-center disabled:cursor-wait disabled:opacity-60">{status === "loading" ? copy.sending : copy.send}</button>
      </div>
      <div aria-live="polite" className="mt-4 min-h-6">{message && <p className={`text-sm font-medium ${status === "error" ? "text-[#ffaaa0]" : "text-white/80"}`}>{message}</p>}</div>
    </form>
  );
}

export default function Contact({ lang = "en" }) {
  const copy = copyByLanguage[lang] || copyByLanguage.en;
  return (
    <section id="contact" className="bg-[var(--accent)] text-white">
      <div className="page-wrap py-16 md:py-24">
        <header className="max-w-3xl">
          <p className="eyebrow eyebrow-dark">{copy.eyebrow}</p>
          <h2 className="section-title serif-display mt-7">{copy.title}</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{copy.intro}</p>
        </header>
        <div className="mt-12 max-w-4xl"><Suspense fallback={<div className="min-h-[30rem] border-t border-white/30" />}><ContactForm lang={lang} /></Suspense></div>
      </div>
    </section>
  );
}
