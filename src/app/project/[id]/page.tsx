import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vlsiData, ProjectDetail } from "@/data/vlsi";
import { softwareData, SoftwareProjectDetail } from "@/data/software";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Cpu, Layers, Wrench, ShieldCheck, Zap } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

function findProject(id: string) {
  const vlsiProject = vlsiData.projects.find((p) => p.id === id);
  if (vlsiProject) {
    return { project: vlsiProject, profile: "core" as const };
  }
  const softwareProject = softwareData.projects.find((p) => p.id === id);
  if (softwareProject) {
    return { project: softwareProject, profile: "software" as const };
  }
  return null;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const result = findProject(resolvedParams.id);
  if (!result) {
    return {
      title: "Project Not Found — Sai Rahul Bhat Gaadhi Raju",
    };
  }

  return {
    title: `${result.project.title} — Technical Project`,
    description: result.project.shortDescription,
    openGraph: {
      title: `${result.project.title} — Engineering Overview`,
      description: result.project.shortDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const result = findProject(resolvedParams.id);

  if (!result) {
    notFound();
  }

  const { project, profile } = result;

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#171717]">
      <Navbar currentProfile={profile} />

      <main className="flex-grow py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12">
          
          {/* Back Navigation */}
          <div>
            <Link
              href={profile === "core" ? "/core#work" : "/software#work"}
              className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider uppercase text-[#596B72] hover:text-[#171717] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>BACK TO {profile === "core" ? "CORE / VLSI" : "SOFTWARE / IT"} PORTFOLIO</span>
            </Link>
          </div>

          {/* Project Title Header */}
          <div className="border-b border-[#171717] pb-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-4xl text-[#596B72] font-light">
                {project.number}
              </span>
              <span className="font-mono-tech text-xs tracking-widest text-[#6F6E69] uppercase">
                YEAR: {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-light text-[#171717] uppercase tracking-tight leading-tight">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="text-lg text-[#6F6E69] font-light italic">
                {project.subtitle}
              </p>
            )}

            <div className="pt-2 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-[#DCDAD3] text-[#171717] font-mono-tech text-xs tracking-wider uppercase rounded-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Specs Grid */}
          {project.keySpecs && project.keySpecs.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#DCDAD3]/20 border border-[#DCDAD3] rounded-sm font-mono-tech">
              {project.keySpecs.map((spec, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-[10px] text-[#596B72] uppercase tracking-widest block">
                    {spec.label}
                  </span>
                  <span className="text-sm font-semibold text-[#171717] block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Project Overview */}
          <div className="space-y-4">
            <h2 className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase font-semibold flex items-center gap-2">
              <Layers size={16} />
              <span>PROJECT OVERVIEW</span>
            </h2>
            <p className="text-lg text-[#171717] font-light leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem Statement (If Present) */}
          {"problem" in project && project.problem && (
            <div className="space-y-3 p-6 border-l-2 border-[#596B72] bg-[#DCDAD3]/10">
              <h2 className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase font-semibold">
                PROBLEM & CHALLENGES
              </h2>
              <p className="text-base text-[#171717] font-light leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {/* Architecture Section */}
          <div className="space-y-4 border-t border-[#DCDAD3] pt-8">
            <h2 className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase font-semibold flex items-center gap-2">
              <Cpu size={16} />
              <span>SYSTEM ARCHITECTURE</span>
            </h2>
            <ul className="space-y-3">
              {project.architecture.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-[#171717] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#596B72] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation Section */}
          <div className="space-y-4 border-t border-[#DCDAD3] pt-8">
            <h2 className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase font-semibold flex items-center gap-2">
              <Wrench size={16} />
              <span>IMPLEMENTATION DETAILS</span>
            </h2>
            <ul className="space-y-3">
              {project.implementation.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-[#171717] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#596B72] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification & Simulation Section */}
          <div className="space-y-4 border-t border-[#DCDAD3] pt-8">
            <h2 className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase font-semibold flex items-center gap-2">
              <ShieldCheck size={16} />
              <span>SIMULATION & FUNCTIONAL VERIFICATION</span>
            </h2>
            <ul className="space-y-3">
              {project.verification.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-[#171717] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#596B72] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results Section */}
          <div className="space-y-4 border-t border-[#DCDAD3] pt-8">
            <h2 className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase font-semibold flex items-center gap-2">
              <Zap size={16} />
              <span>KEY RESULTS & PERFORMANCE METRICS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((res, i) => (
                <div key={i} className="p-4 bg-[#DCDAD3]/30 border border-[#DCDAD3]/50 rounded-sm flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#596B72] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#171717] font-light">{res}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
