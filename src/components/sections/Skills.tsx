import { skills, tools, education, languages } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-18 px-4 sm:px-6 lg:px-30 mx-auto relative">
      <div className="section-aura" aria-hidden="true" />

      {/* Header */}
      <div className="flex flex-col mb-8 sm:mb-12 lg:mb-16 relative">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Technical{' '}
          <span style={{ color: 'var(--color-primary)' }}>Skills</span>
        </h2>
        <div className="h-1 w-24" style={{ background: 'var(--color-secondary)' }} />
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none hidden sm:block" aria-hidden="true">
          <span className="material-symbols-outlined text-[80px] sm:text-[100px] lg:text-[120px]">architecture</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Skills Table + Tools */}
        <div className="lg:col-span-2 glass-panel p-4 sm:p-6 lg:p-8 rounded-xl overflow-x-auto relative">
          <div className="min-w-[500px] sm:min-w-0">
            <table className="w-full text-left" role="table" aria-label="Technical skills table">
              <thead>
                <tr
                  className="text-xs uppercase tracking-widest border-b pb-4"
                  style={{ color: 'var(--color-on-surface-variant)', borderColor: 'rgba(68,71,88,0.20)' }}
                >
                  <th className="pb-4 font-bold">Skill</th>
                  <th className="pb-4 font-bold hidden sm:table-cell">Years of Experience</th>
                  <th className="pb-4 font-bold sm:hidden">Years</th>
                  <th className="pb-4 font-bold">Last Used</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {skills.map((skill) => (
                  <tr
                    key={skill.name}
                    className="border-b"
                    style={{ borderColor: 'rgba(68,71,88,0.10)' }}
                  >
                    <td className="py-3 sm:py-4 font-medium">{skill.name}</td>
                    <td className="py-3 sm:py-4" style={{ color: 'var(--color-on-surface-variant)' }}>
                      {skill.years}
                    </td>
                    <td
                      className="py-3 sm:py-4 font-bold"
                      style={{ color: skill.isCurrent ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)' }}
                    >
                      {skill.lastUsed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tools & Workflow */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Tools &amp; Workflow</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tools.map((tool) => (
                <span
                  key={tool.name}
                  className="backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm border flex items-center gap-2"
                  style={{
                    background: 'rgba(31,37,58,0.50)',
                    borderColor: 'rgba(68,71,88,0.20)',
                  }}
                >
                  <span className={`material-symbols-outlined text-sm ${tool.color}`}>{tool.icon}</span>
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education + Language */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Education */}
          <div className="glass-panel p-6 sm:p-8 rounded-xl border-l-4" style={{ borderLeftColor: 'var(--color-primary)' }}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Education</h3>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu) => (
                <div key={edu.school}>
                  <p className="text-xs font-mono mb-1" style={{ color: 'var(--color-secondary)' }}>
                    {edu.period}
                  </p>
                  <h4 className="font-bold text-sm sm:text-base">{edu.school}</h4>
                  <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>
                    {edu.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="glass-panel p-6 sm:p-8 rounded-xl border-l-4" style={{ borderLeftColor: 'var(--color-secondary)' }}>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Language</h3>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              {languages.map((lang) => (
                <li key={lang.name} className="flex justify-between items-center">
                  <span style={{ color: 'var(--color-on-surface)' }}>{lang.name}</span>
                  <div
                    className="h-1 rounded-full"
                    style={{
                      width: lang.level === 'advanced' ? '4rem' : lang.level === 'intermediate' ? '3rem' : '2rem',
                      background:
                        lang.level === 'advanced'
                          ? 'var(--color-secondary)'
                          : 'var(--color-outline-variant)',
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
