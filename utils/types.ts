import React from "react";
import { StaticImageData } from "next/image";

// Navigation Types
export interface Navigation {
  id: string;
  title: string;
  url?: string;
}

export interface NavigationSection {
  id: string;
  title: string;
}

export interface SocialLink {
  id: string;
  title: string;
  url: string;
}

// Component Props Types
export interface DesktopNavProps {
  sections: { id: string; title: string }[];
  socialLinks: { id: string; title: string; url: string }[];
}

export interface MobileNavProps {
  sections: { id: string; title: string }[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export interface NavContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sectionsRef: React.MutableRefObject<any[]>;
  scrollToSection: (sectionId: string) => void;
}

// Skills Types
export interface SkillItem {
  icon: React.ReactElement;
  label: string;
}

export interface GlassIconsItem {
  icon: React.ReactElement;
  label: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
}

// Projects Types
export interface Project {
  id: number;
  image: string | StaticImageData;
  imgs: string[]; // Array of project images for swiper
  title: string;
  shortDescription: string;
  descriptionHeading: string;
  description: string[];
  techs: string[];
  githubUrl?: string;
  liveDemoUrl: string;
  freelance?: boolean;
}

export interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
}

// Experience Types
export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  technologies?: string[];
}

export interface VolunteeringExperience {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  impact: string;
}
