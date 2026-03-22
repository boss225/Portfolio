"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-18 px-4 sm:px-6 md:px-12 lg:px-30 mx-auto relative"
    >
      <div className="section-aura" aria-hidden="true" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 md:mb-16 relative">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Project{" "}
            <span style={{ color: "var(--color-primary)" }}>Showcase</span>
          </h2>
          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            A comprehensive look at engineering challenges and solutions
          </p>
        </div>
        <div
          className="hidden lg:block absolute -top-10 -right-20 opacity-5 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="material-symbols-outlined text-[200px]">
            code_off
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 relative z-10 hover-neon-parent">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {/* See More Button */}
      {!showAll && projects.length > 6 && (
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 relative z-10 transition-all duration-500 fade-in">
          <button
            onClick={() => setShowAll(true)}
            className="cursor-pointer px-6 sm:px-10 md:px-12 py-3 sm:py-4 bg-transparent border border-primary text-primary font-bold rounded-lg tracking-widest uppercase transition-all flex items-center gap-2 sm:gap-3 group hover:bg-primary/5 shadow-[0_0_0_rgba(187,158,255,0)] hover:shadow-[0_0_30px_rgba(187,158,255,0.6)] text-xs sm:text-sm md:text-base"
          >
            See More
            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
              expand_more
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
