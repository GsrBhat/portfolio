"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProfileSwitcherProps {
  currentProfile: "core" | "software";
  className?: string;
}

export function ProfileSwitcher({ currentProfile, className = "" }: ProfileSwitcherProps) {
  const pathname = usePathname();
  
  // Preserve sub-routes if navigating within resume or main pages
  const isResumePage = pathname.startsWith("/resume");

  const coreHref = isResumePage ? "/resume/vlsi" : "/core";
  const softwareHref = isResumePage ? "/resume/software" : "/software";

  return (
    <nav
      aria-label="Professional Profile Switcher"
      className={`inline-flex items-center gap-3 font-mono-tech text-xs tracking-wider uppercase select-none ${className}`}
    >
      <Link
        href={coreHref}
        className={`px-3 py-1.5 transition-all duration-300 relative ${
          currentProfile === "core"
            ? "text-[#171717] font-semibold"
            : "text-[#6F6E69] hover:text-[#171717]"
        }`}
        aria-current={currentProfile === "core" ? "page" : undefined}
      >
        <span>CORE / VLSI</span>
        {currentProfile === "core" && (
          <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#171717] rounded-full transition-all duration-300" />
        )}
      </Link>

      <span className="text-[#DCDAD3] font-light" aria-hidden="true">
        ↔
      </span>

      <Link
        href={softwareHref}
        className={`px-3 py-1.5 transition-all duration-300 relative ${
          currentProfile === "software"
            ? "text-[#171717] font-semibold"
            : "text-[#6F6E69] hover:text-[#171717]"
        }`}
        aria-current={currentProfile === "software" ? "page" : undefined}
      >
        <span>SOFTWARE / IT</span>
        {currentProfile === "software" && (
          <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#171717] rounded-full transition-all duration-300" />
        )}
      </Link>
    </nav>
  );
}
