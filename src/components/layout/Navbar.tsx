'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/portfolio';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'AI Support' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('experience');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'experience', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b"
      style={{
        background: 'rgba(10,13,28,0.80)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(187,158,255,0.10)',
      }}
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-30 py-2 mx-auto">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
          style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-headline)' }}
          aria-label="Nguyen Dang Vinh - Home"
        >
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8" style={{ fontFamily: 'var(--font-headline)' }}>
          {navLinks.map(({ href, label }) => {
            const sectionId = href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={href}
                href={href}
                className="transition-all hover:scale-105 pb-1"
                style={{
                  color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--color-on-surface)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--color-on-surface-variant)';
                }}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Resume button */}
        <a
          href={siteConfig.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-6 py-2 rounded-lg font-bold transition-all hover:scale-105 active:scale-95"
          style={{
            background: 'var(--color-primary)',
            color: 'var(--color-on-primary)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(187,158,255,0.5)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          Resume PDF
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: 'var(--color-primary)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden px-8 pb-6 flex flex-col gap-4"
          style={{ fontFamily: 'var(--font-headline)' }}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium py-2"
              style={{ color: 'var(--color-on-surface-variant)' }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={siteConfig.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center px-6 py-2 rounded-lg font-bold text-sm"
            style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
          >
            Resume PDF
          </a>
        </div>
      )}
    </nav>
  );
}
