import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Whoami from "@/components/Whoami";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="pt-14">
      <Hero />
      <Services />
      <Whoami />
      <Resources />
      <Contact />
    </main>
  );
}
