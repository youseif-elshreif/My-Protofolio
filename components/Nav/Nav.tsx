"use client";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import "./Nav.css";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navigationSections, socialLinks } from "../../utils/data";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // باقي الكود هيجي هنا لاحقاً لما نضيف scroll detection

  return (
    <header className="fixed top-0 w-full mb-4 header z-50 backdrop-blur">
      <nav className="containeer flex justify-between items-center py-4">
        <h1
          className="font-inter text-2xl font-bold"
          style={{ color: "var(--text-secondary)" }}
        >
          Youseif Elshreif
        </h1>

        {/* Desktop Navigation */}
        <DesktopNav sections={navigationSections} socialLinks={socialLinks} />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>
      {/* Mobile Navigation */}
      <MobileNav
        sections={navigationSections}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
}

export default Nav;
