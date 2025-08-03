import { useState, useRef, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNav } from "../../context/NavContext";
import { DesktopNavProps } from "../../utils/types";

export default function DesktopNav({ sections, socialLinks }: DesktopNavProps) {
  const { activeSection, scrollToSection } = useNav();
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = sections.findIndex((s) => s.id === activeSection);
    const activeButton = buttonRefs.current[activeIndex];

    if (activeButton) {
      const parentRect =
        activeButton.parentElement?.parentElement?.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      if (parentRect) {
        setIndicatorStyle({
          width: buttonRect.width,
          left: buttonRect.left - parentRect.left,
        });
      }
    }
  }, [activeSection, sections]);

  return (
    <>
      <ul
        className="sections hidden lg:flex gap-2 text-sm font-ibm-plex backdrop-blur-md border rounded-4xl px-4 py-2 shadow-lg relative"
        style={{
          backgroundColor: "var(--nav-bg)",
          borderColor: "var(--nav-border)",
          color: "var(--text-secondary)",
        }}
      >
        {/* Sliding Background */}
        <div
          className="indicator absolute top-1/2 translate-x-0 -translate-y-1/2 h-8 backdrop-blur-sm rounded-full transition-all duration-300 ease-out shadow-md"
          style={{
            backgroundColor: "var(--nav-indicator)",
            width: `${indicatorStyle.width}px`,
            transform: `translateX(${indicatorStyle.left - 15}px)`,
          }}
        />

        {sections.map((section, index) => (
          <li key={section.id} className="relative z-10">
            <button
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              onClick={() => scrollToSection(section.id)}
              className="px-4 py-2 transition-colors duration-200 whitespace-nowrap bg-transparent border-none cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-hover)";
              }}
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "var(--text-secondary)")
              }
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
      {/* Desktop Social Links */}
      <ul
        className="hidden lg:flex gap-4 text-sm font-ibm-plex"
        style={{ color: "var(--text-secondary)" }}
      >
        {socialLinks.map((link) => (
          <li
            key={link.id}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-hover)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-secondary)")
            }
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "var(--text-secondary)")
              }
            >
              {link.title} <FaExternalLinkAlt className="text-xs" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
