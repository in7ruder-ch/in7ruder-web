import Link from "next/link";

const copyByLanguage = {
  en: {
    eyebrow: "Request received",
    title: "Thank you. I have the context.",
    body: "I will review your message and reply within one business day. If your request is time sensitive, you can also email me directly.",
    home: "Return to the homepage",
    email: "Email Matias",
  },
  de: {
    eyebrow: "Anfrage erhalten",
    title: "Vielen Dank. Der Kontext ist angekommen.",
    body: "Ich prüfe Ihre Nachricht und antworte innerhalb eines Werktages. Bei einer zeitkritischen Anfrage können Sie mir zusätzlich direkt eine E-Mail senden.",
    home: "Zur Startseite",
    email: "E-Mail an Matias",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const copy = copyByLanguage[lang] || copyByLanguage.en;
  return {
    title: copy.eyebrow,
    description: copy.body,
    robots: { index: false, follow: false, noarchive: true },
  };
}

export default async function ThankYouPage({ params }) {
  const { lang } = await params;
  const copy = copyByLanguage[lang] || copyByLanguage.en;

  return (
    <div id="main-content" lang={lang}>
      <section className="min-h-[calc(100vh-13rem)] border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="page-wrap flex min-h-[calc(100vh-13rem)] items-center py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 className="serif-display mt-8 text-5xl leading-[0.98] md:text-7xl">{copy.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">{copy.body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${lang}`} className="button-primary">{copy.home}</Link>
              <a href="mailto:matias@in7ruder.com" className="button-secondary">{copy.email}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
