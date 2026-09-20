import type { Metadata } from "next";
import { softwareData } from "@/data/software";
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
  title: "SAI RAHUL — Full Stack Software Development Portfolio",
  description: "Software Developer focused on Java 21, Spring Boot 3, React 18, Python, PostgreSQL, Hugging Face AI integrations, and REST API architecture.",
  alternates: {
    canonical: "https://sai-rahul-bhat-portfolio.vercel.app/software",
  },
  openGraph: {
    title: "SAI RAHUL — Software Development Portfolio",
    description: "Java · Spring Boot · React · Python · PostgreSQL · AI Integration · Anurag University",
    url: "https://sai-rahul-bhat-portfolio.vercel.app/software",
  },
};

export default function SoftwareProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#171717]">
      <Navbar currentProfile="software" />
      <main className="flex-grow">
        <Hero
          heading={softwareData.heading}
          summary={softwareData.summary}
          technicalTags={softwareData.technicalTags}
          resumeRoute={softwareData.resumeRoute}
          currentProfile="software"
        />
        <ProjectList projects={softwareData.projects} currentProfile="software" />
        <About currentProfile="software" />
        <Experience
          currentProfile="software"
          internship={softwareData.internship}
          achievements={softwareData.achievements}
        />
        <Education />
        <Skills skillCategories={softwareData.skillCategories} currentProfile="software" />
        <Certifications certifications={softwareData.certifications} currentProfile="software" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
