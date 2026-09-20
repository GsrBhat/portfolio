import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { ResumeViewer } from "@/components/ResumeViewer";
import { Footer } from "@/components/Footer";

interface ResumePageProps {
  params: Promise<{ profile: string }>;
}

export async function generateMetadata({ params }: ResumePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const isCore = resolvedParams.profile === "vlsi" || resolvedParams.profile === "core";
  return {
    title: `Curriculum Vitae — Sai Rahul Bhat Gaadhi Raju (${isCore ? "VLSI" : "Software"})`,
    description: `Official resume PDF for Sai Rahul Bhat Gaadhi Raju (${isCore ? "Electronics & VLSI Engineer" : "Software Developer"}).`,
  };
}

export default async function ResumePage({ params }: ResumePageProps) {
  const resolvedParams = await params;
  const p = resolvedParams.profile.toLowerCase();

  let currentProfile: "core" | "software";
  let resumePdf: string;

  if (p === "vlsi" || p === "core") {
    currentProfile = "core";
    resumePdf = "/VLSI_RESUME.pdf";
  } else if (p === "software" || p === "it") {
    currentProfile = "software";
    resumePdf = "/IT_RESUME.pdf";
  } else {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#171717]">
      <Navbar currentProfile={currentProfile} />
      <main className="flex-grow max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <ResumeViewer currentProfile={currentProfile} resumePdf={resumePdf} />
      </main>
      <Footer />
    </div>
  );
}
