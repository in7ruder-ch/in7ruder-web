import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Whoami from "@/components/Whoami";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Security-driven Web Apps, Training & Pentesting",
  description:
    "Security-first Full-Stack Development, Corporate Social Engineering Training, and professional Pentesting. Built with an AppSec mindset.",

  alternates: {
    canonical: "https://in7ruder.com/",
  },

  openGraph: {
    type: "website",
    url: "https://in7ruder.com/",
    title: "in7ruder | Security-driven Web Apps, Training & Pentesting",
    description:
      "Security-first Full-Stack Development, Corporate Social Engineering Training, and professional Pentesting. Built with an AppSec mindset.",
    siteName: "in7ruder",
    images: [
      {
        url: "/img/logo-in7ruder.png",
        width: 1200,
        height: 630,
        alt: "in7ruder – Security-driven Web Apps & Pentesting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "in7ruder | Security-driven Web Apps, Training & Pentesting",
    description:
      "Security-first Full-Stack Development, Corporate Social Engineering Training, and professional Pentesting.",
    images: ["/img/logo-in7ruder.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Whoami />
      <Resources />
      <Contact />
    </main>
  );
}
