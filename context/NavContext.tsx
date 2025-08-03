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
  const ticking = useRef(false);
  const navHeight = useRef(0);

  // إعادة حساب المواقع عند تغيير حجم الشاشة أو المحتوى
  const calculateTops = useCallback(() => {
    navHeight.current = document.querySelector("header")?.clientHeight || 0;

    tops.current = sectionsRef.current.map((section) =>
      section ? section.offsetTop : 0
    );
  }, []);

  useEffect(() => {
    calculateTops();

    // إضافة listener لإعادة الحساب عند تغيير حجم الشاشة
    const handleResize = () => {
      calculateTops();
    };

    window.addEventListener("resize", handleResize);

    // إعادة حساب المواقع بعد تحميل الصور أو تغيير المحتوى
    const handleLoad = () => {
      calculateTops();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, [calculateTops]);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const viewportCenter = scrollY + viewportHeight / 2;

      let closestIndex = 0;
      let minDiff = Infinity;

      // التأكد من وجود sections
      if (tops.current.length === 0) {
        ticking.current = false;
        return;
      }

      // استخدام منتصف الشاشة لتحديد القسم النشط
      tops.current.forEach((top, index) => {
        if (top === 0 && index > 0) return; // تجاهل العناصر غير الموجودة

        const diff = Math.abs(viewportCenter - top);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = index;
        }
      });

      setActiveSection((prev) =>
        prev !== String(closestIndex) ? String(closestIndex) : prev
      );

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateActiveSection);
        ticking.current = true;
      }
    };

    // التأكد من وجود sections قبل البدء
    if (sectionsRef.current.length > 0) {
      updateActiveSection(); // Initial call
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const index = parseInt(sectionId);

    // التأكد من صحة الفهرس
    if (index < 0 || index >= tops.current.length) {
      console.warn(`Invalid section index: ${index}`);
      return;
    }

    const targetTop = tops.current[index];

    // التأكد من وجود الموقع
    if (targetTop === undefined) {
      console.warn(`Section at index ${index} not found`);
      return;
    }

    window.scrollTo({
      top: Math.max(0, targetTop - navHeight.current),
      behavior: "smooth",
    });
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
