import LegalDocument from "@/components/LegalDocument";
import { alternatesFor, localizedUrl } from "@/lib/i18n";

const copyByLanguage = {
  en: {
    metadata: {
      title: "Privacy Notice",
      description: "How in7ruder collects, uses, stores and protects personal data when you use this website or contact the practice.",
    },
    eyebrow: "Data protection",
    title: "Privacy Notice",
    intro: "This notice explains what personal data is processed when you visit in7ruder.com, submit an enquiry or contact the practice by email.",
    updated: "Last updated: 3 August 2026",
    sections: [
      {
        title: "Controller and contact",
        paragraphs: [
          "The controller responsible for the processing described in this notice is Matias Vanarelli, in7ruder, Fribourg, Switzerland.",
          "Questions about data protection or requests concerning your personal data can be sent to matias@in7ruder.com.",
        ],
      },
      {
        title: "Data processed",
        paragraphs: ["The website processes only the data needed to operate securely and respond to enquiries."],
        bullets: [
          "Website and connection data: IP address, date and time, requested address, HTTP and device information, referrer, response status and operational security logs.",
          "Contact form data: name, work email address, optional company name, selected area of interest, message and language preference.",
          "Correspondence data: the content and metadata of subsequent email exchanges and any information you choose to provide.",
          "Aggregate analytics data: page address, timestamp, filtered query parameters, referrer, approximate location, browser, operating system and device type.",
        ],
      },
      {
        title: "Purposes",
        bullets: [
          "Deliver, maintain and protect the website and diagnose technical or security issues.",
          "Assess and respond to enquiries, clarify scope and take steps requested before a possible engagement.",
          "Prevent spam, abuse and unauthorized use of the contact form.",
          "Comply with legal obligations and document a business relationship where necessary.",
        ],
      },
      {
        title: "Service providers and transfers",
        paragraphs: [
          "Vercel Inc. hosts and delivers the website, executes the contact form endpoint and provides privacy-focused Web Analytics. Vercel may process connection, request and operational log data, aggregate page-view data, and the form submission while it is transmitted to the email service.",
          "Namecheap Inc. provides Private Email. Enquiry content and subsequent correspondence are transmitted to and stored in that email service.",
          "These providers and their subprocessors may process data outside Switzerland, including in the United States. Where required, cross-border processing is covered by contractual safeguards described in the providers' data processing terms. in7ruder does not sell personal data.",
        ],
        links: [
          { label: "Vercel privacy information", href: "https://vercel.com/legal/privacy-policy" },
          { label: "Vercel data processing terms", href: "https://vercel.com/legal/dpa" },
          { label: "Namecheap privacy information", href: "https://www.namecheap.com/legal/general/privacy-policy/" },
          { label: "Namecheap data processing terms", href: "https://www.namecheap.com/legal/universal/data-processing-addendum/" },
        ],
      },
      {
        title: "Retention",
        paragraphs: [
          "Enquiries that do not lead to an engagement are normally deleted within 12 months after the last substantive contact. Correspondence and records connected with an engagement are retained for the period required by Swiss accounting, contractual or other legal obligations, generally up to 10 years where those obligations apply.",
          "in7ruder does not maintain a separate archive of website access logs. Vercel retains runtime logs and aggregate analytics for the periods applicable to the account plan. The request-derived visitor identifier used by Web Analytics is discarded after 24 hours. Data may be kept longer when necessary to establish, exercise or defend legal claims, or when deletion is temporarily restricted by law.",
        ],
      },
      {
        title: "Analytics and cookies",
        paragraphs: [
          "in7ruder uses Vercel Web Analytics to understand aggregate page views and successful contact form submissions. Web Analytics does not use third-party cookies and does not provide in7ruder with information that identifies an individual visitor. The contact conversion event contains only the selected service and interface language. Names, email addresses, company names and message content are not sent to analytics.",
          "The site does not use advertising trackers, marketing pixels or non-essential cookies, and it does not embed a booking platform or social feed.",
          "Links to third-party websites, including LinkedIn, only transfer you to those services when you choose to follow them. Their own privacy terms then apply.",
        ],
      },
      {
        title: "Security and automated decisions",
        paragraphs: [
          "Reasonable technical and organizational measures are used to protect personal data, including encrypted transmission, restricted access and data minimization. No internet transmission or storage system can be guaranteed to be completely secure.",
          "The website does not use personal data for automated decision-making or profiling.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Subject to applicable law, you may request information about personal data held about you and ask for inaccurate data to be corrected. You may also request deletion, restriction, objection or release and transfer of data where the relevant legal conditions are met. Statutory retention duties and overriding legitimate interests may limit these rights.",
          "Requests can be sent to matias@in7ruder.com. You may also contact the Swiss Federal Data Protection and Information Commissioner if you believe your data has been processed unlawfully.",
        ],
        links: [{ label: "Swiss data protection authority", href: "https://www.edoeb.admin.ch/en" }],
      },
      {
        title: "Legal basis and changes",
        paragraphs: [
          "Processing is governed primarily by the Swiss Federal Act on Data Protection. Where the EU or UK GDPR applies, processing is based on steps requested before entering a contract, compliance with legal duties and the legitimate interests described above.",
          "This notice is updated when the website, providers or processing activities change. The current version is the one published on this page.",
        ],
      },
    ],
  },
  de: {
    metadata: {
      title: "Datenschutzerklärung",
      description: "Wie in7ruder Personendaten beim Besuch dieser Website und bei der Kontaktaufnahme erhebt, verwendet, speichert und schützt.",
    },
    eyebrow: "Datenschutz",
    title: "Datenschutzerklärung",
    intro: "Diese Erklärung beschreibt, welche Personendaten beim Besuch von in7ruder.com, beim Absenden einer Anfrage oder bei der Kontaktaufnahme per E-Mail bearbeitet werden.",
    updated: "Stand: 3. August 2026",
    sections: [
      {
        title: "Verantwortliche Stelle und Kontakt",
        paragraphs: [
          "Verantwortlich für die in dieser Erklärung beschriebene Datenbearbeitung ist Matias Vanarelli, in7ruder, Fribourg, Schweiz.",
          "Fragen zum Datenschutz und Begehren betreffend Ihre Personendaten können an matias@in7ruder.com gerichtet werden.",
        ],
      },
      {
        title: "Bearbeitete Daten",
        paragraphs: ["Die Website bearbeitet nur jene Daten, die für einen sicheren Betrieb und die Beantwortung von Anfragen erforderlich sind."],
        bullets: [
          "Website- und Verbindungsdaten: IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse, HTTP- und Geräteinformationen, Referrer, Antwortstatus sowie technische Sicherheitsprotokolle.",
          "Daten aus dem Kontaktformular: Name, geschäftliche E-Mail-Adresse, optionaler Unternehmensname, ausgewähltes Interessengebiet, Nachricht und Spracheinstellung.",
          "Korrespondenzdaten: Inhalt und Metadaten der anschliessenden E-Mail-Kommunikation sowie weitere freiwillig mitgeteilte Informationen.",
          "Aggregierte Analysedaten: Seitenadresse, Zeitstempel, gefilterte Abfrageparameter, Referrer, ungefährer Standort, Browser, Betriebssystem und Gerätetyp.",
        ],
      },
      {
        title: "Zwecke",
        bullets: [
          "Bereitstellung, Wartung und Schutz der Website sowie Analyse technischer oder sicherheitsrelevanter Fehler.",
          "Prüfung und Beantwortung von Anfragen, Klärung des Umfangs und Durchführung gewünschter Schritte vor einem möglichen Engagement.",
          "Verhinderung von Spam, Missbrauch und unbefugter Nutzung des Kontaktformulars.",
          "Erfüllung gesetzlicher Pflichten und Dokumentation einer Geschäftsbeziehung, soweit erforderlich.",
        ],
      },
      {
        title: "Dienstleister und Auslandbekanntgabe",
        paragraphs: [
          "Vercel Inc. hostet und verteilt die Website, führt den Endpunkt des Kontaktformulars aus und stellt eine datenschutzorientierte Webanalyse bereit. Dabei kann Vercel Verbindungs-, Anfrage- und technische Protokolldaten, aggregierte Seitenaufrufe sowie die Formularübermittlung auf dem Weg zum E-Mail-Dienst bearbeiten.",
          "Namecheap Inc. stellt Private Email bereit. Der Inhalt einer Anfrage und die anschliessende Korrespondenz werden an diesen E-Mail-Dienst übermittelt und dort gespeichert.",
          "Diese Anbieter und deren Unterauftragsbearbeiter können Daten ausserhalb der Schweiz bearbeiten, insbesondere in den USA. Soweit erforderlich, stützt sich die grenzüberschreitende Bearbeitung auf die in den Datenverarbeitungsbedingungen der Anbieter beschriebenen vertraglichen Garantien. in7ruder verkauft keine Personendaten.",
        ],
        links: [
          { label: "Datenschutzinformationen von Vercel", href: "https://vercel.com/legal/privacy-policy" },
          { label: "Datenverarbeitungsbedingungen von Vercel", href: "https://vercel.com/legal/dpa" },
          { label: "Datenschutzinformationen von Namecheap", href: "https://www.namecheap.com/legal/general/privacy-policy/" },
          { label: "Datenverarbeitungsbedingungen von Namecheap", href: "https://www.namecheap.com/legal/universal/data-processing-addendum/" },
        ],
      },
      {
        title: "Aufbewahrung",
        paragraphs: [
          "Anfragen, die nicht zu einem Engagement führen, werden in der Regel spätestens 12 Monate nach dem letzten inhaltlichen Kontakt gelöscht. Korrespondenz und Unterlagen zu einem Engagement werden so lange aufbewahrt, wie es schweizerische Buchführungs-, Vertrags- oder andere gesetzliche Pflichten verlangen, in der Regel bis zu 10 Jahre, sofern diese Pflichten anwendbar sind.",
          "in7ruder führt kein separates Archiv der Website-Zugriffsprotokolle. Vercel bewahrt Laufzeitprotokolle und aggregierte Analysedaten während der für das verwendete Kontomodell geltenden Dauer auf. Die aus der Anfrage abgeleitete Besucherkennung der Webanalyse wird nach 24 Stunden verworfen. Daten können länger aufbewahrt werden, wenn dies zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist oder eine Löschung gesetzlich eingeschränkt ist.",
        ],
      },
      {
        title: "Webanalyse und Cookies",
        paragraphs: [
          "in7ruder verwendet Vercel Web Analytics, um aggregierte Seitenaufrufe und erfolgreich gesendete Kontaktformulare zu messen. Web Analytics verwendet keine Drittanbieter-Cookies und stellt in7ruder keine Informationen bereit, die einzelne Besuchende identifizieren. Das Conversion-Event des Kontaktformulars enthält nur die ausgewählte Leistung und die Sprache der Benutzeroberfläche. Namen, E-Mail-Adressen, Unternehmensnamen und Nachrichteninhalte werden nicht an die Webanalyse übermittelt.",
          "Die Website verwendet keine Werbetracker, Marketing-Pixel oder nicht notwendigen Cookies und bindet keine Buchungsplattform oder Social-Media-Feeds ein.",
          "Links zu Websites Dritter, einschliesslich LinkedIn, leiten Sie erst dann zu diesen Diensten weiter, wenn Sie den Link aktiv aufrufen. Ab diesem Zeitpunkt gelten deren eigene Datenschutzbestimmungen.",
        ],
      },
      {
        title: "Sicherheit und automatisierte Entscheidungen",
        paragraphs: [
          "Zum Schutz von Personendaten werden angemessene technische und organisatorische Massnahmen eingesetzt, darunter verschlüsselte Übertragung, eingeschränkte Zugriffe und Datenminimierung. Eine vollständig risikofreie Übertragung oder Speicherung im Internet kann nicht garantiert werden.",
          "Die Website verwendet Personendaten weder für automatisierte Einzelentscheidungen noch für Profiling.",
        ],
      },
      {
        title: "Ihre Rechte",
        paragraphs: [
          "Im Rahmen des anwendbaren Rechts können Sie Auskunft über die zu Ihrer Person bearbeiteten Daten verlangen und unrichtige Daten berichtigen lassen. Sie können zudem Löschung, Einschränkung, Widerspruch oder Herausgabe und Übertragung verlangen, soweit die entsprechenden gesetzlichen Voraussetzungen erfüllt sind. Gesetzliche Aufbewahrungspflichten und überwiegende berechtigte Interessen können diese Rechte begrenzen.",
          "Begehren können an matias@in7ruder.com gesendet werden. Wenn Sie der Ansicht sind, dass Ihre Daten rechtswidrig bearbeitet wurden, können Sie sich auch an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten wenden.",
        ],
        links: [{ label: "Eidgenössischer Datenschutzbeauftragter", href: "https://www.edoeb.admin.ch/de" }],
      },
      {
        title: "Rechtsgrundlage und Änderungen",
        paragraphs: [
          "Die Datenbearbeitung richtet sich in erster Linie nach dem schweizerischen Bundesgesetz über den Datenschutz. Soweit die EU- oder UK-DSGVO anwendbar ist, stützt sich die Bearbeitung auf vorvertragliche Massnahmen auf Ihre Anfrage, gesetzliche Pflichten und die oben beschriebenen berechtigten Interessen.",
          "Diese Erklärung wird angepasst, wenn sich die Website, die eingesetzten Dienstleister oder die Datenbearbeitung ändern. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.",
        ],
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
    alternates: alternatesFor(lang, "privacy"),
    openGraph: {
      type: "website",
      locale: lang === "de" ? "de_CH" : "en_CH",
      url: localizedUrl(lang, "privacy"),
      siteName: "in7ruder",
      title: `${copy.metadata.title} | in7ruder`,
      description: copy.metadata.description,
    },
  };
}

export default async function PrivacyPage({ params }) {
  const { lang } = await params;
  const copy = copyByLanguage[lang] || copyByLanguage.en;
  return <LegalDocument eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} updated={copy.updated} sections={copy.sections} />;
}
