"use client";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { NavContextType } from "../utils/types";

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("0");
  const sectionsRef = useRef<HTMLElement[]>([]);
  const tops = useRef<number[]>([]);
  const navHeight = useRef(0);

  useEffect(() => {
    navHeight.current = document.querySelector("header")?.clientHeight || 0;

    tops.current = sectionsRef.current.map(
      (section) => section?.offsetTop || 0
    );
    if (window.innerWidth <= 768) return;
    let throttleTimer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (throttleTimer !== null) {
        return;
      }

      throttleTimer = setTimeout(() => {
        throttleTimer = null;

        const scrollPosition = window.scrollY + navHeight.current + 100; // إضافة offset للدقة

        // البحث عن القسم النشط بناءً على موقع التمرير
        for (let i = sectionsRef.current.length - 1; i >= 0; i--) {
          const section = sectionsRef.current[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(i.toString());
            break;
          }
        }
      }, 10); // throttle كل 10ms
    };

    // إضافة مستمع للتمرير
    window.addEventListener("scroll", handleScroll, { passive: true });

    // استدعاء الدالة مرة واحدة لتحديد القسم النشط عند التحميل
    handleScroll();

    // تنظيف المستمع عند إلغاء التحميل
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimer) {
        clearTimeout(throttleTimer);
      }
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = sectionsRef.current[parseInt(sectionId)];

    if (section) {
      const top = section.offsetTop;
      // تحديث القسم النشط فوراً

      window.scrollTo({
        top: top - navHeight.current,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <NavContext.Provider
      value={{
        activeSection,
        setActiveSection,
        sectionsRef,
        scrollToSection,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
}
