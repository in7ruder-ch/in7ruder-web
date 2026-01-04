"use client";

import { useEffect } from "react";

function scrollToHash(hash, { behavior = "smooth" } = {}) {
  if (!hash) return false;

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

function attemptScrollToHash(hash, { behavior = "smooth" } = {}) {
  if (!hash) return;

  requestAnimationFrame(() => {
    let tries = 0;
    const maxTries = 20;

    const attempt = () => {
      tries += 1;
      const ok = scrollToHash(hash, { behavior });
      if (!ok && tries < maxTries) {
        setTimeout(attempt, 50);
      }
    };

    attempt();
  });
}

export default function SmoothScroll() {
  useEffect(() => {
    // 1) On initial load, if there is a hash, scroll to it.
    if (window.location.hash) {
      attemptScrollToHash(window.location.hash, { behavior: "smooth" });
    }

    // 2) Handle hash changes
    const onHashChange = () => {
      attemptScrollToHash(window.location.hash, { behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);

    // 3) Intercept same-page anchor clicks for smooth behavior:
    // - "#contact"
    // - "/#contact" (only when already on "/")
    const onClick = (e) => {
      const a = e.target?.closest?.("a[href]");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      // Case A: "#section"
      if (href.startsWith("#")) {
        e.preventDefault();
        history.pushState(null, "", href);
        attemptScrollToHash(href, { behavior: "smooth" });
        return;
      }

      // Case B: "/#section" (only intercept if we are already on "/")
      if (href.startsWith("/#")) {
        const isOnHome =
          window.location.pathname === "/" || window.location.pathname === "";
        if (!isOnHome) return;

        const hash = href.slice(1); // "/#contact" -> "#contact"
        if (!hash || hash === "#") return;

        e.preventDefault();
        history.pushState(null, "", hash);
        attemptScrollToHash(hash, { behavior: "smooth" });
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
