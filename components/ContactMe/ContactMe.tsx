"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineFileText } from "react-icons/ai";
import ContactForm from "./ContactForm";

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
      icon: <FaFacebookF size={16} />,
      href: "https://facebook.com/yourprofile",
      transform: "translate(15px, 50px)",
    },
  ];

  const contactInfo = [
    {
      icon: <SiGmail className="text-2xl text-[var(--text-muted)]" />,
      title: "Email",
      value: "youseifelshreif3@gmail.com",
      href: "mailto:youseifelshreif3@gmail.com",
    },
    {
      icon: <FaWhatsapp className="text-2xl text-[var(--text-muted)]" />,
      title: "WhatsApp",
      value: "+20 127 790 6691",
      href: "https://wa.me/201277906691",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[var(--text-muted)]" />,
      title: "Location",
      value: "Ismailia, Egypt",
      href: "#",
    },
  ];

  return (
    <>
      {/* Contact Section */}
      <div className="w-full overflow-hidden flex flex-col lg:flex-row items-start justify-between gap-8 p-4">
        {/* Contact Info */}
        <div className="flex-1 space-y-6 w-full">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--text-secondary)]">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: "var(--nav-bg)",
                    boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
                  }}
                >
                  <div className="flex-shrink-0 ">{info.icon}</div>
                  <div>
                    <h4 className="text-sm text-[var(--text-muted)] mb-1">
                      {info.title}
                    </h4>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-[var(--text-secondary)] hover:text-[var(--text-hover)] transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[var(--text-secondary)]">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="flex gap-3 flex-wrap">
              {contacts.slice(0, 5).map((contact, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(contact.href)}
                  className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:border-white/20 hover:scale-110 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--nav-bg)",
                    boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
                  }}
                  aria-label={`Social link ${index}`}
                >
                  {contact.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 w-full lg:max-w-2xl">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[var(--text-secondary)]">
            Send Me a Message
          </h3>
          <ContactForm />
        </div>
      </div>

      {/* Mobile Floating Contact Button */}
      <div className="fixed bottom-12 left-6 z-10 lg:hidden" ref={wrapperRef}>
        {/* Main Circle Button */}
        <button
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-[var(--text-secondary)] shadow-lg hover:scale-110 transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Contact Me"
          style={{
            backgroundColor: "var(--nav-bg)",
            borderColor: "var(--nav-border)",
            boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
          }}
        >
          <SiGmail size={18} />
        </button>

        {/* Radial Icons */}
        <div className="relative top-[-50px] left-[10px]">
          {contacts.map((item, i) => (
            <button
              key={i}
              onClick={() => handleLinkClick(item.href)}
              className={`absolute z-[-1] w-10 h-10 rounded-full border text-[var(--text-secondary)] flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 ${
                isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{
                backgroundColor: "var(--nav-bg)",
                borderColor: "var(--nav-border)",
                boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
                transform: isOpen
                  ? `${item.transform} scale(1)`
                  : "translate(0, 0) scale(0)",
                transitionDelay: `${i * 80}ms`,
              }}
              aria-label={`Contact icon ${i}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "hsla(0, 0%, 100%, 0.15)";
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
    </>
  );
};

export default ContactMe;
