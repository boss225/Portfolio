import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-18 relative overflow-hidden">
      <div className="section-aura" aria-hidden="true" />

      {/* Decorative background icon */}
      <div
        className="absolute top-[20%] right-[10%] opacity-20 animate-[float_6s_ease-in-out_infinite] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="material-symbols-outlined text-[200px]" style={{ color: 'var(--color-secondary)' }}>
          database
        </span>
      </div>

      <div className="mx-auto px-30 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Professional{' '}
            <span style={{ color: 'var(--color-secondary)' }}>Trajectory</span>
          </h2>
          <p style={{ color: 'var(--color-on-surface-variant)' }}>
            Tracing professional growth across varied tech domains
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical spine */}
          <div
            className="absolute left-0 md:left-1/2 -translate-x-1/2 h-full w-px neon-spine"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={exp.company} className="relative mb-20">
                <div
                  className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Content side */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'text-left'}`}>
                    <span
                      className="font-mono text-sm tracking-widest uppercase"
                      style={{ color: 'var(--color-secondary)' }}
                    >
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{exp.company}</h3>
                    <p
                      className="font-medium mb-4 uppercase text-xs tracking-widest"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {exp.role}
                    </p>
                    <ul
                      className={`text-sm space-y-2 list-none ${isLeft ? 'md:text-right' : ''}`}
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {exp.tasks.map((task) => (
                        <li key={task}>• {task}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className={`relative z-10 flex items-center justify-center rounded-full border-4 ${exp.isCurrent ? 'w-12 h-12' : 'w-10 h-10'
                      }`}
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: exp.isCurrent ? 'var(--color-secondary)' : 'var(--color-outline-variant)',
                      boxShadow: exp.isCurrent ? '0 0 25px rgba(0,241,254,0.6)' : 'none',
                    }}
                  >
                    {exp.isCurrent ? (
                      <span
                        className="material-symbols-outlined text-xl"
                        style={{ color: 'var(--color-secondary)' }}
                      >
                        work
                      </span>
                    ) : (
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: 'var(--color-on-surface-variant)' }}
                      />
                    )}
                  </div>

                  {/* Empty col for layout balance */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
