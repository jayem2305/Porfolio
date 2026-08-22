export const profile = {
  name: "Jhon Mark Enrique",
  title: "Full-Stack Developer",
  tagline:
    "I build practical, end-to-end systems — from corporate management platforms to community services and e-commerce — turning real-world processes into working software.",
  location: "Philippines",
  email: "enriquejhonmarka@gmail.com",
  github: "https://github.com/jayem2305",
  linkedin: "https://www.linkedin.com/in/jhon-mark-enrique-4104a9308",
};

export const skills = {
  main: ["Laravel", "Vue", "Xano", "Python", "MySQL", "Stripe", "Bootstrap"],
  familiar: ["Figma", "Flutter", "React", "Next.js"],
};

export type Project = {
  name: string;
  category: "Work" | "Personal" | "Academic" | "Mobile";
  description: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: "Corporate Secretarial Management System",
    category: "Work",
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
    category: "Academic",
    description:
      "Thesis project: a barangay management system with identity verification through ID and face-scan comparison.",
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
    description:
      "A mobile task manager focused on keeping deadlines visible and on time.",
    highlights: [
      "Set date and time for tasks",
      "Due-date reminder notifications",
    ],
  },
];
