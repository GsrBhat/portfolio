"use client";

import { sharedData } from "@/data/shared";
import { FadeIn } from "./animations/FadeIn";

interface AboutProps {
  currentProfile: "core" | "software";
}

export function About({ currentProfile }: AboutProps) {
  return (
    <section id="about" className="py-20 border-b border-[#DCDAD3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn direction="up" distance={20} duration={0.65}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Label (4 Cols) */}
            <div className="lg:col-span-4 space-y-2">
              <div className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase">
                BIOGRAPHY & PHILOSOPHY
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#171717] uppercase tracking-tight">
                ABOUT
              </h2>
            </div>

            {/* Narrative Body (8 Cols) */}
            <div className="lg:col-span-8 space-y-6 text-lg sm:text-xl text-[#171717] font-light leading-relaxed">
              <p>
                I am <span className="font-normal text-[#171717]">{sharedData.fullName}</span>, an Electronics and Communication Engineering student at Anurag University, Hyderabad (Expected Graduation 2027), with an academic diploma foundation from JNGPT (9.17 CGPA, Distinction).
              </p>

              {currentProfile === "core" ? (
                <p className="text-[#6F6E69]">
                  My engineering core is centered on hardware description, digital system design, analog IC topologies, and semiconductor device physics. Through my Samsung ISWDP Fellowship and cadence/synopsys tooling exposure, I focus on RTL design, Verilog-A modeling, low-power switched-capacitor converters, operational amplifier design, and physical timing verification.
                </p>
              ) : (
                <p className="text-[#6F6E69]">
                  My software journey focuses on building robust full-stack applications, REST API services, and AI-integrated platforms using Java, Spring Boot, React, PostgreSQL, and Python. I approach software development with engineering rigor—focusing on scalable architecture, clean code, data structures, algorithms, and modular design patterns.
                </p>
              )}

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#DCDAD3] font-mono-tech text-xs text-[#6F6E69]">
                <div>
                  <span className="block text-[#596B72] uppercase tracking-wider mb-1">LOCATION</span>
                  <span className="text-[#171717] font-normal">{sharedData.location}</span>
                </div>
                <div>
                  <span className="block text-[#596B72] uppercase tracking-wider mb-1">DEGREE</span>
                  <span className="text-[#171717] font-normal">B.Tech ECE (2027)</span>
                </div>
                <div>
                  <span className="block text-[#596B72] uppercase tracking-wider mb-1">LANGUAGES</span>
                  <span className="text-[#171717] font-normal">{sharedData.languages.join(", ")}</span>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
