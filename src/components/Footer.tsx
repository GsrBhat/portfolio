"use client";

import { sharedData } from "@/data/shared";

export function Footer() {
  return (
    <footer className="py-12 bg-[#F5F4F0] text-[#6F6E69] font-mono-tech text-xs tracking-wider uppercase border-t border-[#DCDAD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-[#171717]">{sharedData.fullName}</div>
          <div className="text-[11px] text-[#6F6E69] mt-0.5">ECE · VLSI · SOFTWARE DEVELOPMENT</div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={`tel:${sharedData.phone.replace(/[^0-9+]/g, '')}`}
            className="hover:text-[#171717] transition-colors"
          >
            TEL: {sharedData.phone}
          </a>
          <a
            href={sharedData.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171717] transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href={sharedData.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171717] transition-colors"
          >
            GITHUB
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${sharedData.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171717] transition-colors"
          >
            EMAIL
          </a>
        </div>

        <div className="text-[11px] text-[#6F6E69]">
          HYDERABAD, INDIA · © 2026
        </div>
      </div>
    </footer>
  );
}
