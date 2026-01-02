export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-zinc-400 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} in7ruder</p>
        <p className="text-zinc-500">
          Security-first. Business-ready.
        </p>
      </div>
    </footer>
  );
}
