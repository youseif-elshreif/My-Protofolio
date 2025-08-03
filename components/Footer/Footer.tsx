"use client";
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Footer() {
  const social = [
    {
      icon: FaLinkedin,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    { icon: FaGithub, url: "https://github.com", label: "GitHub" },
    {
      icon: FaFacebook,
      url: "https://facebook.com",
      label: "Facebook",
    },
  ];
  return (
    <footer
      className="border-t py-16 px-4"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--mobile-border)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3
              className="text-lg font-ibm-plex font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              About
            </h3>
            <p
              className="text-sm leading-relaxed font-ibm-plex"
              style={{ color: "var(--text-muted)" }}
            >
              I love coding, learning, building real things that work, exploring
              new tech, and coffee.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3
              className="text-lg font-ibm-plex font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-sm font-ibm-plex transition-colors duration-200 transform"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                <FaEnvelope className="text-xs" />
                <span>your.email@example.com</span>
              </a>
              <span>
                <a
                  href="tel:+201277906691"
                  className="flex items-center gap-3 text-sm font-ibm-plex transition-colors duration-200  transform"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--text-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  <FiPhone />
                  <span>+201277906691</span>
                </a>
              </span>

              <p
                className="text-sm font-ibm-plex"
                style={{ color: "var(--text-muted)" }}
              >
                Available for freelance projects and collaborations
              </p>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3
              className="text-lg font-ibm-plex font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              Connect
            </h3>
            <div className="flex gap-4">
              {social.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{
                    borderColor: "var(--nav-border)",
                    backgroundColor: "var(--nav-bg)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor =
                      "var(--nav-indicator)";
                    (e.target as HTMLElement).style.color =
                      "var(--text-secondary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor =
                      "var(--nav-bg)";
                    (e.target as HTMLElement).style.color = "var(--text-muted)";
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="mt-12 pt-8 border-t text-center"
          style={{ borderColor: "var(--mobile-border)" }}
        >
          <p
            className="text-sm font-ibm-plex"
            style={{ color: "var(--text-muted)" }}
          >
            © 2025 Youseif Elshreif. All rights reserved.
          </p>
          <p
            className="text-xs mt-2 font-ibm-plex"
            style={{ color: "var(--text-muted)" }}
          >
            Crafted with lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
