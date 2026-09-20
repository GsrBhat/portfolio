"use client";

import { sharedData } from "@/data/shared";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 border-b border-[#DCDAD3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#171717]">
          <div className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase mb-2">
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#171717] uppercase tracking-tight">
            EDUCATION
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sharedData.education.map((edu, idx) => (
            <div
              key={idx}
              className="border border-[#DCDAD3] p-8 bg-[#DCDAD3]/20 rounded-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-tech text-[#596B72] uppercase">
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap size={16} />
                    <span>{edu.timeline}</span>
                  </span>
                  {edu.location && <span>{edu.location}</span>}
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-[#171717] uppercase">
                  {edu.institution}
                </h3>

                <p className="text-sm text-[#6F6E69] font-light">
                  {edu.degree} {edu.specialization ? `in ${edu.specialization}` : ""}
                </p>

                {edu.honors && (
                  <div className="inline-block px-2.5 py-1 bg-[#8A8175]/20 text-[#171717] font-mono-tech text-[11px] tracking-wider uppercase rounded-sm">
                    {edu.honors}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#DCDAD3] flex items-center justify-between font-mono-tech text-sm">
                <span className="text-[#6F6E69] text-xs uppercase tracking-wider">CUMULATIVE GPA</span>
                <span className="text-[#171717] font-semibold">{edu.cgpa}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
