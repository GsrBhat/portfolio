"use client";

import { Download, ExternalLink, FileText } from "lucide-react";
import { ProfileSwitcher } from "./ProfileSwitcher";

interface ResumeViewerProps {
  currentProfile: "core" | "software";
  resumePdf: string;
}

export function ResumeViewer({ currentProfile, resumePdf }: ResumeViewerProps) {
  const profileTitle = currentProfile === "core" ? "CORE VLSI RESUME" : "SOFTWARE / IT RESUME";

  return (
    <div className="py-12 lg:py-16 space-y-8">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#171717] pb-6">
        <div>
          <div className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase mb-1">
            OFFICIAL CURRICULUM VITAE
          </div>
          <h1 className="text-3xl sm:text-4xl font-light text-[#171717] uppercase tracking-tight">
            {profileTitle}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <ProfileSwitcher currentProfile={currentProfile} />

          <div className="hidden sm:block h-4 w-[1px] bg-[#DCDAD3]" aria-hidden="true" />

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#171717] text-[#171717] font-mono-tech text-xs tracking-widest uppercase hover:bg-[#171717] hover:text-[#F5F4F0] transition-colors rounded-sm"
          >
            <ExternalLink size={14} />
            <span>VIEW PDF</span>
          </a>

          <a
            href={resumePdf}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#171717] text-[#F5F4F0] font-mono-tech text-xs tracking-widest uppercase hover:bg-[#596B72] transition-colors rounded-sm"
          >
            <Download size={14} />
            <span>DOWNLOAD PDF</span>
          </a>
        </div>
      </div>

      {/* Embedded Native PDF Viewer Frame */}
      <div className="w-full h-[800px] border border-[#DCDAD3] bg-white rounded-sm shadow-sm overflow-hidden relative">
        <object
          data={`${resumePdf}#toolbar=1`}
          type="application/pdf"
          className="w-full h-full"
        >
          <iframe
            src={`${resumePdf}#toolbar=1`}
            title={`${profileTitle} Document`}
            className="w-full h-full border-none"
          >
            <div className="p-12 text-center space-y-4">
              <FileText size={48} className="mx-auto text-[#596B72]" />
              <p className="text-lg text-[#171717]">
                Your browser does not support inline PDF viewing.
              </p>
              <a
                href={resumePdf}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-white font-mono-tech text-xs tracking-widest uppercase"
              >
                <Download size={14} />
                <span>Download {profileTitle} PDF</span>
              </a>
            </div>
          </iframe>
        </object>
      </div>
    </div>
  );
}
