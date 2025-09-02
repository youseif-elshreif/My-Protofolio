"use client";
import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import ContactForm from "./ContactForm";

const ContactMe: React.FC = () => {
  const handleLinkClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const contacts = [
    {
      icon: <FaLinkedinIn size={16} />,
      href: "https://linkedin.com/in/youseif-elshreif",
    },
    {
      icon: <FaGithub size={16} />,
      href: "https://github.com/youseif-elshreif",
    },
    {
      icon: <AiOutlineFileText size={16} />,
      href: "https://drive.google.com/file/d/1mwpJ4zK8dWzE9NUINdywFCnYOA7Xo4tz/view?usp=sharing",
    },
    {
      icon: <FaFacebookF size={16} />,
      href: "https://www.facebook.com/youseif.elshreif",
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-[var(--text-muted)]" />,
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
                    <p className="text-[var(--text-secondary)]">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <div className="flex gap-3 flex-wrap">
            {contacts.map((contact, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(contact.href)}
                className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
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
  );
};

export default ContactMe;
