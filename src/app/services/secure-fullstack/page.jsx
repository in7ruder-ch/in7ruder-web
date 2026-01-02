import Link from "next/link";

export default function SecureFullstackPage() {
    return (
        <main className="pt-14">
            {/* HERO */}
            <section className="py-16 md:py-24">
                <div className="grid gap-10 md:grid-cols-12 items-center">
                    <div className="md:col-span-7 space-y-6">
                        <p className="text-sm text-zinc-400">Secure Full-Stack</p>

                        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                            Build security into your stack,
                            <br />
                            not around it
                        </h1>

                        <p className="text-lg text-zinc-300 max-w-xl">
                            Practical application security across frontend, backend, and
                            infrastructure. Designed to reduce real risk, not slow teams
                            down.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/?service=Secure%20Fullstack#contact"
                                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
                            >
                                Discuss your setup
                            </Link>

                            <a
                                href="#approach"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                            >
                                Security approach
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
                                    Product teams building web apps or APIs
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                                    Startups scaling fast without security debt
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                                    Teams preparing for audits or external testing
                                </li>
                            </ul>

                            <div className="mt-6 rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                                <p className="text-xs text-zinc-400">Focus areas</p>
                                <div className="mt-2 text-sm text-white space-y-1">
                                    <p>Frontend and API security</p>
                                    <p>Authentication and authorization</p>
                                    <p>Secure data handling</p>
                                    <p>OWASP-aligned best practices</p>
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
                        Many security issues are introduced during development, not after
                        deployment. Fixing them later is expensive and often incomplete.
                    </p>

                    <p className="text-zinc-300">
                        Secure Full-Stack focuses on identifying weak points in your
                        application architecture and development practices, then improving
                        them in a way your team can realistically maintain.
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
                            Grounded in real-world standards
                        </h2>
                        <p className="text-zinc-300">
                            Security guidance is based on established frameworks and adapted
                            to your actual stack and risk profile.
                        </p>
                    </div>

                    <div className="md:col-span-7 grid gap-5 md:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h3 className="text-xl font-semibold tracking-tight">
                                OWASP guidelines
                            </h3>
                            <p className="mt-2 text-sm text-zinc-300">
                                Alignment with OWASP Top 10 and related best practices to address
                                common and critical application risks.
                            </p>
                            <a
                                href="/resources/owasp-top-10.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex text-sm text-white/80 underline hover:text-white transition"
                            >
                                Download OWASP Top 10 (PDF)
                            </a>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h3 className="text-xl font-semibold tracking-tight">
                                Context-aware security
                            </h3>
                            <p className="mt-2 text-sm text-zinc-300">
                                Recommendations are tailored to your architecture, not applied
                                blindly from a checklist.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h3 className="text-xl font-semibold tracking-tight">
                                Developer-friendly
                            </h3>
                            <p className="mt-2 text-sm text-zinc-300">
                                Clear explanations and practical examples your team can
                                implement without friction.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h3 className="text-xl font-semibold tracking-tight">
                                Long-term risk reduction
                            </h3>
                            <p className="mt-2 text-sm text-zinc-300">
                                Focus on patterns and practices that reduce future
                                vulnerabilities, not just current issues.
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
                        Clear guidance your team can act on
                    </h2>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-xl font-semibold tracking-tight">
                            Architecture review
                        </h3>
                        <p className="mt-2 text-sm text-zinc-300">
                            Identification of risky design decisions across frontend,
                            backend, and integrations.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-xl font-semibold tracking-tight">
                            Secure coding guidance
                        </h3>
                        <p className="mt-2 text-sm text-zinc-300">
                            Practical recommendations aligned with OWASP guidance and modern
                            development practices.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-xl font-semibold tracking-tight">
                            Risk prioritization
                        </h3>
                        <p className="mt-2 text-sm text-zinc-300">
                            Issues ranked by likelihood and impact, not theoretical severity.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-xl font-semibold tracking-tight">
                            Actionable roadmap
                        </h3>
                        <p className="mt-2 text-sm text-zinc-300">
                            A clear path to improve security incrementally without blocking
                            delivery.
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
                                Improve security without slowing your team
                            </h2>
                            <p className="text-zinc-300">
                                Let’s review your stack and identify the changes that will
                                actually reduce risk.
                            </p>
                        </div>

                        <div className="md:col-span-4 md:flex md:justify-end">
                            <Link
                                href="/?service=Secure%20Fullstack#contact"
                                className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
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
