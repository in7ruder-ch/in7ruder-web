import LegalDocument from "@/components/LegalDocument";
import { alternatesFor, localizedUrl } from "@/lib/i18n";

const copyByLanguage = {
  en: {
    metadata: {
      title: "Legal Notice",
      description: "Operator, contact and legal information for the in7ruder website.",
    },
    eyebrow: "Site information",
    title: "Legal Notice",
    intro: "Operator and legal information for in7ruder.com.",
    updated: "Last updated: 3 August 2026",
    sections: [
      {
        title: "Operator and contact",
        paragraphs: [
          "in7ruder",
          "Matias Vanarelli",
          "Fribourg, Switzerland",
          "Email: matias@in7ruder.com",
        ],
      },
      {
        title: "Responsible for content",
        paragraphs: ["Matias Vanarelli is responsible for the content of this website."],
      },
      {
        title: "No online contract",
        paragraphs: [
          "The website provides information about possible security engagements. Submitting the contact form or sending an email requests an initial conversation only. It does not create a contract, authorize security testing or constitute acceptance of an engagement.",
          "Any engagement requires a separate written scope, commercial agreement and explicit authorization before work begins.",
        ],
      },
      {
        title: "Information and liability",
        paragraphs: [
          "Content is prepared with reasonable care but is general information, not legal advice, and no guarantee is given that it is complete or continuously current. Service scope and suitability are established in the relevant written agreement.",
          "This website contains links to independent third-party services. in7ruder does not control their content or data practices and is not responsible for them.",
        ],
      },
      {
        title: "Copyright",
        paragraphs: [
          "Unless stated otherwise, the text, design and original materials on this website belong to Matias Vanarelli or are used under an applicable licence. Reproduction or commercial reuse requires prior written permission except where permitted by law.",
        ],
      },
      {
        title: "Applicable law",
        paragraphs: ["This website and this legal notice are governed by Swiss law, subject to any mandatory rules that apply."],
      },
    ],
  },
  de: {
    metadata: {
      title: "Impressum",
      description: "Betreiber-, Kontakt- und Rechtsinformationen zur Website von in7ruder.",
    },
    eyebrow: "Angaben zur Website",
    title: "Impressum",
    intro: "Betreiber- und Rechtsinformationen zu in7ruder.com.",
    updated: "Stand: 3. August 2026",
    sections: [
      {
        title: "Betreiber und Kontakt",
        paragraphs: [
          "in7ruder",
          "Matias Vanarelli",
          "Fribourg, Schweiz",
          "E-Mail: matias@in7ruder.com",
        ],
      },
      {
        title: "Verantwortlich für den Inhalt",
        paragraphs: ["Für den Inhalt dieser Website ist Matias Vanarelli verantwortlich."],
      },
      {
        title: "Kein Online-Vertragsabschluss",
        paragraphs: [
          "Die Website informiert über mögliche Security-Engagements. Mit dem Absenden des Kontaktformulars oder einer E-Mail wird lediglich ein Erstgespräch angefragt. Dadurch entsteht weder ein Vertrag noch eine Autorisierung für Sicherheitstests oder eine verbindliche Zusage für ein Engagement.",
          "Jedes Engagement setzt vor Arbeitsbeginn einen separaten schriftlichen Leistungsumfang, eine kommerzielle Vereinbarung und eine ausdrückliche Autorisierung voraus.",
        ],
      },
      {
        title: "Information und Haftung",
        paragraphs: [
          "Die Inhalte werden mit angemessener Sorgfalt erstellt, dienen jedoch der allgemeinen Information und stellen keine Rechtsberatung dar. Für Vollständigkeit und fortlaufende Aktualität wird keine Gewähr übernommen. Umfang und Eignung einer Leistung werden in der jeweiligen schriftlichen Vereinbarung festgelegt.",
          "Diese Website enthält Links zu unabhängigen Angeboten Dritter. in7ruder hat keinen Einfluss auf deren Inhalte oder Datenbearbeitung und übernimmt dafür keine Verantwortung.",
        ],
      },
      {
        title: "Urheberrecht",
        paragraphs: [
          "Soweit nicht anders angegeben, stehen Texte, Gestaltung und eigene Materialien dieser Website im Eigentum von Matias Vanarelli oder werden auf Grundlage einer entsprechenden Lizenz verwendet. Eine Vervielfältigung oder kommerzielle Weiterverwendung bedarf der vorherigen schriftlichen Zustimmung, soweit sie nicht gesetzlich erlaubt ist.",
        ],
      },
      {
        title: "Anwendbares Recht",
        paragraphs: ["Für diese Website und dieses Impressum gilt schweizerisches Recht, vorbehaltlich zwingender gesetzlicher Bestimmungen."],
      },
    ],
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const copy = copyByLanguage[lang] || copyByLanguage.en;
  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    alternates: alternatesFor(lang, "legal"),
    openGraph: {
      type: "website",
      locale: lang === "de" ? "de_CH" : "en_CH",
      url: localizedUrl(lang, "legal"),
      siteName: "in7ruder",
      title: `${copy.metadata.title} | in7ruder`,
      description: copy.metadata.description,
    },
  };
}

export default async function LegalPage({ params }) {
  const { lang } = await params;
  const copy = copyByLanguage[lang] || copyByLanguage.en;
  return <LegalDocument eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} updated={copy.updated} sections={copy.sections} />;
}
