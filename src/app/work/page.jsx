import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="pt-14">
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
                    <span className="text-white/80 font-semibold">Matias Vanarelli</span>{" "}
                    - Düdingen, Switzerland
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>
                    CPTS | CEH | SOC Analyst L1 | Social Engineer
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:matias@in7ruder.com"
                      className="no-underline hover:underline hover:text-brand transition"
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
                      className="no-underline hover:underline hover:text-brand transition"
                    >
                     mvanarelli
                    </a>
                  </span>
                </li>


                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>Languages: English, Spanish, German</span>
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
            Real work, clearly explained
          </h2>
          <p className="text-zinc-300 max-w-2xl">
            Short, readable snapshots. What it was, what I did, and what changed.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {/* Placeholder cards – we’ll replace with your real projects */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight">
                  Project name
                </h3>
                <p className="text-sm text-zinc-300">
                  One-liner: what this project is and who it’s for.
                </p>
              </div>

              <div className="mt-5 space-y-3 text-sm text-zinc-300">
                <p>
                  <span className="text-white/80 font-semibold">Stack:</span>{" "}
                  Next.js, Tailwind, …
                </p>
                <p>
                  <span className="text-white/80 font-semibold">Focus:</span>{" "}
                  Security hardening, performance, …
                </p>
                <p>
                  <span className="text-white/80 font-semibold">Outcome:</span>{" "}
                  Concrete improvements or result.
                </p>
              </div>

              {/* Only one CTA now */}
              <div className="mt-auto pt-6">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-(--color-brand) hover:!text-white transition"
                >
                  Live / Repo
                </a>
              </div>
            </div>
          ))}
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
                  className="block no-underline hover:underline hover:text-brand transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://app.hackthebox.com/users/1704649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline hover:underline hover:text-brand transition"
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
                  className="block no-underline hover:underline hover:text-brand transition"
                >
                  Hack The Box Certified Penetration Testing Specialist (HTB CPTS)
                </a>

                <a
                  href="https://www.credential.net/c64c6668-744c-4856-b3ba-e5b681088033#acc.rKoNBnX3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline hover:underline hover:text-brand transition"
                >
                  Certified Ethical Hacker (CEH)
                </a>

                <a
                  href="https://www.hacksmarter.org/completion/4960dabf02d49841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline hover:underline hover:text-brand transition"
                >
                  Sliver C2: Pentesting and Evasion
                </a>

                <a
                  href="https://www.hacksmarter.org/completion/ca429adba82556f8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline hover:underline hover:text-brand transition"
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
                Share context and goals. I’ll propose the fastest path to reduce risk.
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
