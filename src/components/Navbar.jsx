"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
        Skip to content
      </a>

      <div className="page-wrap flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="in7ruder home" className="relative z-50 inline-flex items-center">
          <Image src="/img/logo-in7ruder.png" alt="in7ruder" width={166} height={40} priority className="h-auto w-[142px] brightness-0" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-[0.82rem] font-semibold text-[#3f4642] transition hover:text-[var(--accent)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/#contact" className="nav-cta hidden md:inline-flex">
          Schedule a conversation
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
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
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-[var(--line)] py-5 text-3xl serif-display">
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="nav-cta mt-8 justify-center px-5 py-4">
              Schedule a conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
