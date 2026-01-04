"use client";

import { useEffect } from "react";

function scrollToHash(hash, { behavior = "smooth" } = {}) {
  if (!hash) return false;

  const raw = hash.startsWith("#") ? hash.slice(1) : hash;
  const id = decodeURIComponent(raw);
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

function attemptScrollToHash(hash, { behavior = "smooth" } = {}) {
  if (!hash) return;

  let tries = 0;
  const maxTries = 30;

  const attempt = () => {
    tries += 1;
    const ok = scrollToHash(hash, { behavior });

    if (!ok && tries < maxTries) {
      requestAnimationFrame(attempt);
    }
  };

  // wait one frame so layout/hydration can settle
  requestAnimationFrame(attempt);
}

export default function SmoothScroll() {
  useEffect(() => {
    // 1) On initial load, if there is a hash, scroll to it.
    if (window.location.hash) {
      attemptScrollToHash(window.location.hash, { behavior: "smooth" });
    }

    // 2) Handle hash changes (native)
    const onHashChange = () => {
      attemptScrollToHash(window.location.hash, { behavior: "smooth" });
    };

    // 3) Handle history navigation (pushState/back/forward)
    const onPopState = () => {
      if (window.location.hash) {
        attemptScrollToHash(window.location.hash, { behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onPopState);

    // 4) Intercept same-page anchor clicks for smooth behavior:
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

        // set hash via location (more consistent than pushState for scrolling)
        if (window.location.hash !== href) {
          window.location.hash = href;
        }

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

        if (window.location.hash !== hash) {
          window.location.hash = hash;
        }

        attemptScrollToHash(hash, { behavior: "smooth" });
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
