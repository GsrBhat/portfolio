"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectDetail } from "@/data/vlsi";
import { SoftwareProjectDetail } from "@/data/software";
import { motion, useReducedMotion } from "framer-motion";

interface ProjectCardProps {
  project: ProjectDetail | SoftwareProjectDetail;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { x: 6 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group border-b border-[#DCDAD3] py-10 lg:py-12 transition-colors duration-300 hover:bg-[#DCDAD3]/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Project Number (2 Cols) */}
        <div className="lg:col-span-2 font-mono-tech text-3xl sm:text-4xl text-[#596B72] font-light">
          {project.number}
        </div>

        {/* Title, Subtitle, & Tech Stack (6 Cols) */}
        <div className="lg:col-span-6 space-y-3">
          <Link
            href={`/project/${project.id}`}
            className="inline-block group-hover:text-[#596B72] transition-colors focus-visible:outline-none"
          >
            <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#171717] leading-snug uppercase">
              {project.title}
            </h3>
          </Link>

          {project.subtitle && (
            <p className="text-sm text-[#6F6E69] font-light italic">
              {project.subtitle}
            </p>
          )}

          <p className="text-sm text-[#6F6E69] font-light leading-relaxed pt-1">
            {project.shortDescription}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {project.techPills.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#DCDAD3]/50 text-[#171717] font-mono-tech text-[10px] tracking-wider uppercase rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Specs & Link Action (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end space-y-4 h-full">
          <div className="font-mono-tech text-xs text-[#6F6E69] tracking-wider uppercase">
            {project.year}
          </div>

          <Link
            href={`/project/${project.id}`}
            className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-widest text-[#171717] uppercase group-hover:text-[#596B72] transition-colors link-underline"
          >
            <span>VIEW PROJECT DETAILS</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </motion.article>
  );
}
