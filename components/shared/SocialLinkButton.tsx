"use client";
import React from "react";

interface SocialLinkButtonProps {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
  size?: "sm" | "md" | "lg";
}

const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({
  icon,
  href,
  ariaLabel,
  size = "md",
}) => {
  const handleClick = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14",
  };

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} rounded-lg border border-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer`}
      style={{
        backgroundColor: "var(--nav-bg)",
        boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
      }}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default SocialLinkButton;
