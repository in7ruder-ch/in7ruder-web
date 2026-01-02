"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  const openServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  };

  const closeServicesWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 140);
  };

  const closeAll = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header className="relative z-50 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeAll}>
          <Image
            src="/img/logo-in7ruder.png"
            alt="in7ruder"
            width={140}
            height={32}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {/* Services dropdown (hover only) */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServicesWithDelay}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-white transition"
              aria-haspopup="true"
              aria-expanded={servicesOpen ? "true" : "false"}
              onClick={(e) => e.preventDefault()}
            >
              Services
              <span className="text-white/40">▾</span>
            </button>

            {/* Hover bridge: keeps cursor “connected” to the dropdown */}
            <div
              className={`absolute left-0 top-full h-3 w-72 ${
                servicesOpen ? "block" : "hidden"
              }`}
              aria-hidden="true"
            />

            {/* Dropdown panel: no gap (mt-0) */}
            <div
              className={`absolute left-0 top-full mt-0 z-50 w-72 rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur p-2 shadow-lg ${
                servicesOpen ? "block" : "hidden"
              }`}
              onMouseEnter={openServices}
              onMouseLeave={closeServicesWithDelay}
            >
              <div className="flex flex-col">
                <Link
                  href="/services/pentesting"
                  className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                  onClick={() => setServicesOpen(false)}
                >
                  Pentesting
                </Link>
                <Link
                  href="/services/secure-fullstack"
                  className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                  onClick={() => setServicesOpen(false)}
                >
                  Secure Full-Stack
                </Link>
                <Link
                  href="/services/social-engineering-training"
                  className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                  onClick={() => setServicesOpen(false)}
                >
                  Social Engineering Training
                </Link>
              </div>
            </div>
          </div>

          <Link href="/work" className="hover:text-white transition" onClick={closeAll}>
            Whoami
          </Link>

          <Link href="/#resources" className="hover:text-white transition" onClick={closeAll}>
            Resources
          </Link>

          <Link href="/#contact" className="hover:text-white transition" onClick={closeAll}>
            Contact
          </Link>
        </nav>

        {/* Right side: desktop CTA + mobile burger */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:text-white! hover:bg-(--color-brand) transition-colors"
            onClick={closeAll}
          >
            Request a quote
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition"
            aria-label="Open menu"
            aria-expanded={mobileOpen ? "true" : "false"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-5 py-5 space-y-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Services
              </p>
              <div className="grid gap-1">
                <Link
                  href="/services/pentesting"
                  className="rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                  onClick={closeAll}
                >
                  Pentesting
                </Link>
                <Link
                  href="/services/secure-fullstack"
                  className="rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                  onClick={closeAll}
                >
                  Secure Full-Stack
                </Link>
                <Link
                  href="/services/social-engineering-training"
                  className="rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                  onClick={closeAll}
                >
                  Social Engineering Training
                </Link>
              </div>
            </div>

            <div className="space-y-1 pt-2 border-t border-white/10">
              <Link
                href="/work"
                className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                onClick={closeAll}
              >
                Whoami
              </Link>
              <Link
                href="/#resources"
                className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                onClick={closeAll}
              >
                Resources
              </Link>
              <Link
                href="/#contact"
                className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                onClick={closeAll}
              >
                Contact
              </Link>

              <Link
                href="/#contact"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-(--color-brand) hover:!text-white transition"
                onClick={closeAll}
              >
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
