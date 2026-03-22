import { siteConfig } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t relative overflow-hidden"
      style={{ background: '#000000', borderColor: 'rgba(187,158,255,0.10)' }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 px-6 sm:px-12 md:px-20 lg:px-30 mx-auto relative z-10">
        <div
          className="text-xs uppercase tracking-widest mb-6 md:mb-0 text-center md:text-left"
          style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'var(--font-body)' }}
        >
          © {currentYear} {siteConfig.name}
        </div>
        <div
          className="flex space-x-8 text-xs uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-primary)]"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            GitHub
          </a>
          <a
            href={siteConfig.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-primary)]"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Resume PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
