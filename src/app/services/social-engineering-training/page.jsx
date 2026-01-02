import Link from "next/link";

export default function SocialEngineeringTrainingPage() {
  return (
    <main className="pt-14">
      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <p className="text-sm text-zinc-400">
              Social Engineering Training
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Reduce human risk
              <br />
              through awareness and practice
            </h1>

            <p className="text-lg text-zinc-300 max-w-xl">
              Practical training focused on how real social engineering attacks
              work and how people actually respond under pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/?service=Social%20Engineering%20Training#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-(--color-brand) hover:!text-white transition"
              >
                Discuss a training
              </Link>

              <a
                href="#approach"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Training approach
              </a>
            </div>
          </div>

          <div className="md:col-span-5 self-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">
                Best suited for
              </p>

              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  Teams handling sensitive data or access
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  Organizations facing phishing or impersonation attempts
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  Companies looking to reduce human-driven incidents
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                <p className="text-xs text-zinc-400">Focus areas</p>
                <div className="mt-2 text-sm text-white space-y-1">
                  <p>Phishing and pretexting</p>
                  <p>Impersonation techniques</p>
                  <p>Decision-making under pressure</p>
                  <p>Practical response strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-3xl space-y-6">
          <p className="text-zinc-300">
            Most successful attacks do not rely on technical exploits alone.
            They exploit human behavior: trust, urgency, authority, and routine.
            These attacks are subtle, scalable, and often invisible until damage is done.
          </p>

          <p className="text-zinc-300">
            Social Engineering Training helps teams recognize manipulation patterns,
            slow down automatic reactions, and make deliberate decisions under pressure.
            The goal is not paranoia, but awareness: replacing fear and impulse with
            clarity, confidence, and consistent response.
          </p>
        </div>
      </section>


      {/* APPROACH */}
      <section
        id="approach"
        className="py-16 border-t border-white/10 bg-zinc-950/40"
      >
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-5 space-y-3">
            <p className="text-sm text-zinc-400">Approach</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Awareness over fear
            </h2>
            <p className="text-zinc-300">
              The goal is not to scare people, but to build understanding and
              calm decision-making in risky situations.
            </p>
          </div>

          <div className="md:col-span-7 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold tracking-tight">
                Real-world scenarios
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Training is based on common attack patterns observed in real
                incidents, not theoretical examples.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold tracking-tight">
                Human behavior first
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                We focus on why people comply under pressure and how attackers
                exploit normal human responses.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold tracking-tight">
                Practical signals
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Clear indicators teams can watch for when something feels off,
                even if it looks legitimate.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold tracking-tight">
                Repeatable habits
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Simple decision frameworks people can apply consistently in
                daily work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 border-t border-white/10">
        <div className="space-y-3">
          <p className="text-sm text-zinc-400">What you get</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Practical skills that stick
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold tracking-tight">
              Interactive sessions
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              Live or workshop-style sessions with real examples and guided
              discussion.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold tracking-tight">
              Scenario walkthroughs
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              Step-by-step breakdowns of common social engineering techniques.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold tracking-tight">
              Clear response guidance
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              What to do, who to contact, and how to respond when something
              suspicious happens.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold tracking-tight">
              Long-term awareness
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              A foundation teams can build on instead of one-off training that
              fades quickly.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-12 items-center">
            <div className="md:col-span-8 space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Build awareness without fear
              </h2>
              <p className="text-zinc-300">
                Let’s design a training that fits your team, your culture, and
                your real risk profile.
              </p>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <Link
                href="/?service=Social%20Engineering%20Training#contact"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-(--color-brand) hover:!text-white transition"
              >
                Start the conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
