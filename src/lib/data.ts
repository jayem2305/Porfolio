export const profile = {
  name: "Jhon Mark Enrique",
  title: "Full-Stack Developer",
  tagline:
    "I build practical, end-to-end systems — from corporate management platforms to community services and e-commerce — turning real-world processes into working software.",
  location: "Philippines",
  email: "enriquejhonmarka@gmail.com",
  phone: "0999 872 6506",
  phoneHref: "+639998726506",
  github: "https://github.com/jayem2305",
  linkedin: "https://www.linkedin.com/in/jhon-mark-enrique-4104a9308",
};

export const skills = {
  main: ["Laravel", "Vue", "Xano", "Python", "MySQL", "Stripe", "Bootstrap"],
  familiar: ["Figma", "Flutter", "React", "Next.js", "Drupal"],
};

export type Project = {
  name: string;
  category: "Work" | "Personal" | "Academic" | "Mobile";
  role: string;
  timeline: string;
  description: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: "Corporate Secretarial Management System",
    category: "Work",
    role: "Full-Stack Developer & Team Lead",
    timeline: "July 2025 – Present",
    description:
      "A corporate secretarial platform (CSP) that lets client-side users manage their entities and service requests in one place.",
    highlights: [
      "Users upload and manage their entities",
      "Create and track requests and job records",
      "Maintain people (officers/stakeholders) records",
      "Apply for services with subscription-based access",
    ],
  },
  {
    name: "VerifyID",
    category: "Work",
    role: "Project Manager & Full-Stack Developer",
    timeline:
      "1 year 8 months — 6 months building core features, remainder in debugging, enhancements & monitoring",
    description:
      "Undergraduate thesis and a 1 year 8 month contractual project: a barangay management system with identity verification through ID and face-scan comparison.",
    highlights: [
      "Self-verification via ID and face scan matching",
      "Residents request official documents online",
      "Announcements board for barangay updates",
      "In-app chat with barangay officials for help and guidance",
    ],
  },
  {
    name: "IggyWorks",
    category: "Personal",
    role: "Lead Developer & UI/UX Designer",
    timeline: "3 months",
    description:
      "An online motor shop platform connecting shop owners with customers for parts and services.",
    highlights: [
      "Shop owners market products and advertise services",
      "Customers purchase parts directly from shops",
      "Service booking built into the platform",
    ],
  },
  {
    name: "Dr. Pepe Library",
    category: "Academic",
    role: "Full-Stack Developer",
    timeline: "1 month",
    description:
      "An online library and book management system built as a project-based learning requirement in college.",
    highlights: [
      "Browse and search a digital book catalog",
      "Read books online via an in-app PDF viewer",
    ],
  },
  {
    name: "VerifyID Mobile",
    category: "Mobile",
    role: "Full-Stack Developer",
    timeline: "3 months",
    description:
      "The companion mobile app for VerifyID, giving residents access on the go.",
    highlights: [
      "View barangay announcements from mobile",
      "Track the status of requested documents",
    ],
  },
  {
    name: "Jrizz Task Management",
    category: "Mobile",
    role: "Lead Developer",
    timeline: "2 months",
    description:
      "A mobile task manager focused on keeping deadlines visible and on time.",
    highlights: [
      "Set date and time for tasks",
      "Due-date reminder notifications",
    ],
  },
  {
    name: "Wings 88",
    category: "Academic",
    role: "Lead Developer & QA",
    timeline: "1 month",
    description:
      "A user-friendly online ordering platform for Wings 88, built as a project-based learning requirement in college.",
    highlights: [
      "Browse the menu and place orders online",
      "Track delivery status in real time",
      "Cash on Delivery (COD) as the sole payment method for simple, secure transactions",
    ],
  },
  {
    name: "POS Rentals System — Sunlink Co.",
    category: "Academic",
    role: "Full-Stack Developer",
    timeline: "2 months",
    description:
      "A point-of-sale rental management system built exclusively for Sunlink Co. as a project-based learning requirement in senior high school.",
    highlights: [
      "Authorized employees monitor equipment check-ins and check-outs",
      "Tracks rental transactions and equipment availability",
      "Generates detailed invoices for clients",
    ],
  },
  {
    name: "Barangay Pio del Pilar & FS Belinario Landing Pages",
    category: "Work",
    role: "UI/UX Designer (Internship)",
    timeline: "1 month",
    description:
      "Designed and built public-facing landing pages for Barangay Pio del Pilar and Barangay FS Belinario using Drupal, during a UI/UX internship.",
    highlights: [
      "Built with Drupal CMS",
      "Clean, accessible public-facing design for two barangay clients",
      "Delivered during a UI/UX internship",
    ],
  },
  {
    name: "Archiving System",
    category: "Work",
    role: "Lead Developer (Internship)",
    timeline: "2 months",
    description:
      "A document and records archiving system built during the same internship, helping the organization store, organize, and retrieve records efficiently.",
    highlights: [
      "Centralized storage for organizational documents and records",
      "Organized retrieval and search of archived files",
      "Built as lead developer during a 2-month internship engagement",
    ],
  },
];

export type Coursework = {
  name: string;
  topic: string;
  role: string;
  timeline: string;
  description: string;
  highlights?: string[];
};

export const coursework: Coursework[] = [
  {
    name: "Optimal Page Replacement Algorithm",
    topic: "Memory Management",
    role: "Full-Stack Developer",
    timeline: "1 month",
    description:
      "A simulation of the Optimal Page Replacement Algorithm, designed to minimize page faults in memory management systems. Built for educational and research purposes in computer science.",
  },
  {
    name: "Shortest Job First",
    topic: "CPU Scheduling",
    role: "Full-Stack Developer",
    timeline: "1 month",
    description:
      "An implementation of the Shortest Job First scheduling algorithm, prioritizing processes with the shortest execution time. Visualizes process scheduling to reinforce operating system concepts.",
  },
  {
    name: "YOLOv8 Face Detection",
    topic: "Computer Vision",
    role: "Researcher & Full-Stack Developer",
    timeline: "6 months",
    description:
      "Applied YOLOv8 for real-time face detection — scanning facial landmarks, measuring facial ratios, camera-to-subject distance, and facial symmetry.",
    highlights: [
      "Detects faces and facial landmarks in real time",
      "Measures facial ratios and symmetry",
      "Calculates camera-to-subject distance",
    ],
  },
  {
    name: "CNN Face Comparison",
    topic: "Face Recognition",
    role: "Researcher & Full-Stack Developer",
    timeline: "6 months",
    description:
      "Built a CNN-based face comparison pipeline to compute a similarity index between faces, tuning detection thresholds and sizing for accurate matching.",
    highlights: [
      "Computes a similarity index between face pairs",
      "Tunes detection thresholds for accuracy",
      "Calibrates face sizing for consistent comparison",
    ],
  },
];
