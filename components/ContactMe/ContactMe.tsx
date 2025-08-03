"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineFileText } from "react-icons/ai";

const ContactMe: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const contacts = [
    {
      icon: <FaLinkedinIn size={16} />,
      href: "https://linkedin.com/in/youseif-elshreif",
      transform: "translate(-5px, -50px)",
    },
    {
      icon: <FaGithub size={16} />,
      href: "https://github.com/youseif-elshreif",
      transform: "translate(25px, -45px)",
    },
    {
      icon: <AiOutlineFileText size={16} />,
      href: "https://drive.google.com/file/d/16zc9FQyuvGrPndwAgtjDS0N2npFmk-e7/view?usp=sharing",
      transform: "translate(50px, -25px)",
    },
    {
      icon: <SiGmail size={16} />,
      transform: "translate(55px, 5px)",
      href: "mailto:youseifelshreif3@gmail.com",
    },
    {
      icon: <FaWhatsapp size={16} />,
      href: "https://wa.me/201277906691",
      transform: "translate(40px, 35px)",
    },
    {
      icon: <FaFacebookF size={16} />,
      href: "https://facebook.com/yourprofile",
      transform: "translate(15px, 50px)",
    },
  ];

  return (
    <div className="fixed bottom-12 left-6 z-10 lg:hidden" ref={wrapperRef}>
      {/* Main Circle Button */}
      <button
        className="w-14 h-14 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300"
        onClick={toggleMenu}
        aria-label="Contact Me"
        style={{
          backgroundColor: "var(--nav-bg)",
          borderColor: "var(--nav-border)",
          color: "var(--text-secondary)",
          boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
        }}
      >
        <FaEnvelope size={18} />
      </button>

      {/* Radial Icons */}
      <div className="relative top-[-50px] left-[10px]">
        {contacts.map((item, i) => (
          <button
            key={i}
            onClick={() => handleLinkClick(item.href)}
            className={`absolute z-[-1] w-10 h-10 rounded-full backdrop-blur border text-white flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 ${
              isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              backgroundColor: "var(--nav-bg)",
              borderColor: "var(--nav-border)",
              color: "var(--text-secondary)",
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
              transform: isOpen
                ? `${item.transform} scale(1)`
                : "translate(0, 0) scale(0)",
              transitionDelay: `${i * 80}ms`,
            }}
            aria-label={`Contact icon ${i}`}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "hsla(0, 0%, 100%, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--nav-bg)";
            }}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
