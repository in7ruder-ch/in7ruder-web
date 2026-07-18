import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LANGUAGES, SITE_URL, isLanguage, localizedUrl } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const german = lang === "de";
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: german ? "in7ruder | Social Engineering Readiness und Penetrationstests" : "in7ruder | Social Engineering Readiness and Penetration Testing",
      template: "%s | in7ruder",
    },
    description: german ? "Praxisnahe Social Engineering Readiness und autorisierte Penetrationstests für Unternehmen in der Schweiz." : "Practical social engineering readiness programs and authorized penetration testing for organizations in Switzerland.",
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    icons: { icon: "/favicon.ico" },
  };
}

export default async function LanguageLayout({ children, params }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const german = lang === "de";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "in7ruder",
    url: localizedUrl(lang),
    email: "matias@in7ruder.com",
    description: german ? "Unabhängige Security-Boutique mit Sitz in der Schweiz." : "Independent security practice based in Switzerland.",
    inLanguage: german ? "de-CH" : "en-CH",
    founder: { "@type": "Person", name: "Matias Vanarelli", jobTitle: "Offensive Security Specialist", sameAs: ["https://www.linkedin.com/in/mvanarelli/", "https://app.hackthebox.com/users/1704649"] },
    areaServed: ["Zürich", "Zug", "Basel", "Geneva", "Bern", "Fribourg"],
  };
  return (
    <html lang={lang} className={inter.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
