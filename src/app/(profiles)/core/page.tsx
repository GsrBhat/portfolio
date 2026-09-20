import type { Metadata } from "next";
import { vlsiData } from "@/data/vlsi";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "SAI RAHUL — Core VLSI & Hardware Engineering Portfolio",
  description: "Electronics & VLSI Engineer specializing in RTL design, digital systems, analog IC topologies, Cadence Virtuoso, Xilinx Vivado, and Samsung ISWDP Fellowship.",
  alternates: {
    canonical: "https://sai-rahul-bhat-portfolio.vercel.app/core",
  },
  openGraph: {
    title: "SAI RAHUL — Core VLSI & Hardware Portfolio",
    description: "RTL Design · Digital Systems · Analog/Mixed-Signal · Samsung ISWDP Fellow · Anurag University",
    url: "https://sai-rahul-bhat-portfolio.vercel.app/core",
  },
};

export default function CoreProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#171717]">
      <Navbar currentProfile="core" />
      <main className="flex-grow">
        <Hero
          heading={vlsiData.heading}
          summary={vlsiData.summary}
          technicalTags={vlsiData.technicalTags}
          resumeRoute={vlsiData.resumeRoute}
          currentProfile="core"
        />
        <ProjectList projects={vlsiData.projects} currentProfile="core" />
        <About currentProfile="core" />
        <Experience currentProfile="core" training={vlsiData.training} />
        <Education />
        <Skills skillCategories={vlsiData.skillCategories} currentProfile="core" />
        <Certifications certifications={vlsiData.certifications} currentProfile="core" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
