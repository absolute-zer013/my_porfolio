export const SECTIONS = [
  'about',
  'skills',
  'experience',
  'projects',
  'contact',
] as const;

export interface EmploymentEntry {
  company: string;
  role: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Freelance';
  accentColor: string;
  points: string[];
}

export const employmentHistory: EmploymentEntry[] = [
  {
    company: 'UKUYA SDN BHD',
    role: 'Flutter Developer',
    period: 'June 2023 – Now',
    type: 'Full-time',
    accentColor: '#c8a882',
    points: [
      'Collaborate with teams to build applications based on approved UI designs and requirements',
      'Develop and maintain mobile and web applications using Flutter with clean, production-ready code',
      'Translate wireframes into responsive UI and optimize performance across device sizes',
      'Troubleshoot and debug issues to keep releases stable and reliable',
    ],
  },
  {
    company: 'Telekom Malaysia',
    role: 'Human Resource & Competency Training (TM ELIT)',
    period: 'Oct 2021 – May 2022',
    type: 'Full-time',
    accentColor: '#8ba5b8',
    points: [
      'Organized and implemented weekly employee schedules during Covid-19 operational adjustments',
      'Planned and coordinated training sessions to upskill teams and improve day-to-day execution',
      'Introduced Power BI and Canva for daily presentations and internal knowledge-sharing',
      'Guided colleagues on advanced Excel functions such as XLookup and PivotTable to improve productivity',
    ],
  },
  {
    company: 'Freelancer',
    role: 'Photographer, Videographer, and Graphic Designer',
    period: 'June 2018 – June 2021',
    type: 'Freelance',
    accentColor: '#9baa8c',
    points: [
      'Managed more than 50 club events as photographer and graphic designer, and was hired for wedding shoots and design work',
      'Contributed as an official photographer at Comic Fiesta 2022 and Comic Fiesta 2024',
      "Comic Fiesta is one of Malaysia's largest pop-culture conventions focused on comics, animation, games, and creator communities",
    ],
  },
  {
    company: 'Advanced Soft Technologies Sdn. Bhd',
    role: 'Internship',
    period: 'Mar 2019 – June 2019',
    type: 'Internship',
    accentColor: '#b89ab8',
    points: [],
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  accentColor: string;
  file: string;
}

export const certificates: Certificate[] = [
  {
    title: 'The Ultimate Guide to Game Development with Unity',
    issuer: 'Udemy (Official)',
    year: '2021',
    accentColor: '#c8a882',
    file: '/certificates/unity.png',
  },
  {
    title: 'Flutter & Dart – The Complete Guide [2022 Edition]',
    issuer: 'Udemy (Official)',
    year: '2022',
    accentColor: '#9baa8c',
    file: '/certificates/flutter-dart.png',
  },
  {
    title: 'Big Data Analytics 101',
    issuer: 'CADS',
    year: '2019',
    accentColor: '#8ba5b8',
    file: '/certificates/bigdata.png',
  },
];

export const skills: string[] = [
  'Flutter',
  'Dart',
  'React',
  'TypeScript',
  'Vite',
  'Vanilla CSS',
  'Tailwind CSS',
  'GraphQL',
  'REST API',
  'Firebase',
  'State Management',
  'Git / GitHub',
  'GitHub Actions',
  'CI/CD',
  'Android APK',
  'Play Store Deployment',
  'UI / UX Implementation',
  'Responsive Design',
  'Figma',
];

export interface Highlight {
  label: string;
  value: string;
}

export interface Experience {
  name: string;
  title: string;
  period: string;
  tag: string;
  accentColor: string;
  points: string[];
  // Detail page fields
  slug: string;
  role: string;
  client: string;
  context: string;
  detailedPoints: string[];
  highlights: Highlight[];
  techStack: string[];
  outcome: string;
}

export const experiences: Experience[] = [
  {
    name: 'SANSOLS',
    title: 'Government NRE & Immigration System',
    period: '2022 – 2025',
    tag: 'Flutter · GraphQL · CI/CD',
    accentColor: '#c8a882',
    points: [
      'Built State Secretary mobile app (Flutter/Android) for approving/rejecting foreign worker permits',
      'Implemented NRE management, employer profiles, AP application forms, workplace listings & licencing screens',
      'Set up GitHub Actions CI/CD for automated APK builds and Play Store deployment',
      'Integrated digital signing into AP approval workflow',
      'Resolved 50+ critical bugs across ALPHA and LIVE environments',
    ],
    slug: 'sansols',
    role: 'Mobile Developer (Contract)',
    client: 'National Registration Department (JPN) & Immigration, Malaysia',
    context:
      'A government-grade mobile system managing foreign worker permit approvals, employer licensing, and NRE workflows for federal ministries. The platform serves State Secretary offices across Malaysia, requiring strict reliability and zero-downtime deployments.',
    detailedPoints: [
      'Architected and shipped the State Secretary mobile application in Flutter/Android, enabling senior government officials to review, approve, or reject foreign worker AP permit applications with digital signatures — all from a mobile interface.',
      'Implemented the full NRE module covering employer profile management, AP application forms, workplace address listings, and business licencing screens, handling complex nested form state across dozens of screens.',
      'Designed and configured a GitHub Actions CI/CD pipeline for automated APK builds, signing, and direct Play Store deployment — eliminating manual release steps and reducing deployment time significantly.',
      'Integrated a digital signing flow into the AP approval workflow, allowing authorized officials to cryptographically sign approvals, meeting government compliance requirements.',
      'Systematically identified and resolved 50+ critical bugs spanning both ALPHA (testing) and LIVE (production) environments, including race conditions in form submission, GraphQL query caching issues, and UI rendering bugs across device sizes.',
    ],
    highlights: [
      { label: 'Bugs Resolved', value: '50+' },
      { label: 'Environments', value: 'ALPHA + LIVE' },
      { label: 'CI/CD Pipeline', value: 'GitHub Actions' },
      { label: 'Timeline', value: '2022 – 2025' },
    ],
    techStack: [
      'Flutter',
      'Dart',
      'GraphQL',
      'GitHub Actions',
      'Android',
      'Play Store',
    ],
    outcome:
      'Delivered a production-grade government immigration tool used by State Secretary offices across Malaysia, with zero-downtime deploys via automated CI/CD and a complete AP permit approval lifecycle on mobile.',
  },
  {
    name: 'SAFHIS',
    title: 'Medical Facility Registration System',
    period: '2024',
    tag: 'Flutter · REST API',
    accentColor: '#8ba5b8',
    points: [
      'Built multi-step medical facility registration flow in Flutter',
      'Developed reusable operating hours input component',
      'Implemented government admin permissions & settings UI',
      'API client integration with full prefill logic for multi-page forms',
    ],
    slug: 'safhis',
    role: 'Mobile Developer (Contract)',
    client: 'Ministry of Health (KKM), Malaysia',
    context:
      'A multi-step facility registration system allowing medical providers to register their facilities with the Ministry of Health — covering operating hours, admin user permissions, compliance settings, and facility details across multiple form pages.',
    detailedPoints: [
      'Built the complete multi-step medical facility registration flow in Flutter, managing state across several screens including facility details, operating schedule, staff roles, and compliance declarations.',
      'Designed and developed a reusable operating hours input component supporting configurable day-of-week toggles and time range pickers — reused across multiple facility types with varying schedule requirements.',
      'Implemented the government admin permissions and settings UI, allowing facility administrators to assign role-based access for staff members within the ministry portal.',
      'Integrated a REST API client layer with full prefill logic — when a facility already has partial registration data on the backend, all form fields across every page are automatically populated, preventing duplicate data entry.',
    ],
    highlights: [
      { label: 'Form Steps', value: 'Multi-step' },
      { label: 'Integration', value: 'REST API' },
      { label: 'Reusable Components', value: 'Built' },
      { label: 'Timeline', value: '2024' },
    ],
    techStack: ['Flutter', 'Dart', 'REST API'],
    outcome:
      'Delivered a fully prefillable, multi-step registration form with reusable components, reducing data entry friction for medical facility administrators registering with the Ministry of Health.',
  },
  {
    name: 'iSC | Workflow',
    title: 'Ministry Benefits & Approval System',
    period: '2022 – 2023',
    tag: 'Flutter · Mobile',
    accentColor: '#9baa8c',
    points: [
      'Built multi-level approval flows with inline comments',
      'Fixed cross-platform UI issues across iOS, Android, and iPad',
      'Implemented bulk approval functionality (up to 50 applications)',
    ],
    slug: 'isc-workflow',
    role: 'Mobile Developer (Contract)',
    client: 'Ministry of Finance / Public Service, Malaysia',
    context:
      'An internal government benefits and approval system requiring multi-level sign-off for public service applications. The app runs across iOS, Android, and iPad, serving approvers at different authority levels within federal ministries.',
    detailedPoints: [
      'Built multi-level approval flows with inline comment threads, allowing approvers at different authority levels to review, annotate, and sign off on ministry benefit applications in sequence — each level only accessible after the previous approval is granted.',
      'Diagnosed and fixed a series of cross-platform UI issues that caused layout inconsistencies across iOS phones, Android devices, and iPad tablets — primarily related to safe area insets, font scaling, and adaptive layout breakpoints.',
      'Implemented a bulk approval feature allowing authorized users to select and approve up to 50 applications in a single action, significantly reducing the time senior approvers spent on high-volume review queues.',
    ],
    highlights: [
      { label: 'Bulk Approval Cap', value: '50 apps' },
      { label: 'Platforms', value: 'iOS · Android · iPad' },
      { label: 'Approval Levels', value: 'Multi-level' },
      { label: 'Timeline', value: '2022 – 2023' },
    ],
    techStack: ['Flutter', 'Dart', 'iOS', 'Android', 'iPad'],
    outcome:
      'Shipped cross-platform approval workflows with bulk processing capabilities, significantly reducing manual review time for ministry approvers and ensuring consistent UI quality across all device types.',
  },
  {
    name: 'FW Jobs (Perkeso)',
    title: 'Foreign Worker Jobs Portal',
    period: '2024 – 2025',
    tag: 'Flutter · PDF',
    accentColor: '#b89ab8',
    points: [
      'Full UI rebranding from Perkeso to FW Jobs across all screens',
      'PDF generation for hiring reports and interviewer participation lists',
      'Fixed QR code scanning errors and interview details display bugs',
    ],
    slug: 'fw-jobs',
    role: 'Mobile Developer (Contract)',
    client: 'PERKESO (Social Security Organisation), Malaysia',
    context:
      'A foreign worker jobs portal that underwent a complete visual rebrand from the Perkeso identity to the new FW Jobs brand. The project also introduced PDF report generation for hiring activity and interviewer participation, alongside targeted bug fixes.',
    detailedPoints: [
      'Executed a full UI rebranding of the entire mobile app — updating color schemes, typography, logo assets, splash screens, and all branded UI elements from the Perkeso identity to the new FW Jobs visual identity across every screen in the app.',
      'Implemented PDF generation for two report types: hiring activity reports (summarising employer job postings and applicant outcomes) and interviewer participation lists — both formatted for official use and exported directly from the app.',
      'Diagnosed and fixed a QR code scanning bug that caused incorrect data to be read during employer check-in flows, and resolved an interview details display issue where certain fields failed to render correctly for some record types.',
    ],
    highlights: [
      { label: 'Screens Rebranded', value: 'Full app' },
      { label: 'PDF Report Types', value: '2' },
      { label: 'Bug Fixes', value: 'QR + Details' },
      { label: 'Timeline', value: '2024 – 2025' },
    ],
    techStack: ['Flutter', 'Dart', 'PDF Generation', 'QR Code'],
    outcome:
      'Completed a full visual rebrand on schedule and delivered PDF report generation, giving recruiters and employers downloadable hiring and participation records for compliance and record-keeping.',
  },
];

export interface Project {
  title: string;
  type: string;
  stack: string;
  num: string;
  description: string;
  link: string;
  // Detail page fields
  slug: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  status: string;
  year: string;
  cardImage?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    title: 'FFmpeg Filter App',
    type: 'Desktop App · Personal Project',
    stack: 'Flutter · Windows · GitHub Actions',
    num: '01',
    description:
      'A desktop utility for batch-processing MKV video files using FFmpeg — codec conversion (H.264, H.265, VP9, AV1), export profiles, GPU auto-detection (NVIDIA/AMD/Intel), quality presets, chapter editing, and automated Windows release builds via CI/CD.',
    link: 'https://github.com/absolute-zer013/ffmpeg-gui-application',
    slug: 'ffmpeg-filter-app',
    longDescription:
      'A personal desktop application built with Flutter for Windows that wraps FFmpeg into a clean GUI for batch video processing. The app was built to solve a real personal workflow problem — manually running FFmpeg commands for MKV conversion is error-prone and slow. The GUI abstracts away the CLI complexity while exposing full control over codec selection, quality settings, and GPU acceleration. Releases are automated via GitHub Actions, producing a signed Windows installer on every push to main.',
    features: [
      'Batch MKV file processing with queue management',
      'Codec selection: H.264, H.265, VP9, AV1',
      'GPU auto-detection and hardware acceleration (NVIDIA, AMD, Intel)',
      'Quality presets and custom export profiles',
      'Chapter metadata editing and preservation',
      'Automated Windows installer builds via GitHub Actions CI/CD',
    ],
    techStack: ['Flutter', 'Dart', 'Windows', 'FFmpeg', 'GitHub Actions'],
    status: 'Shipped',
    year: '2024',
    cardImage: '/app_screenshot/ffmpeg_project/Screenshot_20260403_170411.png',
    screenshots: [
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_170411.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_170433.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_170914.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_170925.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_170934.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_170946.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_170957.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_171008.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_171024.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_171037.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_171054.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_190018.png',
      '/app_screenshot/ffmpeg_project/Screenshot_20260403_190042.png',
    ],
  },
  {
    title: 'Creator Portfolio',
    type: 'Web · Freelance Projects',
    stack: 'React · Vite · Tailwind CSS · Firebase',
    num: '02',
    description:
      'A travel content creator media kit built on Firebase with TikTok embeds and brand showcase (AirAsia, Malaysia Airlines, Insta360).',
    link: '',
    slug: 'creator-portfolio',
    longDescription:
      "A media kit and portfolio website built for a travel content creator, designed to attract brand partnerships and sponsorships. The site functions as a professional presentation layer — showcasing audience reach, past brand collaborations, and embedded TikTok content. Hosted on Firebase with CDN distribution for fast global load times. The layout was designed to feel premium and editorial, matching the client's visual brand.",
    features: [
      'Embedded TikTok videos with responsive player layout',
      'Brand partnership showcase (AirAsia, Malaysia Airlines, Insta360)',
      'Audience statistics and reach metrics display',
      'Firebase Hosting with CDN for fast global delivery',
      'Responsive design optimised for mobile sharing',
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
    status: 'Live',
    year: '2024',
    cardImage:
      '/app_screenshot/creator_porfolio/Screenshot_20260403_234121.png',
    screenshots: [
      '/app_screenshot/creator_porfolio/Screenshot_20260403_234121.png',
      '/app_screenshot/creator_porfolio/Screenshot_20260403_234138.png',
      '/app_screenshot/creator_porfolio/Screenshot_20260403_234145.png',
    ],
  },
  {
    title: 'Law Firm Website',
    type: 'Web · Freelance Project',
    stack: 'React · Vite · Firebase',
    num: '03',
    description:
      'Professional website and article management portal for Messrs. Farid Rahim, Advocates & Solicitors — public site covering 4 practice areas with an internal admin portal for managing legal articles.',
    link: '',
    slug: 'law-firm-website',
    longDescription:
      "A two-part web project for a Malaysian law firm: a public-facing professional website and a private admin portal for managing legal content. The public site presents the firm's four practice areas, attorney profiles, and contact information in a clean, trustworthy design. The admin portal is a private CMS allowing the legal team to create, edit, and delete articles and news updates without touching code — all stored and served via Firebase Realtime Database.",
    features: [
      'Four practice area landing pages (Corporate, Civil, Criminal, Family)',
      'Attorney profiles and firm overview pages',
      'Internal admin portal for article management (create, edit, delete)',
      'Firebase Realtime Database for content storage and retrieval',
      'Firebase Hosting with role-based access for admin portal',
      'SEO-friendly routing and metadata',
    ],
    techStack: ['React', 'Vite', 'Firebase', 'Firebase Realtime Database'],
    status: 'Live',
    year: '2023',
    cardImage: '/app_screenshot/law_firm/law_firm_card.png',
    screenshots: [],
  },
];

export const contact = {
  email: 'mfahmitj13.iu@gmail.com',
  whatsapp: {
    display: '+60 13-596 6001',
    link: 'https://wa.me/60135966001',
  },
  linkedin: {
    display: 'linkedin.com/in/mfahmitj13',
    link: 'https://www.linkedin.com/in/mfahmitj13/',
  },
};
