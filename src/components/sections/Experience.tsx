import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-18 relative overflow-hidden">
      <div className="section-aura" aria-hidden="true" />

      {/* Decorative background icon */}
      <div
        className="absolute top-[20%] right-[5%] sm:right-[10%] opacity-10 sm:opacity-20 animate-[float_6s_ease-in-out_infinite] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="material-symbols-outlined text-[100px] sm:text-[150px] md:text-[200px]" style={{ color: 'var(--color-secondary)' }}>
          database
        </span>
      </div>

      <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-30 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Professional{' '}
            <span style={{ color: 'var(--color-secondary)' }}>Trajectory</span>
          </h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--color-on-surface-variant)' }}>
            Tracing professional growth across varied tech domains
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical spine */}
          <div
            className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 h-full w-px neon-spine"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={exp.company} className="relative mb-12 sm:mb-16 md:mb-20">
                <div
                  className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-4 sm:gap-6 md:gap-8`}
                >
                  {/* Content side */}
                  <div className={`flex-1 pl-12 sm:pl-16 md:pl-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <span
                      className="font-mono text-xs sm:text-sm tracking-widest uppercase"
                      style={{ color: 'var(--color-secondary)' }}
                    >
                      {exp.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">{exp.company}</h3>
                    <p
                      className="font-medium mb-3 sm:mb-4 uppercase text-xs tracking-widest"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {exp.role}
                    </p>
                    <ul
                      className={`text-xs sm:text-sm space-y-1.5 sm:space-y-2 list-none ${isLeft ? 'md:text-right' : ''}`}
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {exp.tasks.map((task) => (
                        <li key={task}>• {task}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 sm:left-2 md:relative md:left-auto z-10 flex items-center justify-center rounded-full border-4 ${
                      exp.isCurrent ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-8 h-8 sm:w-10 sm:h-10'
                    }`}
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: exp.isCurrent ? 'var(--color-secondary)' : 'var(--color-outline-variant)',
                      boxShadow: exp.isCurrent ? '0 0 25px rgba(0,241,254,0.6)' : 'none',
                    }}
                  >
                    {exp.isCurrent ? (
                      <span
                        className="material-symbols-outlined text-lg sm:text-xl"
                        style={{ color: 'var(--color-secondary)' }}
                      >
                        work
                      </span>
                    ) : (
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
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
