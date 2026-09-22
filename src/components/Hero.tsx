"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { sharedData } from "@/data/shared";
import { motion, useReducedMotion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  heading: string;
  summary: string;
  technicalTags: string[];
  resumeRoute: string;
  currentProfile: "core" | "software";
}

export function Hero({
  heading,
  summary,
  technicalTags,
  resumeRoute,
  currentProfile,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle scroll parallax for portrait (10-15px max movement)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : 15]
  );

  // Stagger variants for left column text elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={heroRef} className="pt-12 pb-20 lg:py-24 border-b border-[#DCDAD3] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Content (7 Cols ~ 58%) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* 1. Location & Metadata Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-[#DCDAD3]/40 text-[#6F6E69] font-mono-tech text-xs tracking-widest uppercase rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#596B72]" aria-hidden="true" />
              <span>HYDERABAD, INDIA · ECE · ANURAG UNIVERSITY · 2027</span>
            </motion.div>

            {/* 2. Main Editorial Heading */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#171717] leading-[1.08] uppercase">
              {heading.split("&").map((part, index) => (
                <span key={index} className="block">
                  {index > 0 ? `& ${part.trim()}` : part.trim()}
                </span>
              ))}
            </motion.h1>

            {/* 3. Supporting Summary */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-[#6F6E69] font-light leading-relaxed max-w-2xl">
              {summary}
            </motion.p>

            {/* 4. Technical Metadata Line */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono-tech text-xs tracking-wider text-[#596B72] uppercase">
              {technicalTags.map((tag, i) => (
                <span key={tag} className="flex items-center gap-3">
                  {i > 0 && <span className="text-[#DCDAD3]">•</span>}
                  <span>{tag}</span>
                </span>
              ))}
            </motion.div>

            {/* 5. Actions */}
            <motion.div variants={itemVariants} className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-[#F5F4F0] font-mono-tech text-xs tracking-widest uppercase hover:bg-[#596B72] transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 hover:-translate-y-0.5 active:translate-y-0 duration-200"
              >
                <span>EXPLORE WORK</span>
                <ArrowUpRight size={14} />
              </a>

              <Link
                href={resumeRoute}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#171717] text-[#171717] font-mono-tech text-xs tracking-widest uppercase hover:bg-[#171717] hover:text-[#F5F4F0] transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 hover:-translate-y-0.5 active:translate-y-0 duration-200"
              >
                <FileText size={14} />
                <span>VIEW RESUME</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Seated Editorial Portrait (5 Cols ~ 42%) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ y: portraitY }}
              transition={{
                duration: 1.0,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm border border-[#DCDAD3] bg-[#DCDAD3]/20 shadow-sm group"
            >
              <Image
                src={sharedData.portraitPath}
                alt="Sai Rahul Bhat Gaadhi Raju seated in a minimalist editorial portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-all duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#171717]/80 via-[#171717]/30 to-transparent text-white font-mono-tech text-[11px] tracking-wider uppercase flex justify-between items-end">
                <div>
                  <div className="font-semibold">{sharedData.fullName}</div>
                  <div className="text-white/70 text-[10px]">ANURAG UNIVERSITY (2027)</div>
                </div>
                <div className="text-white/60 text-[10px] tracking-widest">
                  {currentProfile === "core" ? "CORE / VLSI" : "SOFTWARE / IT"}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
