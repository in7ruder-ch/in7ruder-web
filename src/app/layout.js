import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "in7ruder | Security-driven Web Apps, Training & Pentesting",
  description:
    "Secure Full-Stack Development (OWASP-aligned), Corporate Social Engineering Training, and External/Internal/Webapp Pentesting.",
  metadataBase: new URL("https://in7ruder.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <div className="mx-auto max-w-6xl px-5">
          <SmoothScroll />
          <Navbar />
          <main className="pb-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
