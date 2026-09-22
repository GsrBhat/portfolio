"use client";

import { useState } from "react";
import { sharedData } from "@/data/shared";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(sharedData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${sharedData.email}`, "_blank");
  };

  const handlePhoneClick = () => {
    navigator.clipboard.writeText(sharedData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#DCDAD3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn direction="up" distance={20} duration={0.65}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            {/* Main Editorial Call to Action (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono-tech text-xs tracking-widest text-[#596B72] uppercase">
                INITIATE COLLABORATION
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#171717] tracking-tight uppercase leading-[1.05]">
                LET’S BUILD <br />
                <span className="italic font-serif">SOMETHING.</span>
              </h2>

              <p className="text-lg text-[#6F6E69] font-light max-w-xl">
                Open for internship opportunities in RTL design, functional verification, analog design, or full-stack software development.
              </p>
            </div>

            {/* Direct Channels (5 Cols) */}
            <div className="lg:col-span-5 space-y-4 font-mono-tech text-xs tracking-wider uppercase">
              
              {/* Phone Action Button */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handlePhoneClick}
                  className="w-full flex items-center justify-between p-4 border border-[#DCDAD3] hover:border-[#171717] bg-[#DCDAD3]/20 hover:bg-[#171717] text-[#171717] hover:text-[#F5F4F0] transition-colors rounded-sm group text-left hover:-translate-y-0.5 duration-200"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={16} />
                    <span>{copiedPhone ? "PHONE NUMBER COPIED!" : `CALL / WHATSAPP: ${sharedData.phone}`}</span>
                  </div>
                  {copiedPhone ? (
                    <Check size={16} className="text-[#596B72] group-hover:text-[#F5F4F0]" />
                  ) : (
                    <Copy size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </button>

                <div className="flex items-center justify-between text-[11px] text-[#6F6E69] font-mono-tech px-1">
                  <span>TEL: {sharedData.phone}</span>
                  <a
                    href={`tel:${sharedData.phone.replace(/[^0-9+]/g, '')}`}
                    className="hover:text-[#171717] underline underline-offset-2 transition-colors flex items-center gap-1"
                  >
                    <span>CALL DIRECTLY</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Email Action Button */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className="w-full flex items-center justify-between p-4 border border-[#DCDAD3] hover:border-[#171717] bg-[#DCDAD3]/20 hover:bg-[#171717] text-[#171717] hover:text-[#F5F4F0] transition-colors rounded-sm group text-left hover:-translate-y-0.5 duration-200"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={16} />
                    <span>{copiedEmail ? "COPIED & OPENED GMAIL!" : "EMAIL ME (GMAIL)"}</span>
                  </div>
                  {copiedEmail ? (
                    <Check size={16} className="text-[#596B72] group-hover:text-[#F5F4F0]" />
                  ) : (
                    <Copy size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </button>

                <div className="flex items-center justify-between text-[11px] text-[#6F6E69] font-mono-tech px-1">
                  <span>{sharedData.email}</span>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${sharedData.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#171717] underline underline-offset-2 transition-colors flex items-center gap-1"
                  >
                    <span>OPEN IN GMAIL</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={sharedData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-[#DCDAD3] hover:border-[#171717] bg-[#DCDAD3]/20 hover:bg-[#171717] text-[#171717] hover:text-[#F5F4F0] transition-colors rounded-sm group hover:-translate-y-0.5 duration-200"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LINKEDIN</span>
                  </div>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={sharedData.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-[#DCDAD3] hover:border-[#171717] bg-[#DCDAD3]/20 hover:bg-[#171717] text-[#171717] hover:text-[#F5F4F0] transition-colors rounded-sm group hover:-translate-y-0.5 duration-200"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                    <span>GITHUB</span>
                  </div>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
