"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { key: "services", hash: "services" },
  { key: "approach", hash: "approach" },
  { key: "about", hash: "about" },
  { key: "contact", hash: "contact" },
];

const labels = {
  en: { services: "Services", approach: "Approach", about: "About", contact: "Contact", cta: "Schedule a conversation", open: "Open navigation", close: "Close navigation", skip: "Skip to content" },
  de: { services: "Leistungen", approach: "Arbeitsweise", about: "Über mich", contact: "Kontakt", cta: "Erstgespräch vereinbaren", open: "Navigation öffnen", close: "Navigation schließen", skip: "Zum Inhalt springen" },
};

export default function Navbar({ lang = "en" }) {
  const [open, setOpen] = useState(false);
  const copy = labels[lang] || labels.en;
  const home = `/${lang}`;

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--canvas)]/95 backdrop-blur-lg">
      <a href="#main-content" className="absolute left-5 top-3 z-[60] -translate-y-24 bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0">
        {copy.skip}
      </a>

      <div className="page-wrap flex h-[76px] items-center justify-between">
        <Link href={home} aria-label="in7ruder home" className="relative z-50 inline-flex items-center">
          <Image src="/img/logo-in7ruder.png" alt="in7ruder" width={166} height={40} priority className="h-auto w-[142px] brightness-0" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link key={item.key} href={`${home}/#${item.hash}`} className="text-[0.82rem] font-semibold text-[#3f4642] transition hover:text-[var(--accent)]">
              {copy[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link href={lang === "en" ? "/de" : "/en"} hrefLang={lang === "en" ? "de-CH" : "en-CH"} className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)] transition hover:text-[var(--accent)]">
            {lang === "en" ? "DE" : "EN"}
          </Link>
          <Link href={`${home}/#contact`} className="nav-cta">
            {copy.cta}
          </Link>
        </div>

        <Link href={lang === "en" ? "/de" : "/en"} hrefLang={lang === "en" ? "de-CH" : "en-CH"} className="relative z-50 mr-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)] md:hidden">
          {lang === "en" ? "DE" : "EN"}
        </Link>

        <button
          type="button"
          aria-label={open ? copy.close : copy.open}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 grid h-11 w-11 place-items-center border border-[var(--line)] md:hidden"
        >
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className={`block h-px w-5 bg-[var(--ink)] transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-[var(--ink)] transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="fixed inset-0 z-40 bg-[var(--canvas)] px-5 pt-28 md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-lg flex-col">
            {navigation.map((item) => (
              <Link key={item.key} href={`${home}/#${item.hash}`} onClick={() => setOpen(false)} className="border-b border-[var(--line)] py-5 text-3xl serif-display">
                {copy[item.key]}
              </Link>
            ))}
            <Link href={`${home}/#contact`} onClick={() => setOpen(false)} className="nav-cta mt-8 justify-center px-5 py-4">
              {copy.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
