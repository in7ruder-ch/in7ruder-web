import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://in7ruder.com"),
  title: {
    default: "in7ruder | Social Engineering Readiness and Penetration Testing",
    template: "%s | in7ruder",
  },
  description:
    "Practical social engineering readiness programs and authorized penetration testing for Swiss organizations.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CH",
    url: "https://in7ruder.com/",
    siteName: "in7ruder",
    title: "in7ruder | Social Engineering Readiness and Penetration Testing",
    description:
      "Practical security training and targeted testing for organizations in Switzerland.",
    images: [{ url: "/img/logo-in7ruder.png", width: 1200, height: 630, alt: "in7ruder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "in7ruder | Social Engineering Readiness and Penetration Testing",
    description: "Practical security training and targeted testing for organizations in Switzerland.",
    images: ["/img/logo-in7ruder.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "in7ruder",
    url: "https://in7ruder.com",
    email: "matias@in7ruder.com",
    description: "Independent security practice based in Switzerland.",
    founder: {
      "@type": "Person",
      name: "Matias Vanarelli",
      jobTitle: "Offensive Security Specialist",
      sameAs: [
        "https://www.linkedin.com/in/mvanarelli/",
        "https://app.hackthebox.com/users/1704649",
      ],
    },
    areaServed: ["Zürich", "Zug", "Basel", "Geneva", "Bern", "Fribourg"],
  };

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
