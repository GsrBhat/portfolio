"use client";

import { SkillCategory } from "@/data/vlsi";
import { SoftwareSkillCategory } from "@/data/software";

interface SkillsProps {
  skillCategories: (SkillCategory | SoftwareSkillCategory)[];
  currentProfile: "core" | "software";
}

export function Skills({ skillCategories, currentProfile }: SkillsProps) {
  return (
    <section id="skills" className="py-20 border-b border-[#DCDAD3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#171717]">
          <div className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase mb-2">
            TECHNICAL COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#171717] uppercase tracking-tight">
            {currentProfile === "core" ? "CORE VLSI SKILLS & EDA TOOLS" : "SOFTWARE DEVELOPMENT & CORE CS"}
          </h2>
        </div>

        {/* Text-Based Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="border-t border-[#DCDAD3] pt-6 flex flex-col space-y-4"
            >
              <h3 className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase font-semibold">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#DCDAD3]/40 text-[#171717] text-sm font-light leading-none rounded-sm border border-[#DCDAD3]/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
