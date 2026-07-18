import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Work",
  description:
    "Proof over promises. Projects, credentials and results from real work across web apps, security improvements and technical delivery.",

  alternates: {
    canonical: "https://in7ruder.com/work",
  },

  openGraph: {
    type: "website",
    url: "https://in7ruder.com/work",
    title: "in7ruder | Work",
    description:
      "Proof over promises. Projects, credentials and results from real work across web apps, security improvements and technical delivery.",
    siteName: "in7ruder",
    images: [
      {
        url: "/img/logo-in7ruder.png",
        width: 1200,
        height: 630,
        alt: "in7ruder Work",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "in7ruder | Work",
    description:
      "Projects, credentials and results from real work across web apps and security improvements.",
    images: ["/img/logo-in7ruder.png"],
  },
};

export default function WorkPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://in7ruder.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Work",
          item: "https://in7ruder.com/work",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: "Work | in7ruder",
      url: "https://in7ruder.com/work",
      about: {
        "@type": "Person",
        name: "Matias Vanarelli",
        url: "https://in7ruder.com/work",
        email: "matias@in7ruder.com",
        homeLocation: {
          "@type": "Place",
          name: "Düdingen, Switzerland",
        },
        sameAs: [
          "https://www.linkedin.com/in/mvanarelli/",
          "https://app.hackthebox.com/users/1704649",
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Matias Vanarelli",
      url: "https://in7ruder.com/work",
      email: "matias@in7ruder.com",
      jobTitle: "Application Security / Pentesting",
      sameAs: [
        "https://www.linkedin.com/in/mvanarelli/",
        "https://app.hackthebox.com/users/1704649",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 px-[max(1.25rem,calc((100vw-72rem)/2))] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <p className="text-sm text-zinc-400">Whoami</p>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Proof over promises.
              <br />
              Projects, credentials, and results.
            </h1>

            <p className="text-lg text-zinc-300 max-w-xl">
              A selection of real work across web apps, security improvements,
              and technical delivery. Verified profiles and certifications
              included.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-(--color-brand) hover:!text-white transition"
              >
                Request a quote
              </Link>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                View projects
              </a>
            </div>
          </div>

          <div className="md:col-span-5 self-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">whoami</p>

              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>
                    <span className="text-white/80 font-semibold">
                      Matias Vanarelli
                    </span>{" "}
                    - Düdingen, Switzerland
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>CPTS | CEH | SOC Analyst L1 | Social Engineer</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:matias@in7ruder.com"
                      className="no-underline hover:text-brand transition"
                    >
                      matias@in7ruder.com
                    </a>
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>
                    LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/in/mvanarelli/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline hover:text-brand transition"
                    >
                      mvanarelli
                    </a>
                  </span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 border-t border-white/10">
        <div className="space-y-3">
          <p className="text-sm text-zinc-400">Featured projects</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Projects with an AppSec mindset
          </h2>
          <p className="text-zinc-300 max-w-2xl">
            Real-world websites. Each example shows the stack, the security
            focus, and the outcome you can verify live.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {/* Project 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold tracking-tight">
                Hermanos Corallo
              </h3>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                <Image
                  src="/img/projects/hc.png"
                  alt="Hermanos Corallo preview"
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover"
                />
              </div>

              <p className="text-sm text-zinc-300">
                Multimedia portfolio website for documentary and humanitarian
                storytelling.
              </p>
            </div>

            <div className="mt-5 space-y-3 text-sm text-zinc-300">
              <p>
                <span className="text-white/80 font-semibold">Stack:</span>{" "}
                HTML, CSS, JavaScript
              </p>
              <p>
                <span className="text-white/80 font-semibold">Focus:</span>{" "}
                Front-end hardening, safe media embedding, performance and
                reduced attack surface.
              </p>
              <p>
                <span className="text-white/80 font-semibold">Outcome:</span>{" "}
                Fast, content-first site with clean structure and minimal risk
                exposure.
              </p>
            </div>

            <div className="mt-auto pt-6">
              <a
                href="https://www.hermanoscorallo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-(--color-brand) hover:!text-white transition"
              >
                Visit site
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold tracking-tight">
                Corinne Vanarelli
              </h3>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                <Image
                  src="/img/projects/cv.png"
                  alt="Corinne Vanarelli website preview"
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover"
                />
              </div>

              <p className="text-sm text-zinc-300">
                Service-based website with events, blog, contact flows and
                dynamic content.
              </p>
            </div>

            <div className="mt-5 space-y-3 text-sm text-zinc-300">
              <p>
                <span className="text-white/80 font-semibold">Stack:</span>{" "}
                Next.js, Supabase
              </p>
              <p>
                <span className="text-white/80 font-semibold">Focus:</span>{" "}
                Secure data handling, form abuse prevention and OWASP-aligned
                patterns.
              </p>
              <p>
                <span className="text-white/80 font-semibold">Outcome:</span>{" "}
                Scalable platform with a secure-by-default foundation.
              </p>
            </div>

            <div className="mt-auto pt-6">
              <a
                href="https://www.corinnevanarelli.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-(--color-brand) hover:!text-white transition"
              >
                Visit site
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold tracking-tight">
                Ingredienza
              </h3>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                <Image
                  src="/img/projects/ing.png"
                  alt="Ingredienza store preview"
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover"
                />
              </div>

              <p className="text-sm text-zinc-300">
                Fully custom Shopify store for a premium food brand.
              </p>
            </div>

            <div className="mt-5 space-y-3 text-sm text-zinc-300">
              <p>
                <span className="text-white/80 font-semibold">Stack:</span>{" "}
                Shopify (custom theme)
              </p>
              <p>
                <span className="text-white/80 font-semibold">Focus:</span>{" "}
                Storefront AppSec hygiene, safe third-party integrations and
                privacy awareness.
              </p>
              <p>
                <span className="text-white/80 font-semibold">Outcome:</span>{" "}
                Production-ready e-commerce with reduced integration risk.
              </p>
            </div>

            <div className="mt-auto pt-6">
              <a
                href="https://www.ingredienza.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-(--color-brand) hover:!text-white transition"
              >
                Visit store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-16 border-t border-white/10 bg-zinc-950/40">
        <div className="grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-5 space-y-3">
            <p className="text-sm text-zinc-400">Credentials</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Verified profiles and certifications
            </h2>
            <p className="text-zinc-300">
              Links you can click. No vague claims.
            </p>
          </div>

          <div className="md:col-span-7 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">Profiles</p>
              <div className="mt-4 space-y-2 text-sm text-zinc-300">
                <a
                  href="https://www.linkedin.com/in/mvanarelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline hover:text-brand transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://app.hackthebox.com/users/1704649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline hover:text-brand transition"
                >
                  Hackthebox
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">Certifications</p>
              <div className="mt-4 space-y-2 text-sm text-zinc-300">
                <a
                  href="https://www.credly.com/badges/620b2b80-8d21-4e52-95d1-392866039eb3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline hover:text-brand transition"
                >
                  Hack The Box Certified Penetration Testing Specialist (HTB
                  CPTS)
                </a>

                <a
                  href="https://www.credential.net/c64c6668-744c-4856-b3ba-e5b681088033#acc.rKoNBnX3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline hover:text-brand transition"
                >
                  Certified Ethical Hacker (CEH)
                </a>

                <a
                  href="https://www.hacksmarter.org/completion/4960dabf02d49841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline hover:text-brand transition"
                >
                  Sliver C2: Pentesting and Evasion
                </a>

                <a
                  href="https://www.hacksmarter.org/completion/ca429adba82556f8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline hover:text-brand transition"
                >
                  Hands on Phishing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-12 items-center">
            <div className="md:col-span-8 space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Want to talk scope?
              </h2>
              <p className="text-zinc-300">
                Share context and goals. I’ll propose the fastest path to reduce
                risk.
              </p>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-(--color-brand) hover:!text-white transition"
              >
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
