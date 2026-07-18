import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Social Engineering Readiness",
  description: "Scenario-led social engineering training and authorized simulations that help teams recognize, verify and report manipulation under pressure.",
  alternates: { canonical: "https://in7ruder.com/services/social-engineering-readiness" },
  openGraph: {
    type: "website",
    url: "https://in7ruder.com/services/social-engineering-readiness",
    title: "Social Engineering Readiness | in7ruder",
    description: "Practical training and authorized simulations built around the decisions attackers exploit.",
    siteName: "in7ruder",
  },
};

const capabilities = [
  ["Scenario-led training", "Live sessions use realistic decisions instead of generic awareness slides. Content is adapted to the roles, workflows and exposure of the audience."],
  ["Phishing and impersonation", "Authorized exercises can cover email, messaging, executive impersonation, supplier fraud and other pretexts relevant to the organization."],
  ["Voice and identity attacks", "Teams practice handling urgent calls, familiar voices, MFA requests and attempts to bypass verification through authority or pressure."],
  ["Malware delivery scenarios", "Safe demonstrations explain how malicious links, documents and payloads reach users, what warning signals matter and how to respond without creating unnecessary risk."],
];

const formats = [
  ["Focused workshop", "A practical session for a defined team or risk scenario, followed by clear response guidance."],
  ["Readiness engagement", "Training, authorized simulation and debrief combined into a structured improvement cycle."],
  ["Role-specific exercise", "Targeted preparation for exposed functions such as finance, executive support, IT, operations or customer-facing teams."],
];

const faqs = [
  ["Is this standard security awareness training?", "No. The engagement is built around realistic scenarios, decisions and reporting paths that are relevant to your organization. It is not a generic compliance presentation."],
  ["Can phishing simulations be included?", "Yes. Simulations are one method inside the wider readiness engagement. Authorization, audience, data handling, escalation paths and reporting are agreed before delivery."],
  ["Do you identify individual employees in reports?", "The default approach favors aggregated learning and operational improvement. Any individual-level reporting must have a clear purpose and be explicitly agreed in advance."],
  ["Can the content be adapted to a specific team?", "Yes. Finance, executive support, IT, operations and customer-facing teams face different pretexts and decision pressure. Scenarios are selected accordingly."],
  ["What does management receive?", "A concise readout covering observed behavior, relevant gaps, recommended improvements and appropriate next steps. The goal is a decision-ready output, not a leaderboard."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function SocialEngineeringReadinessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Social Engineering Readiness",
    description: "Scenario-led social engineering training and authorized simulations for organizations in Switzerland.",
    provider: { "@type": "Organization", name: "in7ruder", url: "https://in7ruder.com" },
    url: "https://in7ruder.com/services/social-engineering-readiness",
    areaServed: { "@type": "Country", name: "Switzerland" },
    category: "Cybersecurity",
  };

  return (
    <div id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="page-wrap py-16 md:py-24 lg:py-28">
          <p className="eyebrow">Social Engineering Readiness</p>
          <h1 className="service-hero-title serif-display mt-8">Prepare people for attacks built on trust.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">Practical training and authorized simulations that help teams recognize manipulation, verify unusual requests and report concerns before pressure becomes an incident.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/?service=social-engineering-readiness#contact" className="button-primary">Discuss an engagement <Arrow /></Link>
            <a href="#scope" className="button-secondary">Explore the scope</a>
          </div>

          <div className="mt-16 grid border-y border-[var(--line)] md:grid-cols-3">
            <div className="service-stat md:pr-8"><p className="eyebrow">Built for</p><p className="mt-3 text-sm leading-6">Teams exposed to high-trust, high-pressure decisions</p></div>
            <div className="service-stat md:border-l md:border-[var(--line)] md:px-8"><p className="eyebrow">Methods</p><p className="mt-3 text-sm leading-6">Training, simulations, debriefs and response practice</p></div>
            <div className="service-stat md:border-l md:border-[var(--line)] md:pl-8"><p className="eyebrow">Outcome</p><p className="mt-3 text-sm leading-6">Clearer verification and reporting behavior</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-white">
        <div className="page-wrap py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="eyebrow eyebrow-dark">Why readiness matters</p>
            <h2 className="section-title serif-display mt-7">Attackers turn normal behavior into an attack surface.</h2>
            <div className="mt-9 grid gap-6 border-t border-white/20 pt-8 text-base leading-8 text-white/68 md:grid-cols-2 md:gap-12 md:text-lg">
              <p>Trust, urgency, authority and routine help organizations function. They also create openings when a request looks familiar and a decision feels time sensitive.</p>
              <p>The goal is not to make employees suspicious of everything. It is to make verification and reporting easier when context changes or something does not feel right.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="scope" className="bg-[var(--paper)]">
        <div className="page-wrap py-16 md:py-24">
          <header className="max-w-3xl">
            <p className="eyebrow">Capability</p>
            <h2 className="section-title serif-display mt-7">One program, shaped around the attacks that matter.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">The final scope depends on the audience, relevant threats and the decisions the organization needs people to handle more safely.</p>
          </header>
          <div className="mt-12 border-t border-[var(--ink)]">
            {capabilities.map(([title, text]) => (
              <article key={title} className="service-row">
                <h3 className="font-semibold">{title}</h3>
                <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--accent-soft)]">
        <div className="page-wrap py-16 md:py-24">
          <header className="max-w-3xl">
            <p className="eyebrow">Engagement formats</p>
            <h2 className="section-title serif-display mt-7">Start with the decision that needs to improve.</h2>
          </header>
          <div className="mt-12 grid border-y border-[var(--line)] md:grid-cols-3">
            {formats.map(([title, text], index) => (
              <article key={title} className={`py-8 md:min-h-64 md:px-8 ${index > 0 ? "border-t border-[var(--line)] md:border-l md:border-t-0" : "md:pl-0"}`}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-white">
        <div className="page-wrap py-16 md:py-24">
          <header className="max-w-3xl">
            <p className="eyebrow eyebrow-dark">How the work is run</p>
            <h2 className="section-title serif-display mt-7">Realistic enough to be useful. Controlled enough to be safe.</h2>
          </header>
          <div className="mt-12 border-t border-white/25">
            {[
              ["Written authorization", "Audience, channels, scenarios, data handling, escalation contacts and safe stop conditions are agreed first."],
              ["Relevant pressure", "Exercises reflect genuine workflows without using humiliation, surprise or fear as teaching methods."],
              ["Practical debrief", "Participants understand the signals, decision points and reporting actions that matter after the exercise."],
              ["Management clarity", "Observations are translated into prioritized improvements, ownership and an appropriate next step."],
            ].map(([title, text]) => (
              <article key={title} className="grid gap-3 border-b border-white/20 py-7 md:grid-cols-[18rem_1fr] md:gap-12">
                <h3 className="font-semibold">{title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-white/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper)]">
        <div className="page-wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <header>
            <p className="eyebrow">Common questions</p>
            <h2 className="serif-display mt-7 text-4xl leading-tight md:text-5xl">Before we define the scenario.</h2>
          </header>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-[var(--accent)] text-white">
        <div className="page-wrap py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">Start with context</p>
            <h2 className="serif-display mt-6 text-4xl leading-tight md:text-6xl">Build readiness around the situations your people actually face.</h2>
            <Link href="/?service=social-engineering-readiness#contact" className="accent-inverse-cta mt-8">Schedule a conversation <Arrow /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
