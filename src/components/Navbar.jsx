"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { key: "services", hash: "services" },
  { key: "approach", hash: "approach" },
  { key: "about", hash: "about" },
  { key: "contact", hash: "contact" },
];

const labels = {
  en: { services: "Services", approach: "Approach", about: "About", contact: "Contact", open: "Open navigation", close: "Close navigation", skip: "Skip to content" },
  de: { services: "Leistungen", approach: "Arbeitsweise", about: "Über mich", contact: "Kontakt", open: "Navigation öffnen", close: "Navigation schliessen", skip: "Zum Inhalt springen" },
};

export default function Navbar({ lang = "en" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const copy = labels[lang] || labels.en;
  const home = `/${lang}`;
  const languageHref = (target) => pathname.replace(/^\/(en|de)(?=\/|$)/, `/${target}`) || `/${target}`;

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--canvas)]/95 backdrop-blur-lg">
        <a href="#main-content" className="absolute left-5 top-3 z-[60] -translate-y-24 bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0">
          {copy.skip}
        </a>

        <div className="page-wrap flex h-[76px] items-center justify-between">
          <Link href={home} aria-label="in7ruder home" className="relative z-50 inline-flex items-center">
            <Image src="/img/logo-in7ruder.png" alt="in7ruder" width={166} height={40} priority className="h-auto w-[142px] brightness-0" />
          </Link>

          <nav aria-label="Primary navigation" className="ml-auto hidden items-center gap-9 md:flex">
            {navigation.map((item) => (
              <Link key={item.key} href={`${home}/#${item.hash}`} className="text-[0.82rem] font-semibold text-[#3f4642] transition hover:text-[var(--accent)]">
                {copy[item.key]}
              </Link>
            ))}
            <span aria-hidden="true" className="h-7 w-px bg-[var(--line)]">
              <span className="sr-only">|</span>
            </span>
            <div className="flex items-center gap-3" aria-label="Language selection">
              {["en", "de"].map((language) => (
                <Link
                  key={language}
                  href={languageHref(language)}
                  hrefLang={`${language}-CH`}
                  aria-current={lang === language ? "page" : undefined}
                  className={`border-b pb-1 text-xs font-bold uppercase tracking-[0.12em] transition hover:text-[var(--accent)] ${lang === language ? "border-[var(--ink)] text-[var(--ink)]" : "border-transparent text-[var(--muted)]"}`}
                >
                  {language.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>

          <div className="relative z-50 ml-auto mr-3 flex items-center gap-2 md:hidden" aria-label="Language selection">
            {["en", "de"].map((language) => (
              <Link
                key={language}
                href={languageHref(language)}
                hrefLang={`${language}-CH`}
                aria-current={lang === language ? "page" : undefined}
                className={`border-b pb-1 text-xs font-bold uppercase tracking-[0.12em] ${lang === language ? "border-[var(--ink)] text-[var(--ink)]" : "border-transparent text-[var(--muted)]"}`}
              >
                {language.toUpperCase()}
              </Link>
            ))}
          </div>

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
      </header>

      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto overscroll-contain bg-[var(--canvas)] px-5 py-8 md:hidden"
          style={{ backgroundColor: "var(--canvas)" }}
        >
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-lg flex-col">
            {navigation.map((item) => (
              <Link key={item.key} href={`${home}/#${item.hash}`} onClick={() => setOpen(false)} className="border-b border-[var(--line)] py-5 text-3xl serif-display">
                {copy[item.key]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
