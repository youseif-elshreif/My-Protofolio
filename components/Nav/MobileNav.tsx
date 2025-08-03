import { useEffect, useState, useRef } from "react";
import "./Nav.css";
import { useNav } from "../../context/NavContext";
import { MobileNavProps } from "../../utils/types";

function MobileNav({ sections, isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  const { scrollToSection } = useNav();
  const [isClosing, setIsClosing] = useState(false);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const menuRef = useRef<HTMLUListElement>(null);

  // Function to handle smooth menu closing
  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleMenuClose();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "none";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu */}
      {(isMenuOpen || isClosing) && (
        <div
          className={`mobNav lg:hidden absolute top-45px left-0 w-full z-100  shadow-2xl h-[calc(100vh-65px)] fixed overflow-y-auto ${
            isClosing ? "closing" : ""
          }`}
          style={{
            backgroundColor: "var(--sec-bg)",
          }}
        >
          <div className="containeer py-8 space-y-8">
            {/* Sections */}
            <div className="space-y-4">
              <div className="flex justify-center border rounded-4xl overflow-hidden">
                <ul
                  ref={menuRef}
                  className="sections flex gap-1 sm:gap-2 text-xs sm:text-sm font-ibm-plex backdrop-blur-md border rounded-4xl px-2 sm:px-4 py-2 shadow-lg relative w-full max-w-full overflow-x-auto nav-scrollbar"
                  style={{
                    backgroundColor: "var(--nav-bg)",
                    borderColor: "var(--nav-border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {sections.map((section, index) => (
                    <li key={section.id} className="relative z-10">
                      <button
                        ref={(el) => {
                          buttonRefs.current[index] = el;
                        }}
                        onClick={() => {
                          scrollToSection(section.id);
                          handleMenuClose();
                        }}
                        className="px-2 sm:px-4 py-2 transition-colors duration-200 whitespace-nowrap text-xs sm:text-sm bg-transparent border-none cursor-pointer"
                        style={{ color: "var(--text-secondary)" }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.color =
                            "var(--text-hover)";
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNav;
