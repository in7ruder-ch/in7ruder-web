import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://in7ruder.com"),

  title: {
    default: "in7ruder | Security-driven Web Apps, Training & Pentesting",
    template: "%s | in7ruder",
  },

  description:
    "Secure Full-Stack Development (OWASP-aligned), Corporate Social Engineering Training, and External/Internal/Webapp Pentesting.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://in7ruder.com/",
    siteName: "in7ruder",
    title: "in7ruder | Security-driven Web Apps, Training & Pentesting",
    description:
      "Secure Full-Stack Development (OWASP-aligned), Corporate Social Engineering Training, and External/Internal/Webapp Pentesting.",
    images: [
      {
        url: "/img/logo-in7ruder.png",
        width: 1200,
        height: 630,
        alt: "in7ruder",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "in7ruder | Security-driven Web Apps, Training & Pentesting",
    description:
      "Secure Full-Stack Development (OWASP-aligned), Corporate Social Engineering Training, and External/Internal/Webapp Pentesting.",
    images: ["/img/logo-in7ruder.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "in7ruder",
      url: "https://in7ruder.com",
      email: "matias@in7ruder.com",
      sameAs: [
        "https://www.linkedin.com/in/mvanarelli/",
        "https://app.hackthebox.com/users/1704649",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Matias Vanarelli",
      url: "https://in7ruder.com/work",
      email: "matias@in7ruder.com",
      jobTitle: "Application Security / Pentesting",
      sameAs: [
        "https://www.linkedin.com/in/mvanarelli/",
        "https://app.hackthebox.com/users/1704649",
      ],
      worksFor: {
        "@type": "Organization",
        name: "in7ruder",
        url: "https://in7ruder.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "in7ruder",
      url: "https://in7ruder.com",
    },
  ];

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />

        <main className="pb-20">
          <div className="mx-auto max-w-6xl px-5">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
