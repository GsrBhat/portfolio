export interface SoftwareProjectDetail {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  tools: string[];
  techPills: string[];
  year: string;
  shortDescription: string;
  overview: string;
  architecture: string[];
  implementation: string[];
  verification: string[];
  results: string[];
  keySpecs: { label: string; value: string }[];
}

export interface SoftwareSkillCategory {
  category: string;
  skills: string[];
}

export interface InternshipExperience {
  role: string;
  company: string;
  bullets: string[];
}

export interface SoftwareCertificationGroup {
  provider: string;
  items: { title: string; detail?: string }[];
}

export interface SoftwareProfileData {
  id: "software";
  slug: "software";
  heading: "SOFTWARE DEVELOPER";
  summary: string;
  technicalTags: string[];
  resumePdf: string;
  resumeRoute: string;
  internship: InternshipExperience;
  achievements: string[];
  skillCategories: SoftwareSkillCategory[];
  projects: SoftwareProjectDetail[];
  certifications: SoftwareCertificationGroup[];
}

export const softwareData: SoftwareProfileData = {
  id: "software",
  slug: "software",
  heading: "SOFTWARE DEVELOPER",
  summary: "Software developer with a B.Tech in Electronics and Communication Engineering, focused on full stack development using Java, Spring Boot, React, and Python. Experienced in building AI-integrated applications, REST APIs, and database-driven systems, with a solid foundation in data structures, algorithms, and OOP.",
  technicalTags: ["JAVA", "SPRING BOOT", "REACT", "PYTHON", "POSTGRESQL", "REST APIS"],
  resumePdf: "/IT_RESUME.pdf",
  resumeRoute: "/resume/software",
  internship: {
    role: "Python Programming Intern",
    company: "VaultofCodes",
    bullets: [
      "Applied Python programming and logic-building techniques to complete hands-on assignments involving automation and debugging.",
      "Strengthened core problem-solving skills through real-world programming challenges and script optimization."
    ]
  },
  achievements: [
    "Selected for the Samsung ISWDP Cohort 8 Fellowship.",
    "Participated in the India Semiconductor Workforce Development Program (ISWDP)."
  ],
  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "C", "Verilog HDL"]
    },
    {
      category: "Frontend",
      skills: ["React", "HTML", "CSS", "JavaScript (Basic)", "Bootstrap"]
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "Spring Security", "REST APIs"]
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "SQL"]
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Maven", "Vite", "MATLAB", "Vivado", "Cadence Virtuoso", "Cisco Packet Tracer"]
    },
    {
      category: "Core CS",
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
    },
    {
      category: "Other",
      skills: ["AI", "Machine Learning Basics", "Linux Basics", "Debugging", "Testing", "Version Control", "Technical Documentation"]
    }
  ],
  projects: [
    {
      id: "smart-hospital-management-system",
      number: "01",
      title: "SMART HOSPITAL MANAGEMENT SYSTEM",
      subtitle: "Full Stack Java 21 & React 18 Platform with AI Recommendation",
      tools: ["Java 21", "Spring Boot 3", "Spring Security", "React 18", "Vite", "PostgreSQL", "Bootstrap", "Axios", "Hugging Face API", "Maven"],
      techPills: ["Java 21", "Spring Boot 3", "React 18", "PostgreSQL", "Hugging Face API"],
      year: "2026",
      shortDescription: "A full-stack hospital management platform with appointment booking, patient record management, queue tracking, Spring Security role-based auth, and Hugging Face AI specialist matching.",
      overview: "Engineered a production-ready, full-stack hospital management platform utilizing Java 21, Spring Boot 3, React 18, and PostgreSQL. The application streamlines healthcare operations across Admin, Doctor, and Patient roles, featuring real-time queue tracking, secure appointment scheduling, and AI-assisted doctor recommendations.",
      architecture: [
        "Layered backend architecture in Spring Boot with explicit Controllers, Services, Repositories, and Data Transfer Objects (DTOs).",
        "Role-based authentication & authorization engine built with Spring Security for Admin, Doctor, and Patient roles.",
        "React 18 single-page application frontend bundled with Vite, using Axios for REST API communication.",
        "PostgreSQL relational database schema managing patient records, doctor availability, appointment slots, and real-time tokens."
      ],
      implementation: [
        "Integrated the Hugging Face Inference API to analyze patient symptom descriptions and recommend suitable medical specialists automatically.",
        "Engineered RESTful API endpoints for booking appointments, real-time queue monitoring, and sequential token generation.",
        "Configured Spring Security filters with JWT/session management to protect patient medical history and administrative endpoints."
      ],
      verification: [
        "Backend endpoint testing and validation across appointment lifecycle states (Pending, Confirmed, Completed, Cancelled).",
        "Security audits verifying role-based route access controls between Patients and Doctors.",
        "Integration testing of Hugging Face Inference API fallback handling during network latency."
      ],
      results: [
        "Delivered a seamless end-to-end full-stack portal with zero security vulnerabilities across role boundaries.",
        "Accurate AI-driven specialist recommendation based on patient symptom inputs.",
        "Clean REST API documentation and structured code architecture built for scalability."
      ],
      keySpecs: [
        { label: "Backend Stack", value: "Java 21, Spring Boot 3, Spring Security, Maven" },
        { label: "Frontend Stack", value: "React 18, Vite, Bootstrap, Axios" },
        { label: "Database", value: "PostgreSQL" },
        { label: "AI Integration", value: "Hugging Face Inference API" }
      ]
    },
    {
      id: "rtl-projects",
      number: "02",
      title: "RTL PROJECTS (PIPELINED ALU, BARREL SHIFTER, 4-BIT ALU)",
      subtitle: "Hardware Description & Simulation in Verilog HDL",
      tools: ["Verilog HDL", "Xilinx Vivado", "ModelSim"],
      techPills: ["Verilog HDL", "Vivado", "ModelSim"],
      year: "2025",
      shortDescription: "Designed, simulated, and functionally verified a pipelined ALU, barrel shifter, and 4-bit ALU in Verilog HDL, debugging timing and logic issues through waveform analysis.",
      overview: "Applied digital logic design principles to build synthesizable Verilog HDL hardware modules including a 4-stage pipelined ALU, a parameterized barrel shifter, and a 4-bit arithmetic unit. Conducted simulation-driven verification and waveform timing analysis.",
      architecture: [
        "Modular Verilog architecture isolating control signals, ALU operation decoders, and register stages.",
        "Datapath design for 4-bit and pipelined ALU structures supporting arithmetic logic operations.",
        "Cascaded multiplexer trees for barrel shifter logic."
      ],
      implementation: [
        "Implemented synthesizable Verilog HDL code avoiding inferred latches.",
        "Created comprehensive self-checking testbenches with structured stimulus generation."
      ],
      verification: [
        "Waveform analysis in ModelSim and Xilinx Vivado to isolate signal transitions and propagation delays.",
        "Functional verification testing all arithmetic and logical instruction combinations."
      ],
      results: [
        "Verified bit-exact functional execution across all design modules.",
        "Successfully debugged timing and logic hazards via simulation waveform traces."
      ],
      keySpecs: [
        { label: "HDL Language", value: "Verilog HDL" },
        { label: "Designed Modules", value: "Pipelined ALU, Barrel Shifter, 4-bit ALU" },
        { label: "Simulation EDA", value: "ModelSim & Xilinx Vivado" }
      ]
    },
    {
      id: "nova-os",
      number: "03",
      title: "NOVA OS — AI-POWERED DESKTOP ASSISTANT",
      subtitle: "Modular Python Software Architecture",
      tools: ["Python", "AI Automation", "Software Design"],
      techPills: ["Python", "AI Automation"],
      year: "2025",
      shortDescription: "A modular Python-based AI desktop assistant structuring automation features into independent, maintainable components with a scalable design.",
      overview: "Engineered NOVA OS, a modular Python desktop assistant crafted to automate system workflows and developer tasks. Built around clean software engineering patterns, each capability operates as an isolated, maintainable module.",
      architecture: [
        "Decoupled modular architecture separating intent parsing, workflow automation engine, and execution drivers.",
        "Extensible plugin system enabling seamless addition of new automated tasks without changing core engine code."
      ],
      implementation: [
        "Structured object-oriented Python codebase emphasizing single-responsibility modules.",
        "Implemented robust exception handling and logging mechanisms across automation steps."
      ],
      verification: [
        "Automated execution testing across desktop automation routines.",
        "Refined assistant behavior and latency performance across complex workflow sequences."
      ],
      results: [
        "High operational reliability and consistent assistant responsiveness.",
        "Scalable software codebase ready for expansion."
      ],
      keySpecs: [
        { label: "Language", value: "Python" },
        { label: "Architecture", value: "Modular Component Design" },
        { label: "Domain", value: "Desktop AI Assistant & Automation" }
      ]
    },
    {
      id: "aether-os",
      number: "04",
      title: "AETHEROS — UNIVERSAL AI LEARNING OPERATING SYSTEM",
      subtitle: "Productivity Dashboard & Workspace Architecture",
      tools: ["Software Engineering", "Database Planning", "Productivity Architecture"],
      techPills: ["Software Engineering", "Database Planning"],
      year: "2025",
      shortDescription: "An AI-driven learning platform featuring a productivity dashboard and modular workspace architecture with structured database planning.",
      overview: "Designed AetherOS, a comprehensive AI-driven learning environment tailored for modern students and developers. Incorporates a unified productivity dashboard, structured database modeling, and workspace module planning.",
      architecture: [
        "Modular workspace architecture isolating learning modules, task management, and analytical metrics.",
        "Normalized relational database entity-relationship schema designed for scalable user progress tracking."
      ],
      implementation: [
        "Structured application layout according to core software engineering principles and design patterns.",
        "Defined RESTful contracts for workspace data exchange and user session state."
      ],
      verification: [
        "Database schema validation ensuring data integrity and query efficiency.",
        "Workflow walkthroughs testing modular component interaction."
      ],
      results: [
        "Complete structural design blueprint for an AI-enhanced learning platform.",
        "Validated relational schema and intuitive workspace hierarchy."
      ],
      keySpecs: [
        { label: "Concept", value: "AI-Driven Learning & Productivity OS" },
        { label: "Design Focus", value: "Modular Architecture & Database Planning" }
      ]
    },
    {
      id: "fpga-power-quality-software",
      number: "05",
      title: "FPGA-BASED REAL-TIME POWER QUALITY ANOMALY DETECTION (SOFTWARE LAYER)",
      subtitle: "Data Processing & Edge AI Software Layer",
      tools: ["Python", "AI / Edge AI", "Data Processing"],
      techPills: ["Python", "AI / Edge AI"],
      year: "2025",
      shortDescription: "The software layer for a real-time power quality anomaly detection system, handling data processing, algorithm development, and technical documentation using Python.",
      overview: "Developed the software stack supporting a real-time power quality monitoring framework. Responsible for processing raw telemetry streams, implementing detection algorithms in Python, conducting functional testing, and authoring technical documentation.",
      architecture: [
        "Software processing pipeline transforming raw electrical signal samples into feature vectors.",
        "Python algorithmic layer evaluating anomaly patterns in real time."
      ],
      implementation: [
        "Wrote clean, efficient Python scripts for data ingestion, filtering, and threshold evaluation.",
        "Authored thorough technical documentation outlining software endpoints, data formats, and algorithm mechanics."
      ],
      verification: [
        "Script verification using synthetic power quality anomaly dataset streams.",
        "Performance measurement confirming low processing latency per signal batch."
      ],
      results: [
        "Robust software layer handling telemetry parsing and anomaly flags efficiently.",
        "Comprehensive technical documentation enabling seamless hardware-software integration."
      ],
      keySpecs: [
        { label: "Software Stack", value: "Python, AI Concepts" },
        { label: "Responsibilities", value: "Software Layer, Data Processing, Algorithm & Testing" }
      ]
    }
  ],
  certifications: [
    {
      provider: "Cloud & AI",
      items: [
        { title: "Oracle: Cloud Infrastructure 2025 Certified AI Foundations Associate" },
        { title: "Google: Introduction to Generative AI" },
        { title: "Foundation for QC Innovation (IISc Bengaluru): Quantum Computing Workshop" }
      ]
    },
    {
      provider: "Networking",
      items: [
        { title: "Cisco: CCNA – Introduction to Networks" }
      ]
    },
    {
      provider: "Hardware & VLSI Certifications",
      items: [
        { title: "NPTEL: Digital Design with Verilog • VLSI Physical Design with Timing Analysis • VLSI Design Flow: RTL to GDS" },
        { title: "Maven Silicon: VLSI SoC Design Overview" }
      ]
    }
  ]
};
