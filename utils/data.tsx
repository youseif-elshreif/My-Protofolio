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
import { SiAxios, SiMui } from "react-icons/si";
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
    url: "#",
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
  { icon: <RiBootstrapLine size={30} />, label: "Bootstrap" },
  { icon: <RiTailwindCssLine size={30} />, label: "Tailwind" },
  { icon: <SiMui size={30} />, label: "MUI" },
  { icon: <SiAxios size={30} />, label: "Axios" },
  { icon: <FaGitAlt size={30} />, label: "Git" },
];

// Projects Data
export const projectsItems: Project[] = [
  {
    id: 1,
    image: "/img/projects/yaqen.png",
    title: "Yaqen Academy",
    description: "Educational platform project",
    techs: ["Next", "TS", "Axios"],
    liveDemoUrl: "https://youseif-elshreif.github.io/YaqeinAcademy/",
    freelance: true,
  },
  {
    id: 2,
    image: "/img/projects/friendloop.png",
    title: "FriendLoop",
    description: "Social media platform project",
    techs: ["React", "MUI", "Axios"],
    githubUrl: "https://github.com/youseif-elshreif/Frendloop",
    liveDemoUrl: "https://youseif-elshreif.github.io/Frendloop/",
  },
  {
    id: 3,
    image: "/img/projects/saif.png",
    title: "Social media specialist's Portfolio",
    description: "Personal portfolio project",
    techs: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/youseif-elshreif/saifPortfolio-",
    liveDemoUrl: "https://abdulrahmansaif.me/",
    freelance: true,
  },
  {
    id: 4,
    image: "/img/projects/technostore.png",
    title: "Technostore",
    description: "E-commerce platform project",
    techs: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/youseif-elshreif/technostore",
    liveDemoUrl: "https://youseif-elshreif.github.io/technostore/",
  },
  {
    id: 5,
    image: "/img/projects/todo.png",
    title: "Todo App",
    description: "A simple todo application",
    techs: ["React", "Tailwind", "Formik", "Yup", "JSON server"],
    githubUrl: "https://github.com/youseif-elshreif/ReactToDoList",
    liveDemoUrl: "https://todoappiti.netlify.app/",
  },
  {
    id: 6,
    image: "/img/projects/iskan.png",
    title: "Iskan",
    description: "A real estate platform",
    techs: ["Next", "Tailwind", "JSON server"],
    githubUrl: "https://github.com/youseif-elshreif/Iskan",
    liveDemoUrl: "https://isskan.netlify.app/",
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
