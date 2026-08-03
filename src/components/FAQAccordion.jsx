"use client";

import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="border-t border-[var(--line)]">
      {items.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={question} className="border-b border-[var(--line)]">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-8 py-6 text-left"
            >
              <span className="text-base font-semibold md:text-lg">{question}</span>
              <span aria-hidden="true" className={`relative h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                <span className="absolute left-0 top-1/2 h-px w-5 bg-current" />
                <span className="absolute left-1/2 top-0 h-5 w-px bg-current" />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-[var(--muted)] md:text-base">{answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
