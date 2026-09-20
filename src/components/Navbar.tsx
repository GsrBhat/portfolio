"use client";

import { useState } from "react";
import Link from "next/link";
import { ProfileSwitcher } from "./ProfileSwitcher";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentProfile: "core" | "software";
}

export function Navbar({ currentProfile }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "EDUCATION", href: "#education" },
    { label: "SKILLS", href: "#skills" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "RESUME", href: currentProfile === "core" ? "/resume/vlsi" : "/resume/software" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F4F0]/90 backdrop-blur-md border-b border-[#DCDAD3] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Name */}
        <Link
          href={currentProfile === "core" ? "/core" : "/software"}
          className="group flex flex-col focus-visible:ring-1 focus-visible:ring-[#171717]"
        >
          <span className="font-semibold text-sm tracking-wider uppercase text-[#171717] group-hover:text-[#596B72] transition-colors">
            SAI RAHUL BHAT GAADHI RAJU
          </span>
          <span className="font-mono-tech text-[10px] tracking-widest text-[#6F6E69] uppercase">
            ECE · HYDERABAD, INDIA
          </span>
        </Link>

        {/* Desktop Navigation & Profile Switcher */}
        <div className="hidden xl:flex items-center gap-8">
          <ProfileSwitcher currentProfile={currentProfile} />

          <div className="h-4 w-[1px] bg-[#DCDAD3]" aria-hidden="true" />

          <nav aria-label="Main Navigation" className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono-tech text-xs tracking-wider uppercase text-[#6F6E69] hover:text-[#171717] transition-colors link-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile / Tablet Profile Switcher & Hamburger */}
        <div className="flex xl:hidden items-center gap-3">
          <ProfileSwitcher currentProfile={currentProfile} className="text-[10px]" />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#171717] hover:text-[#596B72] focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F5F4F0] border-b border-[#DCDAD3] px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono-tech text-xs tracking-wider uppercase text-[#171717] hover:text-[#596B72] py-1 border-b border-[#DCDAD3]/50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
