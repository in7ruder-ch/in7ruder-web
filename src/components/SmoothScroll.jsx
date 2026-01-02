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

export default function SmoothScroll() {
  useEffect(() => {
    // 1) On initial load (or route change), if there is a hash, scroll to it.
    const initialHash = window.location.hash;
    if (initialHash) {
      // Wait a tick so the DOM is ready (especially after navigation)
      requestAnimationFrame(() => {
        // Try a few times in case the target renders slightly later
        let tries = 0;
        const maxTries = 20;

        const attempt = () => {
          tries += 1;
          const ok = scrollToHash(initialHash, { behavior: "smooth" });
          if (!ok && tries < maxTries) {
            setTimeout(attempt, 50);
          }
        };

        attempt();
      });
    }

    // 2) Handle hash changes (e.g. user clicks an anchor or hash updates)
    const onHashChange = () => {
      scrollToHash(window.location.hash, { behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);

    // 3) Intercept same-page anchor clicks for smooth behavior
    const onClick = (e) => {
      const a = e.target?.closest?.('a[href^="#"]');
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      // Only intercept if it is same page anchor (href starts with #)
      e.preventDefault();
      history.pushState(null, "", href);
      scrollToHash(href, { behavior: "smooth" });
    };

    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
