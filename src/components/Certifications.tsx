"use client";

import { CertificationGroup } from "@/data/vlsi";
import { SoftwareCertificationGroup } from "@/data/software";
import { Award, CheckCircle } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

interface CertificationsProps {
  certifications: (CertificationGroup | SoftwareCertificationGroup)[];
  currentProfile: "core" | "software";
}

export function Certifications({ certifications, currentProfile }: CertificationsProps) {
  return (
    <section id="certifications" className="py-20 border-b border-[#DCDAD3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn direction="up" distance={20} duration={0.65}>
          
          {/* Section Header */}
          <div className="mb-12 pb-6 border-b border-[#171717]">
            <div className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase mb-2">
              CREDENTIALS & VERIFIED LEARNING
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171717] uppercase tracking-tight">
              CERTIFICATIONS
            </h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((group, i) => (
              <div
                key={i}
                className="border border-[#DCDAD3] p-8 bg-[#F5F4F0] rounded-sm space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#596B72] tracking-wider uppercase">
                    <Award size={14} />
                    <span>{group.provider}</span>
                  </div>

                  <div className="space-y-3 divide-y divide-[#DCDAD3]/50">
                    {group.items.map((item, idx) => (
                      <div key={idx} className={`${idx > 0 ? "pt-3" : ""} space-y-1`}>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle size={15} className="text-[#596B72] mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="text-base text-[#171717] font-light leading-snug">
                              {item.title}
                            </h4>
                            {"institution" in item && item.institution && (
                              <div className="font-mono-tech text-xs text-[#6F6E69] mt-0.5">
                                {item.institution}
                              </div>
                            )}
                            {item.detail && (
                              <span className="inline-block mt-1 px-2 py-0.5 bg-[#596B72]/10 text-[#596B72] font-mono-tech text-[10px] tracking-wider uppercase rounded-sm">
                                {item.detail}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
