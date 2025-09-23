import React from "react";
import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNextjsLine,
  RiBootstrapLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { SiAxios, SiMui, SiFormik } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import {
  NavigationSection,
  SocialLink,
  SkillItem,
  Project,
  WorkExperience,
  VolunteeringExperience,
} from "./types";

// Navigation Data
export const navigationSections: NavigationSection[] = [
  { id: "0", title: "About" },
  { id: "1", title: "Skills" },
  { id: "2", title: "Projects" },
  { id: "3", title: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/youseif-elshreif",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/youseif-elshreif",
  },
  {
    id: "resume",
    title: "Resume",
    url: "https://drive.google.com/file/d/1mwpJ4zK8dWzE9NUINdywFCnYOA7Xo4tz/view?usp=sharing",
  },
];

// Skills Data
export const skillsItems: SkillItem[] = [
  { icon: <RiHtml5Line size={30} />, label: "HTML" },
  { icon: <RiCss3Line size={30} />, label: "CSS" },
  { icon: <RiJavascriptLine size={30} />, label: "JS" },
  { icon: <TbBrandTypescript size={30} />, label: "TS" },
  { icon: <RiReactjsLine size={30} />, label: "React" },
  { icon: <RiNextjsLine size={30} />, label: "Next" },
  { icon: <FaGitAlt size={30} />, label: "Git" },
  { icon: <RiBootstrapLine size={30} />, label: "Bootstrap" },
  { icon: <RiTailwindCssLine size={30} />, label: "Tailwind" },
  { icon: <SiMui size={30} />, label: "MUI" },
  { icon: <SiAxios size={30} />, label: "Axios" },
  { icon: <SiFormik size={30} />, label: "Formik" },
];

// Projects Data
export const projectsItems: Project[] = [
  {
    id: 1,
    image: "/img/projects/yaqen/cover.png",
    imgs: [
      "/img/projects/yaqen/1.png",
      "/img/projects/yaqen/2.png",
      "/img/projects/yaqen/3.png",
      "/img/projects/yaqen/4.png",
      "/img/projects/yaqen/5.png",
    ],
    title: "Yaqen Academy",
    shortDescription:
      "Islamic platform for Quran memorization with certified teachers and flexible online learning",
    descriptionHeading:
      "YaqeenAcademy website is a sophisticated educational technology platform built with cutting-edge web technologies to deliver seamless Islamic learning experiences. Our platform combines modern web development with user-centric design to create an intuitive and powerful educational ecosystem.",
    description: [
      "Responsive design optimized for all devices (desktop, tablet, mobile)",
      "Multi-role authentication system (students, teachers, administrators)",
      "Interactive student dashboard with progress tracking and course management",
      "Comprehensive teacher portal with class scheduling and student management tools",
      "Advanced admin panel with user management, analytics, and system controls",
      "Advanced search and filtering for courses and content",
      "Interactive calendar system for class scheduling and events",
      "Detailed reporting and analytics dashboard",
      "Contact management system with social media integration",
    ],
    techs: ["Next", "TS", "Axios"],
    liveDemoUrl: "https://youseif-elshreif.github.io/YaqeinAcademy/",
    freelance: true,
  },
  {
    id: 2,
    image: "/img/projects/saif/cover.png",
    imgs: [
      "/img/projects/saif/1.png",
      "/img/projects/saif/2.png",
      "/img/projects/saif/3.png",
      "/img/projects/saif/4.png",
      "/img/projects/saif/5.png",
      "/img/projects/saif/6.png",
    ],
    title: "Social media specialist's Portfolio",
    shortDescription: "A Professional portfolio to represent online presence",
    descriptionHeading:
      "A professional portfolio designed to showcase work, simplify client communication, and deliver projects in a more organized, appealing, and professional way — helping stand out and attract new opportunities.",
    description: [
      "Showcase of the client's unique skills and expertise",
      "Clear presentation of services offered with real examples",
      "Modern, responsive design for a seamless browsing experience",
    ],
    techs: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/youseif-elshreif/saifPortfolio-",
    liveDemoUrl: "https://abdulrahmansaif.me/",
    freelance: true,
  },
  {
    id: 6,
    image: "/img/projects/iskan/cover.png",
    imgs: [
      "/img/projects/iskan/cover.png",
      "/img/projects/iskan/1.png",
      "/img/projects/iskan/2.png",
      "/img/projects/iskan/3.png",
      "/img/projects/iskan/4.png",
      "/img/projects/iskan/5.png",
      "/img/projects/iskan/6.png",
      "/img/projects/iskan/7.png",
    ],
    title: "Iskan",
    shortDescription:
      "Smart platform for renting apartments tailored to university students",
    descriptionHeading:
      "A modern real estate platform designed for students to easily find and book apartments",
    description: [
      "Browse apartments with detailed descriptions, prices, and image galleries",
      "Filter apartments by area, nearest university, size, price range, and availability",
      "Book appointments online to schedule apartment visits easily",
      "Send messages and inquiries directly to the admin from the platform",
      "Admin panel to add, edit, and remove apartment listings with full control",
      "Admin can set available viewing times and manage all appointments",
      "Admin receives and responds to student messages from the dashboard",
      "User-friendly and responsive design for smooth browsing on any device",
    ],
    techs: ["Next.js", "Tailwind", "JSON server"],
    githubUrl: "https://github.com/youseif-elshreif/Iskan",
    liveDemoUrl: "https://isskan.netlify.app/",
  },
  {
    id: 5,
    image: "/img/projects/todo/cover.png",
    imgs: [
      "/img/projects/todo/cover.png",
      "/img/projects/todo/1.png",
      "/img/projects/todo/2.png",
      "/img/projects/todo/3.png",
      "/img/projects/todo/4.png",
    ],
    title: "Todo App",
    shortDescription:
      "Advanced task management with categories, priorities, and deadlines",
    descriptionHeading:
      "A powerful and intuitive todo application designed to help you organize, prioritize, and track your tasks effortlessly for maximum productivity.",
    description: [
      "Create your own account and manage tasks securely",
      "Add, edit, and delete tasks with a simple interface",
      "Set importance levels and due dates for better planning",
      "Filter and sort tasks by priority, time, or completion status",
      "Mark tasks as complete to track your progress",
      "Clean, responsive design for a smooth experience on any device",
    ],
    techs: ["React", "Tailwind", "Formik", "Yup", "JSON server"],
    githubUrl: "https://github.com/youseif-elshreif/ReactToDoList",
    liveDemoUrl: "https://todoappiti.netlify.app/",
  },
  {
    id: 3,
    image: "/img/projects/friendloop/cover.png",
    imgs: [
      "/img/projects/friendloop/cover.png",
      "/img/projects/friendloop/1.png",
      "/img/projects/friendloop/2.png",
    ],
    title: "FriendLoop",
    shortDescription:
      "Simple social media platform to share posts and connect with friends",
    descriptionHeading:
      "A learning project to practice React, authentication, and basic CRUD features like posts and comments.",
    description: [
      "Create personal accounts and connect with others easily",
      "Share your thoughts and ideas through posts",
      "Edit or delete your posts anytime with full control",
      "Simple and clean interface for a smooth user experience",
    ],
    techs: ["React", "MUI", "Axios"],
    githubUrl: "https://github.com/youseif-elshreif/Frendloop",
    liveDemoUrl: "https://youseif-elshreif.github.io/Frendloop/",
  },
];

// Work Experience Data
export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "VIP Representative",
    company: "Life Makers Foundation",
    location: "Ismailia, Egypt",
    period: "Jun 2023 – Feb 2024",
    type: "Full-time",
    description:
      "Contributed to fundraising campaigns totaling 480K EGP. Maintained relationships with key donors and public figures.",
    technologies: [], // Optional - can add skills used if needed
  },
];

// Volunteering Experience Data
export const volunteeringExperience: VolunteeringExperience[] = [
  {
    id: 1,
    title: "Grants & Partnerships Officer",
    organization: "Life Makers Foundation",
    location: "Ismailia, Egypt",
    period: "Apr 2023 – Apr 2024",
    description:
      "Led a 30-member team to manage and grow external partnerships. Secured 9 partnerships through proposal writing and donor coordination.",
    impact: "Secured 9 partnerships and led 30-member team",
  },
  {
    id: 2,
    title: "VIP Official Al-Waad Al-Masoul Campaign",
    organization: "Life Makers Foundation",
    location: "Ismailia, Egypt",
    period: "Feb 2023 – Apr 2023",
    description:
      "Managed a 20-member VIP team during a national donation campaign. Achieved 179% of the fundraising target, raising 295K EGP.",
    impact: "Achieved 179% of target, raised 295K EGP",
  },
];
