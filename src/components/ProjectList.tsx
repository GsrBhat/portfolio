"use client";

import { ProjectDetail } from "@/data/vlsi";
import { SoftwareProjectDetail } from "@/data/software";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "./animations/FadeIn";
import { StaggerContainer, StaggerItem } from "./animations/Stagger";

interface ProjectListProps {
  projects: (ProjectDetail | SoftwareProjectDetail)[];
  currentProfile: "core" | "software";
}

export function ProjectList({ projects, currentProfile }: ProjectListProps) {
  return (
    <section id="work" className="py-20 border-b border-[#DCDAD3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header with FadeIn Reveal */}
        <FadeIn direction="up" distance={20} duration={0.65}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#171717]">
            <div>
              <div className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase mb-2">
                {currentProfile === "core" ? "CORE VLSI & DIGITAL WORK" : "SOFTWARE & IT PROJECTS"}
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#171717] uppercase tracking-tight">
                SELECTED PROJECTS
              </h2>
            </div>
            <div className="font-mono-tech text-xs text-[#6F6E69] tracking-wider uppercase mt-4 md:mt-0">
              SHOWCASING {projects.length} FEATURED ARCHITECTURES
            </div>
          </div>
        </FadeIn>

        {/* Project List with Staggered Items */}
        <StaggerContainer staggerDelay={0.08} className="divide-y divide-[#DCDAD3]">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
