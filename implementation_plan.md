# Implementation Plan: Premium Dual-Profile Portfolio for Sai Rahul Bhat Gaadhi Raju

Build a sophisticated, editorial European-style developer/engineer portfolio for **SAI RAHUL BHAT GAADHI RAJU**, supporting seamless switching between **CORE / VLSI** and **SOFTWARE / IT** profiles.

## User Review Required

> [!IMPORTANT]
> - **Authoritative Content Source**: All text, projects, skills, education (CGPA 7.95/10), certifications, and experience are extracted directly from [VLSI_RESUME.pdf](file:///c:/Users/likhi/Documents/Rahul/new_portfolio/VLSI_RESUME.pdf) and [IT_RESUME.pdf](file:///c:/Users/likhi/Documents/Rahul/new_portfolio/IT_RESUME.pdf) with 100% strict fidelity.
> - **Resume File Support**: [VLSI_RESUME.pdf](file:///c:/Users/likhi/Documents/Rahul/new_portfolio/VLSI_RESUME.pdf) and [IT_RESUME.pdf](file:///c:/Users/likhi/Documents/Rahul/new_portfolio/IT_RESUME.pdf) will be served directly in `/public` for inline PDF viewing and direct download.
> - **URL State & Router Integration**: `/core` and `/software` routes will drive active profile state, as well as `/resume/vlsi` and `/resume/software`.

## Proposed Architecture & Design System

### 1. Palette & Typography
- **Background**: `#F5F4F0`
- **Primary Text**: `#171717`
- **Secondary Text**: `#6F6E69`
- **Borders**: `#DCDAD3`
- **Muted Accent**: `#596B72`
- **Secondary Muted Accent**: `#8A8175`
- **Fonts**:
  - `Inter` / `Manrope` for headings and body typography.
  - `IBM Plex Mono` for technical labels, tags, numbers, and metadata.

### 2. Core Structure & Components
- **`app/`**: Next.js App Router setup with routes `/`, `/core`, `/software`, `/project/[id]`, `/resume`, `/resume/[profile]`.
- **`data/vlsi.ts`**: Complete structured content for the VLSI profile.
- **`data/software.ts`**: Complete structured content for the IT/Software profile.
- **`data/shared.ts`**: Shared personal details, contact info, and education.
- **`components/Navbar.tsx`**: Editorial header with profile switcher toggle (`CORE / VLSI` ↔ `SOFTWARE / IT`).
- **`components/Hero.tsx`**: Dynamic hero section driven by active profile.
- **`components/ProfileSwitcher.tsx`**: Animated, minimal profile selector pill/toggle.
- **`components/ProjectList.tsx` & `components/ProjectCard.tsx`**: Large editorial project showcase with numbers, tags, specs, and modal/page expansion.
- **`components/Skills.tsx`**: Text-based category skill layout with typography hierarchy (no bar charts/logos).
- **`components/Experience.tsx`**: Dedicated timeline for Samsung ISWDP Fellowship (VLSI) and VaultofCodes Internship (IT).
- **`components/Education.tsx`**: Anurag University (7.95 CGPA) & JNGPT Diploma (9.17 CGPA).
- **`components/Certifications.tsx`**: Categorized certification listings.
- **`components/ResumeViewer.tsx`**: Embedded PDF viewer tab + instant download trigger.
- **`components/Contact.tsx` & `components/Footer.tsx`**: Minimal contact section and editorial footer.

## Implementation Steps

### Phase 1: Next.js Setup & Dependencies
- Initialize Next.js app in the directory with TypeScript, Tailwind CSS, App Router, ESLint.
- Install dependencies: `framer-motion`, `lucide-react`, `@pdf-viewer` or native HTML object/iframe with fallback.
- Configure Google Fonts (`Inter`, `IBM Plex Mono`) and custom color tokens in Tailwind CSS config (`bg-warm`, `text-primary`, `text-secondary`, `border-muted`, `accent-slate`).

### Phase 2: Data System Construction
- Populate `data/vlsi.ts` with all 5 VLSI projects, skills, training, certifications.
- Populate `data/software.ts` with all 5 IT projects, skills, internship, achievements, certifications.
- Build helper context/hooks for seamless profile state management with Next.js router.

### Phase 3: Layout & Editorial UI Component Development
- Build `Navbar` and `ProfileSwitcher` with smooth layout transitions (`300-500ms`).
- Implement `Hero` section per profile guidelines.
- Build `ProjectList` editorial view with deep detail drawers/modals for technical specs (e.g. 51.36 µW power figure, 18nm FinFET, RV32I ISA semantics, Spring Boot 3 + Hugging Face API details).
- Implement `Skills`, `Experience`, `Education`, `Certifications`.
- Build `ResumeViewer` page and modal supporting inline PDF viewing and downloading.
- Build responsive layout with clean grid guidelines and typography hierarchy.

### Phase 4: Polish & Verification
- Test switching state persistence and keyboard/touch navigation.
- Verify exact accuracy against [VLSI_RESUME.pdf](file:///c:/Users/likhi/Documents/Rahul/new_portfolio/VLSI_RESUME.pdf) and [IT_RESUME.pdf](file:///c:/Users/likhi/Documents/Rahul/new_portfolio/IT_RESUME.pdf).
- Test responsive layout across desktop, tablet, and mobile viewport sizes.

## Verification Plan

### Automated Tests
- `npm run build`: Verify zero TypeScript or Next.js build errors.
- `npm run lint`: Verify clean linting.

### Manual Verification
- Launch local Next.js server (`npm run dev` at `http://localhost:3000`).
- Test switching between `/core` and `/software`.
- Verify Hero text, Projects list, Skills list, Experience list, and Resume viewer dynamically update without visual glitching or full reloads.
- Verify PDF download buttons link directly to [/VLSI_RESUME.pdf](file:///c:/Users/likhi/Documents/Rahul/new_portfolio/VLSI_RESUME.pdf) and [/IT_RESUME.pdf](file:///c:/Users/likhi/Documents/Rahul/new_portfolio/IT_RESUME.pdf).
- Inspect mobile layout responsiveness using browser subagent.
