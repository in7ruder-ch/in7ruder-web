import HomePage from "@/components/pages/HomePage";
import { alternatesFor, isLanguage, localizedUrl } from "@/lib/i18n";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const german = lang === "de";
  const title = german ? "Social Engineering Readiness und Penetrationstests" : "Social Engineering Readiness and Penetration Testing";
  const description = german ? "Praxisnahe Social-Engineering-Trainings und fokussierte Penetrationstests für Unternehmen in der Schweiz." : "Practical social engineering training and focused penetration testing for organizations in Switzerland.";
  return {
    title,
    description,
    alternates: alternatesFor(lang),
    openGraph: { type: "website", locale: german ? "de_CH" : "en_CH", url: localizedUrl(lang), siteName: "in7ruder", title: `${title} | in7ruder`, description },
    twitter: { card: "summary_large_image", title: `${title} | in7ruder`, description },
  };
}

export default async function Home({ params }) {
  const { lang } = await params;
  if (!isLanguage(lang)) return null;
  return <HomePage lang={lang} />;
}
