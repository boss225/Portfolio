'use client';

import { siteConfig } from '@/data/portfolio';
import ThreeAnimImage from '@/components/ui/ThreeAnimImage';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center px-4 sm:px-6 md:px-12 lg:px-30 mx-auto overflow-visible"
    >
      <div className="section-aura" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center z-10 w-full relative">
        <div className="space-y-4 md:space-y-6">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase backdrop-blur-sm border"
            style={{
              borderColor: 'rgba(0,241,254,0.30)',
              background: 'rgba(0,241,254,0.05)',
              color: 'var(--color-secondary)',
            }}
          >
            {siteConfig.role}
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[1] lg:ml-[-4px]"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            <span>Nguyen Dang</span> <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))' }}
            >
              Vinh
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>
            {siteConfig.description}
          </p>

          {/* Featured Demo Card */}
          <div
            className="p-4 md:p-6 glass-panel rounded-xl border-l-4 relative overflow-hidden"
            style={{
              borderLeftColor: 'var(--color-primary)',
              boxShadow: '0 0 40px rgba(145,94,255,0.15)',
            }}
          >
            <div className="absolute top-0 right-0 p-2">
              <span
                className="text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{ color: 'rgba(0,241,254,0.6)' }}
              >
                Featured Demo
              </span>
            </div>
            <h3 className="text-base md:text-lg font-bold mb-2 flex items-center gap-2">
              <span
                className="material-symbols-outlined animate-pulse text-xl md:text-2xl"
                style={{ color: 'var(--color-secondary)' }}
              >
                rocket_launch
              </span>
              Viberooms: Real-time WebRTC &amp; SSE
            </h3>
            <p
              className="text-xs mb-4 leading-relaxed max-w-md"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              High-performance video conferencing and real-time communication platform built with
              WebRTC, SSE, and React.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="https://github.com/boss225/sse-webrtc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all border"
                style={{
                  background: 'var(--color-surface-container-highest)',
                  borderColor: 'rgba(187,158,255,0.40)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(187,158,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(187,158,255,0.40)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <span className="material-symbols-outlined text-sm">code</span>
                VIEW SOURCE (GITHUB)
              </a>
              <a
                href="https://viberooms.up.railway.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all hover:scale-[1.02]"
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
                <span className="material-symbols-outlined text-sm">play_circle</span>
                LIVE DEMO (VIBEROOMS)
              </a>
            </div>
          </div>

          {/* Contact Info Row */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 pt-4 text-xs sm:text-sm justify-between">
            <div className="flex items-center gap-2" style={{ color: 'var(--color-on-surface-variant)' }}>
              <span className="material-symbols-outlined text-base" style={{ color: 'var(--color-primary)' }}>
                mail
              </span>
              <span className="break-all">{siteConfig.email}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: 'var(--color-on-surface-variant)' }}>
              <span className="material-symbols-outlined text-base" style={{ color: 'var(--color-secondary)' }}>
                call
              </span>
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: 'var(--color-on-surface-variant)' }}>
              <span className="material-symbols-outlined text-base" style={{ color: 'var(--color-secondary)' }}>
                location_on
              </span>
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>

        {/* Right – Visual */}
        <div className="relative flex items-center justify-center mt-8 lg:mt-0">
          <div
            className="absolute inset-0 blur-[120px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"
            style={{ background: 'rgba(187,158,255,0.20)' }}
            aria-hidden="true"
          />
          <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
            <ThreeAnimImage src={siteConfig.heroImage} />
            <div
              className="absolute -top-4 sm:-top-6 md:-top-8 -right-6 sm:-right-8 md:-right-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center backdrop-blur-md border animate-[float_6s_ease-in-out_infinite] [animation-delay:1s]"
              style={{ background: 'var(--color-surface-container-highest)', borderColor: 'rgba(187,158,255,0.20)' }}
            >
              <span className="material-symbols-outlined text-3xl sm:text-4xl md:text-5xl" style={{ color: 'var(--color-primary)' }}>
                javascript
              </span>
            </div>
            <div
              className="absolute top-6 sm:top-8 md:top-10 left-6 sm:left-8 md:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center backdrop-blur-md border animate-[float_6s_ease-in-out_infinite] [animation-delay:1s]"
              style={{ background: 'var(--color-surface-container-highest)', borderColor: 'rgba(187,158,255,0.20)' }}
            >
              <Image src="/images/icon-react.png" alt="React" width={32} height={32} className="sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px]" />
            </div>
            <div
              className="absolute bottom-6 sm:bottom-8 md:bottom-10 -left-6 sm:-left-8 md:-left-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center backdrop-blur-md border animate-[float_6s_ease-in-out_infinite] [animation-delay:2s]"
              style={{ background: 'var(--color-surface-container-highest)', borderColor: 'rgba(0,241,254,0.20)' }}
            >
              <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl" style={{ color: 'var(--color-secondary)' }}>
                terminal
              </span>
            </div>
            <div
              className="absolute top-1/2 -right-6 sm:-right-8 md:-right-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg rotate-12 flex items-center justify-center backdrop-blur-md border animate-[float_6s_ease-in-out_infinite] [animation-delay:3.5s]"
              style={{ background: 'var(--color-surface-container-highest)', borderColor: 'rgba(173,137,255,0.20)' }}
            >
              <span className="material-symbols-outlined text-2xl sm:text-2xl md:text-3xl" style={{ color: 'var(--color-tertiary)' }}>
                layers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
