import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Social Engineering Readiness and Penetration Testing",
  description:
    "An independent Swiss security practice providing social engineering readiness programs and targeted penetration testing.",
  alternates: { canonical: "https://in7ruder.com/" },
};

const faqs = [
  ["What types of teams do you train?", "Training can be designed for the wider organization or adapted to roles with greater exposure, including finance, executive support, IT, customer service and operations."],
  ["Can training reflect scenarios specific to our organization?", "Yes. The engagement begins with context. Scenarios are selected around relevant workflows, communication channels and threat patterns without exposing sensitive internal information unnecessarily."],
  ["How do you handle simulations and employee privacy?", "The purpose, authorization, data collected, reporting level and retention period are agreed before delivery. The default approach favors aggregated learning and practical improvement over individual blame."],
  ["What is included in a penetration test?", "The proposal defines the exact assets, methods, exclusions, testing window, reporting format and retest conditions. Findings include enough context and evidence for teams to reproduce, prioritize and remediate them."],
  ["Can we begin with a focused engagement?", "Yes. A workshop or tightly scoped assessment is often the right way to establish priorities and working fit before committing to a broader program."],
];

const engagements = [
  {
    label: "Primary engagement",
    title: "Social Engineering Readiness",
    text: "A focused program combining scenario-led training and role-specific simulations. It prepares teams for impersonation, voice-based attacks, MFA abuse, payment fraud, malware delivery and the decisions that make those attacks succeed.",
    result: "Teams practice how to recognize, verify and report manipulation under pressure.",
    href: "/services/social-engineering-readiness",
    link: "Explore social engineering readiness",
  },
  {
    label: "Technical validation",
    title: "Penetration Testing",
    text: "Manual-first testing across web applications, APIs, external exposure, internal networks and Active Directory, with clear boundaries and reproducible evidence.",
    result: "Prioritized findings, remediation context and an optional retest.",
    href: "/services/pentesting",
    link: "Explore penetration testing",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <div id="main-content">
      <section className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="page-wrap py-16 md:py-24 lg:py-28">
          <p className="eyebrow">Independent security practice, Switzerland</p>
          <div className="mt-8 max-w-5xl">
            <h1 className="display-title serif-display">Prepare your organization for attacks that begin with trust.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Practical social engineering training and focused penetration testing for organizations that need people and controls to perform under pressure.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="button-primary">Schedule a conversation <Arrow /></Link>
              <Link href="#services" className="button-secondary">View engagements</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-white">
        <div className="page-wrap py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="eyebrow eyebrow-dark">Human risk</p>
            <h2 className="section-title serif-display mt-7">The first control an attacker tests is often a person.</h2>
            <div className="mt-9 grid gap-6 border-t border-white/20 pt-8 text-base leading-7 text-white/70 md:grid-cols-2 md:gap-12 md:text-lg md:leading-8">
              <p>An urgent payment request, a familiar voice or a routine login prompt can create the opening that technical controls were meant to prevent.</p>
              <p>Readiness comes from realistic practice, clear verification habits and a reporting path people can use when a decision feels urgent.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[var(--paper)]">
        <div className="page-wrap py-16 md:py-24">
          <header className="max-w-3xl">
            <p className="eyebrow">Engagements</p>
            <h2 className="section-title serif-display mt-7">Focused security work with a defined outcome.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">Two focused offers cover the human and technical sides of exposure. Scope, delivery and the decision that follows are made explicit before the work begins.</p>
          </header>

          <div className="mt-12 border-t border-[var(--ink)]">
            {engagements.map((item) => (
              <article key={item.title} className="engagement-row">
                <div>
                  <p className="eyebrow">{item.label}</p>
                  <h3 className="serif-display mt-4 text-3xl leading-tight md:text-4xl">{item.title}</h3>
                </div>
                <div>
                  <p className="text-base leading-7 text-[var(--muted)]">{item.text}</p>
                  <p className="mt-4 text-sm font-semibold leading-6 text-[var(--ink)]">{item.result}</p>
                  <Link href={item.href} className="text-link mt-6">{item.link} <Arrow /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="border-y border-[var(--line)] bg-[var(--accent-soft)] text-[var(--ink)]">
        <div className="page-wrap py-16 md:py-24">
          <header className="max-w-3xl">
            <p className="eyebrow">Working principles</p>
            <h2 className="principles-title serif-display mt-7">
              <span>Clear boundaries.</span>
              <span>Direct responsibility.</span>
              <span>Useful evidence.</span>
            </h2>
          </header>
          <div className="mt-12 border-t border-[var(--line)]">
            {[
              ["Scope before activity", "Objectives, assets, participants, exclusions and decision criteria are explicit before testing or training begins."],
              ["Authorization without ambiguity", "Sensitive exercises require written authority, agreed contacts and a clear escalation path."],
              ["Direct specialist involvement", "The person who scopes the engagement remains involved in delivery, analysis and the final readout."],
              ["Outputs built for action", "Management receives clarity. Technical teams receive enough context and evidence to move forward."],
            ].map(([title, text]) => (
              <article key={title} className="grid gap-3 border-b border-[var(--line)] py-7 md:grid-cols-[18rem_1fr] md:gap-12">
                <h3 className="font-semibold">{title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[var(--paper)]">
        <div className="page-wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="relative min-h-[28rem] overflow-hidden bg-[#dedede] md:min-h-[38rem]">
            <Image src="/img/matias.JPG" alt="Matias Vanarelli, founder of in7ruder" fill sizes="(min-width: 1024px) 42vw, 100vw" className="scale-[1.18] object-cover object-[center_24%]" />
          </div>
          <div className="self-center">
            <p className="eyebrow">About the practice</p>
            <h2 className="section-title serif-display mt-7">Direct access to the person responsible for the work.</h2>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-[var(--muted)]">
              <p>in7ruder is a founder-led security practice built around careful scoping, direct communication and personal responsibility for delivery.</p>
              <p>My background combines building web applications with studying how attackers abuse people, identity and technical weaknesses. That perspective keeps human behavior and technical controls connected in every engagement.</p>
              <p>Work stays intentionally focused. If a broader team is ever needed, that is made clear before the engagement begins.</p>
            </div>
            <p className="mt-7 font-semibold">Matias Vanarelli, Founder</p>
            <a href="https://www.linkedin.com/in/mvanarelli/" target="_blank" rel="noreferrer" className="text-link mt-5">View background on LinkedIn <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--canvas)]">
        <div className="page-wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <header>
            <p className="eyebrow">Common questions</p>
            <h2 className="serif-display mt-7 text-4xl leading-tight md:text-5xl">Before we speak.</h2>
          </header>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <Contact />
    </div>
  );
}
