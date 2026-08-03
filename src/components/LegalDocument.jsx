export default function LegalDocument({ eyebrow, title, intro, updated, sections }) {
  return (
    <div id="main-content">
      <section className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="page-wrap py-16 md:py-24 lg:py-28">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="legal-title serif-display mt-8 max-w-4xl text-5xl leading-[0.98] md:text-7xl">{title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">{intro}</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">{updated}</p>
        </div>
      </section>

      <section className="bg-[var(--paper)]">
        <div className="page-wrap py-12 md:py-20">
          <div className="max-w-4xl border-t border-[var(--ink)]">
            {sections.map((section) => (
              <section key={section.title} className="legal-section grid gap-5 border-b border-[var(--line)] py-9 md:grid-cols-[16rem_1fr] md:gap-12 md:py-12">
                <h2 className="serif-display text-2xl leading-tight md:text-3xl">{section.title}</h2>
                <div className="space-y-5 text-[0.95rem] leading-7 text-[var(--muted)]">
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul className="space-y-3 pl-5">
                      {section.bullets.map((item) => <li key={item} className="pl-1">{item}</li>)}
                    </ul>
                  )}
                  {section.links?.length > 0 && (
                    <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
                      {section.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="legal-link">
                          {link.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
