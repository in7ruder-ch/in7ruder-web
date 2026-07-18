export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper)] text-[var(--ink)]">
      <div className="page-wrap py-10">
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <a href="mailto:matias@in7ruder.com" className="footer-link inline-flex items-center gap-2.5 text-sm" aria-label="Email Matias at matias@in7ruder.com">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3.75 5.75h16.5v12.5H3.75z" />
              <path d="m4.5 6.5 7.5 6 7.5-6" />
            </svg>
            <span>matias@in7ruder.com</span>
          </a>
          <a href="https://www.linkedin.com/in/mvanarelli/" target="_blank" rel="noreferrer" className="footer-link inline-flex items-center gap-2.5 text-sm" aria-label="Matias Vanarelli on LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
              <path d="M6.45 8.15H3.2V20h3.25V8.15ZM4.83 3A1.89 1.89 0 1 0 4.8 6.78 1.89 1.89 0 0 0 4.83 3ZM20.8 13.2c0-3.57-1.9-5.23-4.45-5.23a4.08 4.08 0 0 0-3.68 2.02V8.15H9.42V20h3.25v-5.87c0-1.55.3-3.05 2.22-3.05 1.9 0 1.92 1.77 1.92 3.15V20h3.25l.74-6.8Z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
        <p className="mt-7 border-t border-[var(--line)] pt-5 text-center text-xs text-[var(--muted)]">© {new Date().getFullYear()} in7ruder. Independent security practice based in Switzerland.</p>
      </div>
    </footer>
  );
}
