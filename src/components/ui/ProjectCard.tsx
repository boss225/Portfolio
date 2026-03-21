'use client';

import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const colorMap = {
  primary: {
    tag: 'rgba(187,158,255,0.20)',
    tagText: 'var(--color-primary)',
    hover: 'rgba(187,158,255,0.40)',
    hoverText: 'var(--color-primary)',
    btn: 'var(--color-primary)',
    btnText: 'var(--color-on-primary)',
  },
  secondary: {
    tag: 'rgba(0,241,254,0.20)',
    tagText: 'var(--color-secondary)',
    hover: 'rgba(0,241,254,0.40)',
    hoverText: 'var(--color-secondary)',
    btn: 'var(--color-secondary)',
    btnText: 'var(--color-on-primary)',
  },
  tertiary: {
    tag: 'rgba(173,137,255,0.20)',
    tagText: 'var(--color-tertiary)',
    hover: 'rgba(173,137,255,0.40)',
    hoverText: 'var(--color-tertiary)',
    btn: 'var(--color-tertiary)',
    btnText: 'var(--color-on-primary)',
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const colors = colorMap[project.color];

  return (
    <article
      className={`glass-panel rounded-xl p-8 border border-[rgba(68,71,88,0.10)] flex flex-col transition-all duration-300 group cursor-default ${
        project.color === 'secondary' ? 'hover-neon-secondary' : 'hover-neon-primary'
      }`}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-8px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <span className="text-xs font-mono" style={{ color: 'var(--color-secondary)' }}>
          {project.period}
        </span>
        <div
          className="px-2 py-0.5 text-[10px] font-bold rounded"
          style={{ background: colors.tag, color: colors.tagText }}
        >
          {project.tag}
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold mb-3 transition-colors"
        style={{ color: 'var(--color-on-surface)' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = colors.hoverText; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-on-surface)'; }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        className="text-sm mb-6 line-clamp-3 leading-relaxed"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        {project.description}
      </p>

      {/* Meta */}
      <div className="space-y-3 mb-8 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold uppercase w-16" style={{ color: 'var(--color-on-surface-variant)' }}>
            Stack:
          </span>
          <span style={{ color: 'var(--color-on-surface)' }}>{project.stack}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold uppercase w-16" style={{ color: 'var(--color-on-surface-variant)' }}>
            Team:
          </span>
          <span style={{ color: 'var(--color-on-surface)' }}>{project.team}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold uppercase w-16" style={{ color: 'var(--color-on-surface-variant)' }}>
            Tasks:
          </span>
          <span style={{ color: 'var(--color-on-surface)' }}>{project.tasks}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm transition-all"
            style={{ background: 'var(--color-surface-container-highest)', color: 'var(--color-on-surface)' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = colors.btn;
              el.style.color = colors.btnText;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'var(--color-surface-container-highest)';
              el.style.color = 'var(--color-on-surface)';
            }}
          >
            {project.linkLabel}
            <span className="material-symbols-outlined text-sm">{project.linkIcon}</span>
          </a>
        ) : (
          <div
            className="w-full text-center py-3 text-xs font-mono rounded-lg"
            style={{
              background: 'rgba(20,25,42,0.50)',
              color: 'var(--color-on-surface-variant)',
            }}
          >
            {project.status}
          </div>
        )}
      </div>
    </article>
  );
}
