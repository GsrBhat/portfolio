export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  tools: string[];
  techPills: string[];
  year: string;
  shortDescription: string;
  overview: string;
  problem?: string;
  architecture: string[];
  implementation: string[];
  verification: string[];
  results: string[];
  keySpecs: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TrainingExperience {
  organization: string;
  program: string;
  role: string;
  bullets: string[];
}

export interface CertificationGroup {
  provider: string;
  items: { title: string; institution?: string; detail?: string }[];
}

export interface VLSIProfileData {
  id: "core";
  slug: "core";
  heading: "ELECTRONICS & VLSI ENGINEER";
  summary: string;
  technicalTags: string[];
  resumePdf: string;
  resumeRoute: string;
  training: TrainingExperience;
  skillCategories: SkillCategory[];
  projects: ProjectDetail[];
  certifications: CertificationGroup[];
}

export const vlsiData: VLSIProfileData = {
  id: "core",
  slug: "core",
  heading: "ELECTRONICS & VLSI ENGINEER",
  summary: "B.Tech Electronics and Communication Engineering student specializing in RTL design, digital systems, and analog/mixed-signal VLSI design flows. Samsung ISWDP Fellow with hands-on training in semiconductor fundamentals, CMOS device physics, and TCAD-based modeling. Experienced in designing, simulating, and verifying digital and analog IC architectures using Verilog HDL, Cadence Virtuoso, Xilinx Vivado, and Synopsys Sentaurus TCAD.",
  technicalTags: ["RTL DESIGN", "DIGITAL SYSTEMS", "ANALOG / MIXED SIGNAL", "FPGA", "CADENCE VIRTUOSO", "SYNOPSYS SENTARUS"],
  resumePdf: "/VLSI_RESUME.pdf",
  resumeRoute: "/resume/vlsi",
  training: {
    organization: "Samsung Electronics",
    program: "India Semiconductor Workforce Development Program (ISWDP)",
    role: "Cohort 8 Scholar, Grade II",
    bullets: [
      "Selected from a national pool of 4,000+ engineering applicants based on technical aptitude.",
      "Completed industry-led training in deep-submicron CMOS fundamentals, short-channel effects, and physical layout principles.",
      "Built active device physics models in Synopsys Sentaurus TCAD to study switching characteristics, threshold voltage variation, and transistor-level behavior."
    ]
  },
  skillCategories: [
    {
      category: "Hardware Description Languages",
      skills: ["Verilog HDL (RTL, Behavioral, Dataflow, Structural)", "Verilog-A"]
    },
    {
      category: "EDA Tools",
      skills: ["Cadence Virtuoso", "Synopsys Sentaurus TCAD", "Xilinx Vivado", "ModelSim"]
    },
    {
      category: "Simulation Tools",
      skills: ["Spectre (AC, Transient, Mixed-Signal)"]
    },
    {
      category: "Analog & Mixed-Signal Design",
      skills: [
        "Switched-Capacitor Circuits",
        "Operational Amplifier Design",
        "Comparators",
        "Sigma-Delta ADC",
        "Noise Shaping",
        "Low-Power Analog Design"
      ]
    },
    {
      category: "Digital Design",
      skills: ["RTL Design", "Combinational & Sequential Logic", "Finite State Machines (FSM)"]
    },
    {
      category: "FPGA Development",
      skills: ["FPGA Prototyping", "Constraint Definition", "Pin Mapping", "Clock Definition"]
    },
    {
      category: "Verification",
      skills: ["Testbench Development", "Waveform Debugging", "Simulation-Based Functional Verification"]
    },
    {
      category: "Semiconductor Concepts",
      skills: ["CMOS", "FinFET", "Static Timing Analysis (STA)", "Setup/Hold Constraint Validation"]
    },
    {
      category: "Programming & Scripting",
      skills: ["C", "Python (Automation & Scripting)", "MATLAB (DSP & Filter Design)"]
    }
  ],
  projects: [
    {
      id: "sigma-delta-adc",
      number: "01",
      title: "DESIGN OF A LOW-POWER 2ND-ORDER SIGMA-DELTA ADC",
      subtitle: "Using Noise Shaping Techniques",
      tools: ["Cadence Virtuoso", "Spectre", "Verilog-A", "18nm FinFET"],
      techPills: ["Cadence Virtuoso", "Spectre", "18nm FinFET"],
      year: "2026",
      shortDescription: "A second-order Sigma-Delta ADC architecture using switched-capacitor integrators to achieve in-band noise shaping optimized for low power.",
      overview: "Designed and simulated a complete 2nd-order Sigma-Delta Analog-to-Digital Converter in Cadence Virtuoso using 18nm FinFET technology nodes. The core features a two-stage Miller-compensated op-amp, switched-capacitor integrators, a high-speed comparator, 1-bit feedback DAC, and a Sinc³ (CIC) decimation filter written in Verilog-A.",
      problem: "Traditional Nyquist-rate ADCs require high-precision component matching and complex anti-aliasing filters. Oversampling with Sigma-Delta modulation shifts quantization noise out of band, enabling high resolution with low-power analog blocks.",
      architecture: [
        "Second-order Sigma-Delta modulator topology with dual switched-capacitor integrator stages.",
        "Two-stage Miller-compensated operational amplifier engineered for high open-loop gain and phase margin.",
        "Dynamic latch comparator paired with a 1-bit switched-capacitor feedback DAC completing the loop.",
        "Digital decimation stage implemented with a Sinc³ (CIC) filter behavioral model in Verilog-A."
      ],
      implementation: [
        "Transistor-level schematic entry in Cadence Virtuoso using 18nm FinFET process PDKs.",
        "Switched-capacitor clocking scheme designed with non-overlapping clock generators to eliminate charge-injection overlap.",
        "Sinc³ CIC filter logic parameterized for decimation ratio in Verilog-A for mixed-signal integration."
      ],
      verification: [
        "AC frequency response analysis of the two-stage Miller op-amp to verify gain, bandwidth, and phase margin.",
        "Transient simulation of switched-capacitor integrators verifying settling time and charge transfer accuracy.",
        "Full mixed-signal transient and noise-shaping spectrum analysis in Spectre over extended conversion cycles."
      ],
      results: [
        "Achieved effective in-band quantization noise shaping.",
        "Optimized the full analog core for low-power operation, consuming approximately 51.36 µW.",
        "Verified robust switching behavior across 18nm FinFET process corners."
      ],
      keySpecs: [
        { label: "Technology Node", value: "18nm FinFET" },
        { label: "Power Consumption", value: "~51.36 µW" },
        { label: "Modulator Order", value: "2nd-Order Sigma-Delta" },
        { label: "Filter Type", value: "Sinc³ (CIC) Decimation Filter in Verilog-A" }
      ]
    },
    {
      id: "risc-v-pipelined-alu",
      number: "02",
      title: "RISC-V 4-STAGE PIPELINED ALU DESIGN",
      subtitle: "RV32I ISA Datapath & Hazard Handling",
      tools: ["Xilinx Vivado", "Verilog HDL"],
      techPills: ["Xilinx Vivado", "Verilog HDL"],
      year: "2025",
      shortDescription: "A 4-stage pipelined Arithmetic Logic Unit separating datapath and control logic with data forwarding and stall logic for RV32I ISA.",
      overview: "Designed and functionally verified a 4-stage pipelined ALU in Verilog HDL tailored to RV32I ISA requirements. The design incorporates distinct instruction stage registers (Fetch, Decode, Execute, Writeback) along with hazard detection hardware to prevent data hazards without compromising throughput.",
      architecture: [
        "4-stage pipeline hierarchy: Instruction Fetch, Decode, Execute, and Writeback.",
        "RV32I execution unit supporting arithmetic, logic, branch comparisons, and shift operations.",
        "Forwarding unit multiplexing operand sources directly from pipeline registers to resolve RAW hazards.",
        "Hazard detection unit asserting pipeline stalls and flushing control signals during unresolved conflicts."
      ],
      implementation: [
        "Clean behavioral and structural RTL written in modular Verilog HDL.",
        "Dedicated ALU opcode decoder operating in parallel with register file read ports.",
        "Explicit separation of combinational datapath and synchronous pipeline edge registers."
      ],
      verification: [
        "Testbench-driven simulation in Xilinx Vivado testing consecutive dependent instructions.",
        "Waveform analysis confirming correct data forwarding across Execute-to-Execute and Writeback-to-Execute stages.",
        "Corner-case testing with back-to-back branch evaluation and load-use hazard stall cycles."
      ],
      results: [
        "Zero functional errors across execution of RV32I instruction test sequences.",
        "Validated hazard-free execution with minimal stall insertion.",
        "Synthesized logic clean of latch inference."
      ],
      keySpecs: [
        { label: "Target ISA", value: "RISC-V RV32I" },
        { label: "Pipeline Stages", value: "4 (Fetch, Decode, Execute, Writeback)" },
        { label: "Hazard Handling", value: "Data Forwarding & Pipeline Stall Logic" },
        { label: "Toolchain", value: "Xilinx Vivado" }
      ]
    },
    {
      id: "power-quality-fpga",
      number: "03",
      title: "FPGA-BASED POWER QUALITY ANOMALY DETECTION CORE",
      subtitle: "Real-Time Hardware Monitoring Core",
      tools: ["Xilinx Vivado", "Verilog HDL", "FPGA"],
      techPills: ["Xilinx Vivado", "Verilog HDL"],
      year: "2025",
      shortDescription: "A Verilog HDL hardware core for real-time detection of voltage fluctuations and frequency-based power quality anomalies.",
      overview: "Developed a hardware-accelerated monitoring core targeting FPGA deployment to detect real-time power quality disturbances such as voltage sags, swells, and frequency deviations. The design uses dedicated hardware registers to process incoming telemetry continuously.",
      architecture: [
        "High-speed digital sampling interface reading digitized voltage waveform data.",
        "Real-time anomaly evaluation engine comparing amplitude and cycle timings against threshold registers.",
        "Alert flag generation circuit asserting synchronous interrupt pulses upon anomaly detection."
      ],
      implementation: [
        "Synthesizable Verilog HDL with explicit state machine control.",
        "Defined hardware constraints (XDC file) for target FPGA board pin mapping and primary clock definitions.",
        "Pipelined magnitude comparison logic for zero latency processing."
      ],
      verification: [
        "Vivado Simulator testbench executing synthetic voltage sag/swell waveform inputs.",
        "Timing verification validating setup and hold margins against target clock constraints.",
        "Resource estimation and logic utilization review post-synthesis."
      ],
      results: [
        "Real-time detection of sag/swell events within single-cycle thresholds.",
        "Clean synthesis under tight timing constraints on Xilinx FPGA target.",
        "Robust hardware state transitions verified via waveform analysis."
      ],
      keySpecs: [
        { label: "Core Type", value: "Verilog HDL Anomaly Detection Engine" },
        { label: "Target Hardware", value: "Xilinx FPGA" },
        { label: "Monitored Parameters", value: "Voltage Fluctuations & Frequency Anomalies" },
        { label: "Synthesis Tool", value: "Xilinx Vivado" }
      ]
    },
    {
      id: "16-bit-alu",
      number: "04",
      title: "16-BIT ALU COMPARATIVE STUDY (PIPELINED VS. NON-PIPELINED)",
      subtitle: "Architecture Trade-off Analysis",
      tools: ["ModelSim", "Xilinx Vivado", "Verilog HDL"],
      techPills: ["ModelSim", "Vivado"],
      year: "2024",
      shortDescription: "Comparative VLSI analysis evaluating maximum clock frequency, propagation delay, and area utilization between pipelined and non-pipelined 16-bit ALUs.",
      overview: "Conducted a detailed comparative VLSI study designing two architectures for a 16-bit ALU in Verilog HDL: a single-cycle combinational ALU and a multi-stage pipelined variant. Evaluated performance trade-offs in clock frequency, propagation delay, and FPGA slice utilization.",
      architecture: [
        "Non-pipelined architecture: Deep combinational logic path performing arithmetic, logic, and bit manipulation.",
        "Pipelined architecture: Segmented datapath with intermediate registers breaking critical timing paths."
      ],
      implementation: [
        "Written in standardized Verilog HDL compiled in ModelSim and Vivado.",
        "Comprehensive test harness driving identical test vector stimulus to both models simultaneously."
      ],
      verification: [
        "Waveform timing analysis in ModelSim calculating setup time margin and critical path delays.",
        "Post-synthesis timing reports in Vivado extracting Fmax and LUT/FF utilization metrics."
      ],
      results: [
        "Pipelined variant demonstrated significant gain in Fmax at the expense of pipeline latency.",
        "Quantified exact trade-offs between logic depth, register overhead, and throughput.",
        "Validated bit-exact output equivalence between both architectures."
      ],
      keySpecs: [
        { label: "Data Width", value: "16-bit Datapath" },
        { label: "Compared Types", value: "Non-Pipelined vs. Multi-Stage Pipelined" },
        { label: "Key Metrics Evaluated", value: "Fmax, Propagation Delay, Resource Utilization" },
        { label: "Verification Tool", value: "ModelSim & Xilinx Vivado" }
      ]
    },
    {
      id: "barrel-shifter",
      number: "05",
      title: "PARAMETERIZED N-BIT BARREL SHIFTER ARCHITECTURE",
      subtitle: "Cascaded Multiplexer Tree Design",
      tools: ["Xilinx Vivado", "Verilog HDL"],
      techPills: ["Xilinx Vivado", "Verilog HDL"],
      year: "2024",
      shortDescription: "A fully parameterized N-bit barrel shifter constructed with a cascaded 2-to-1 multiplexer tree supporting logical and arithmetic shifts.",
      overview: "Designed a clean, parameterized Verilog HDL barrel shifter capable of handling arbitrary word widths (N-bit) across log₂N cascaded multiplexer stages. The architecture supports logical left/right shifts as well as sign-extended arithmetic right shifts without inferring unintended latches.",
      architecture: [
        "Cascaded log₂N multiplexer tree providing single-cycle arbitrary bit shifting.",
        "Parameterized structural instantiation supporting 8-bit, 16-bit, 32-bit, or N-bit widths.",
        "Configurable arithmetic sign extension bit generator."
      ],
      implementation: [
        "RTL implemented in parameterized Verilog HDL utilizing generate blocks and parameters.",
        "Structured combinational logic ensuring clean synthesis without inferred latches or clock gating issues."
      ],
      verification: [
        "Automated simulation sweep in Vivado applying thousands of random shift control words.",
        "Verification across corner shift amounts (0, 1, N-1, and N)."
      ],
      results: [
        "100% functional match across all shift modes and vector patterns.",
        "Latch-free synthesis confirmed via Vivado RTL schematic and synthesis warnings audit."
      ],
      keySpecs: [
        { label: "Architecture", value: "Parameterized N-bit Barrel Shifter" },
        { label: "Stage Structure", value: "Cascaded 2-to-1 MUX Tree (log₂N stages)" },
        { label: "Supported Operations", value: "Logical Left/Right & Arithmetic Right Shifts" },
        { label: "Synthesis Quality", value: "Clean Synthesis (Zero Inferred Latches)" }
      ]
    }
  ],
  certifications: [
    {
      provider: "NPTEL / IIT Institutions",
      items: [
        { title: "VLSI Physical Design with Timing Analysis", institution: "IIT Roorkee" },
        { title: "Digital Design with Verilog HDL", institution: "IIT Guwahati", detail: "Top 75th percentile" },
        { title: "VLSI Design Flow: RTL to GDS", institution: "IIIT Delhi" }
      ]
    },
    {
      provider: "Maven Silicon",
      items: [
        { title: "VLSI SoC Architecture & Digital Design Overview" }
      ]
    }
  ]
};
