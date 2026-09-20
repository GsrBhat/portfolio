"use client";

import { TrainingExperience } from "@/data/vlsi";
import { InternshipExperience } from "@/data/software";
import { Award, Briefcase, CheckCircle2 } from "lucide-react";

interface ExperienceProps {
  currentProfile: "core" | "software";
  training?: TrainingExperience;
  internship?: InternshipExperience;
  achievements?: string[];
}

export function Experience({
  currentProfile,
  training,
  internship,
  achievements,
}: ExperienceProps) {
  return (
    <section id="experience" className="py-20 border-b border-[#DCDAD3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#171717]">
          <div className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase mb-2">
            INDUSTRY EXPOSURE & TRAINING
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#171717] uppercase tracking-tight">
            {currentProfile === "core" ? "SAMSUNG FELLOWSHIP & CORE TRAINING" : "INTERNSHIP & FELLOWSHIP EXPOSURE"}
          </h2>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-12">
          
          {/* VLSI Training Section */}
          {currentProfile === "core" && training && (
            <div className="border border-[#DCDAD3] p-8 lg:p-10 bg-[#DCDAD3]/20 rounded-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DCDAD3] pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#596B72] tracking-wider uppercase mb-1">
                    <Award size={14} />
                    <span>SAMSUNG FELLOWSHIP</span>
                  </div>
                  <h3 className="text-2xl font-light text-[#171717] uppercase">
                    {training.program}
                  </h3>
                  <div className="text-sm font-mono-tech text-[#6F6E69] mt-1">
                    {training.role}
                  </div>
                </div>

                <div className="px-3 py-1.5 bg-[#171717] text-[#F5F4F0] font-mono-tech text-xs tracking-widest uppercase self-start md:self-auto rounded-sm">
                  SCHOLAR GRADE II
                </div>
              </div>

              <ul className="space-y-4 pt-2">
                {training.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-[#171717] font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#596B72] mt-2.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Software Internship Section */}
          {currentProfile === "software" && (
            <div className="space-y-10">
              
              {internship && (
                <div className="border border-[#DCDAD3] p-8 lg:p-10 bg-[#DCDAD3]/20 rounded-sm space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DCDAD3] pb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#596B72] tracking-wider uppercase mb-1">
                        <Briefcase size={14} />
                        <span>INTERNSHIP</span>
                      </div>
                      <h3 className="text-2xl font-light text-[#171717] uppercase">
                        {internship.role}
                      </h3>
                      <div className="text-sm font-mono-tech text-[#6F6E69] mt-1">
                        {internship.company}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 pt-2">
                    {internship.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base text-[#171717] font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#596B72] mt-2.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Software Profile Achievement Mention */}
              {achievements && achievements.length > 0 && (
                <div className="border border-[#DCDAD3] p-8 bg-[#F5F4F0] rounded-sm space-y-4">
                  <h4 className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase font-semibold">
                    FELLOWSHIP & WORKFORCE RECOGNITION
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-[#DCDAD3]/30 border border-[#DCDAD3]/50 rounded-sm">
                        <CheckCircle2 size={16} className="text-[#596B72] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#171717] font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
