export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-6 flex items-center justify-between">
        <div className="font-semibold tracking-tight">
          in7ruder
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#whoami" className="hover:text-white transition">
            Proof
          </a>
          <a href="#resources" className="hover:text-white transition">
            Resources
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition"
        >
          Request a quote
        </a>
      </div>
    </header>
  );
}
