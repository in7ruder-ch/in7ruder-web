"use client";

export default function Resources() {
  const resources = [
    {
      id: "owasp-dev-guide",
      title: "OWASP Developer Guide",
      description:
        "Secure coding principles and best practices for building resilient applications.",
      href: "/resources/OWASP_Developer_Guide.pdf",
      cta: "Download",
    },
    {
      id: "owasp-testing-guide",
      title: "OWASP Testing Guide",
      description:
        "Comprehensive methodology for testing web applications and identifying real risk.",
      href: "/resources/OWASP_Testing_Guide.pdf",
      cta: "Download",
    },
    {
      id: "owasp-wasg",
      title: "OWASP Web Application Security Guide",
      description:
        "Foundational concepts and controls for securing modern web applications.",
      href: "/resources/OWASP_Web_Application_Security.pdf",
      cta: "Download",
    },
  ];

  return (
    <section id="resources" className="py-16 border-t border-white/10">
      <div className="grid gap-8 md:grid-cols-12 items-start">
        <div className="md:col-span-5 self-center">
          <p className="text-sm text-zinc-400">Resources</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
            Practical security resources
          </h2>
          <p className="mt-3 text-zinc-300">
            Short, actionable material you can use immediately. No fluff.
          </p>
        </div>

        <div className="md:col-span-7 grid gap-4">
          {resources.map((r) => (
            <div
              key={r.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-sm font-semibold text-white">{r.title}</p>
                <p className="mt-1 text-sm text-zinc-400">
                  {r.description}
                </p>
              </div>

              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-(--color-brand) hover:!text-white transition"
              >
                {r.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
