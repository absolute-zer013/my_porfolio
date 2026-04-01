export const SECTIONS = ["about", "skills", "experience", "projects", "contact"] as const;

export const skills = [
  "Flutter",
  "Dart",
  "React",
  "Vite",
  "Tailwind CSS",
  "GraphQL",
  "REST API",
  "PDF Generation",
  "GitHub Actions",
  "CI/CD",
  "Android APK",
  "Play Store Deployment",
  "Firebase Deployment",
  "UI Implementation",
  "API Integration",
];

export interface Experience {
  name: string;
  title: string;
  period: string;
  tag: string;
  accentColor: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    name: "SANSOLS",
    title: "Government NRE & Immigration System",
    period: "2022 – 2025",
    tag: "Flutter · GraphQL · CI/CD",
    accentColor: "#c8a882",
    points: [
      "Built State Secretary mobile app (Flutter/Android) for approving/rejecting foreign worker permits",
      "Implemented NRE management, employer profiles, AP application forms, workplace listings & licencing screens",
      "Set up GitHub Actions CI/CD for automated APK builds and Play Store deployment",
      "Integrated digital signing into AP approval workflow",
      "Resolved 50+ critical bugs across ALPHA and LIVE environments",
    ],
  },
  {
    name: "SAFHIS",
    title: "Medical Facility Registration System",
    period: "2024",
    tag: "Flutter · REST API",
    accentColor: "#8ba5b8",
    points: [
      "Built multi-step medical facility registration flow in Flutter",
      "Developed reusable operating hours input component",
      "Implemented government admin permissions & settings UI",
      "API client integration with full prefill logic for multi-page forms",
    ],
  },
  {
    name: "iSC | Workflow",
    title: "Ministry Benefits & Approval System",
    period: "2022 – 2023",
    tag: "Flutter · Mobile",
    accentColor: "#9baa8c",
    points: [
      "Built multi-level approval flows with inline comments",
      "Fixed cross-platform UI issues across iOS, Android, and iPad",
      "Implemented bulk approval functionality (up to 50 applications)",
    ],
  },
  {
    name: "FW Jobs (Perkeso)",
    title: "Foreign Worker Jobs Portal",
    period: "2024 – 2025",
    tag: "Flutter · PDF",
    accentColor: "#b89ab8",
    points: [
      "Full UI rebranding from Perkeso to FW Jobs across all screens",
      "PDF generation for hiring reports and interviewer participation lists",
      "Fixed QR code scanning errors and interview details display bugs",
    ],
  },
];

export interface Project {
  title: string;
  type: string;
  stack: string;
  num: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "FFmpeg Filter App",
    type: "Desktop App · Personal Project",
    stack: "Flutter · Windows · GitHub Actions",
    num: "01",
    description:
      "A desktop utility for batch-processing MKV video files using FFmpeg — codec conversion (H.264, H.265, VP9, AV1), export profiles, GPU auto-detection (NVIDIA/AMD/Intel), quality presets, chapter editing, and automated Windows release builds via CI/CD.",
    link: "https://github.com/absolute-zer013/ffmpeg-gui-application",
  },
  {
    title: "Creator Portfolio",
    type: "Web · Freelance Projects",
    stack: "React · Vite · Tailwind CSS · Firebase",
    num: "02",
    description:
      "A travel content creator media kit built on Firebase with TikTok embeds and brand showcase (AirAsia, Malaysia Airlines, Insta360).",
    link: "https://github.com/absolute-zer013/portfolio",
  },
  {
    title: "Law Firm Website",
    type: "Web · Freelance Project",
    stack: "React · Vite · Firebase",
    num: "03",
    description:
      "Professional website and article management portal for Messrs. Farid Rahim, Advocates & Solicitors — public site covering 4 practice areas with an internal admin portal for managing legal articles.",
    link: "https://github.com/absolute-zer013/lawfirm_web",
  },
];

export const contact = {
  email: "mfahmitj13.iu@gmail.com",
  whatsapp: {
    display: "+60 13-596 6001",
    link: "https://wa.me/60135966001",
  },
  linkedin: {
    display: "linkedin.com/in/mfahmitj13",
    link: "https://www.linkedin.com/in/mfahmitj13/",
  },
};
