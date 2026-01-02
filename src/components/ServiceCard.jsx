export default function ServiceCard({
  title,
  subtitle,
  bullets,
  cta,
  href,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-zinc-300">{subtitle}</p>
      </div>

      <ul className="mt-5 space-y-3 text-sm text-zinc-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href={href}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
