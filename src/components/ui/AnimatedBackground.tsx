'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        gridRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }

      // Update section auras
      const auras = document.querySelectorAll<HTMLElement>('.section-aura');
      auras.forEach((aura) => {
        const rect = aura.parentElement?.getBoundingClientRect();
        if (rect) {
          aura.style.setProperty('--aura-x', `${e.clientX - rect.left}px`);
          aura.style.setProperty('--aura-y', `${e.clientY - rect.top}px`);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none" aria-hidden="true">
      <div ref={gridRef} className="absolute inset-0 mesh-grid animate-[grid-flow_60s_linear_infinite] opacity-30" />
      <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] nebula-glow animate-[nebula_20s_linear_infinite] opacity-20" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: 'rgba(0,241,254,0.10)' }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] rounded-full blur-[150px]" style={{ background: 'rgba(187,158,255,0.10)' }} />
    </div>
  );
}
