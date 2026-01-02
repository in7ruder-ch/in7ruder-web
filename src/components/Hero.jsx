export default function Hero() {
    return (
        <section className="py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12 items-center">
                {/* Left */}
                <div className="md:col-span-7 space-y-6">
                    <p className="text-sm text-zinc-400">
                        Real-world security for modern teams
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                        Reduce real-world security risk{" "}
                        <span className="text-white/70">across</span>{" "}
                        <span className="bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
                            code, systems, and people
                        </span>
                        .
                    </h1>

                    <p className="text-lg text-zinc-300 max-w-xl">
                        Security services focused on reducing real-world risk through secure
                        development, penetration testing, and social engineering awareness.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
                        >
                            Request a quote
                        </a>

                        <a
                            href="#resources"
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                        >
                            Get the OWASP AppSec checklist
                        </a>
                    </div>
                </div>

                {/* Right */}
                <div className="md:col-span-5 self-center">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <p className="text-sm font-semibold text-white">
                            What you get
                        </p>

                        <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                            <li className="flex gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                                Clear scope and timeline before we start
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                                Risk prioritization with concrete next steps
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                                Executive clarity plus technical detail when needed
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                                Actionable deliverables (checklists, reports, remediation)
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                                Optional retest or follow-up support after fixes
                            </li>
                        </ul>

                        <div className="mt-6 rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                            <p className="text-xs text-zinc-400">Typical engagements</p>
                            <p className="mt-2 text-sm text-white">
                                Secure Full-Stack • Pentesting • Social Engineering Training • Simulations
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
