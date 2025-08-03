"use client";

import Image from "next/image";
import Pic from "../../public/Lumii_20250624_142647142.jpg";
import styles from "./hero.module.css";
import { useNav } from "../../context/NavContext";
function Hero() {
  const { scrollToSection } = useNav();
  return (
    <div className="px-[10px] w-full flex flex-col-reverse md:flex-row items-center justify-between gap-[1em] h-auto lg:h-auto">
      <div className={`${styles.imgContainer} flex-shrink-0`}>
        <Image
          src={Pic}
          alt="Youseif's Img"
          width={450}
          height={450}
          priority
          className="rounded-[20px] object-cover"
        />
      </div>
      <div className="py-[10px] text-center md:text-left space-y-6  max-w-2xl">
        {/* Greeting */}
        <div className="space-y-2">
          <p className="text-[var(--text-muted)] text-base md:text-lg font-medium tracking-wide animate-fade-in">
            Hello, I&apos;m
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-secondary)] leading-tight">
            <span className="block">Youseif Elshreif</span>
            <span className="block text-[var(--text-muted)] mt-2 font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Frontend Developer
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-[var(--text-primary)] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
          I love coding, learning, building real things that work, exploring new
          tech, and coffee.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
          {["React.js", "Next.js", "TypeScript"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--nav-bg)] border border-[var(--nav-border)] rounded-full text-[var(--text-primary)] text-xs sm:text-sm font-medium backdrop-blur-sm hover:border-[var(--text-hover)] hover:bg-[var(--bg-secondary)] transition-all duration-300 hover:scale-105 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <button
            onClick={() => scrollToSection("2")}
            className="px-6 cursor-pointer sm:px-8 py-3 sm:py-4 bg-[var(--text-secondary)] text-[var(--bg-primary)] rounded-lg font-semibold hover:bg-[var(--text-hover)] transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("1")}
            className="px-6 cursor-pointer sm:px-8 py-3 sm:py-4 border-2 border-[var(--nav-border)] rounded-lg font-semibold text-[var(--text-secondary)] hover:border-[var(--text-hover)] hover:bg-[var(--nav-bg)] transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            My Skills
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
