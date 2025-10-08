"use client";

import Image from "next/image";
import Pic from "../../../public/img/me/me.jpg";
import styles from "./hero.module.css";
import { useNav } from "../../context/NavContext";

function Hero() {
  const { scrollToSection } = useNav();

  return (
    <div className="w-full overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between gap-[1em]">
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
      <div className="py-[10px] text-center md:text-left space-y-6 max-w-2xl">
        {/* Greeting */}
        <div className="space-y-2">
          <p className="text-[var(--text-muted)] text-base md:text-lg font-medium tracking-wide animate-fade-in">
            Hello, I&apos;m
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-secondary)] leading-tight">
            <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-0">
              <span className="block">Youseif Elshreif</span>
            </div>

            {/* Availability Badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
              <div className="h-[20px]">
                <span
                  className="relative md:top-[-25px] inline-flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full text-[var(--text-secondary)] text-sm font-semibold"
                  style={{
                    backgroundColor: "var(--nav-bg)",
                    boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.15) inset",
                  }}
                >
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  Available for Freelance
                </span>
              </div>
              <div className="h-[50px]">
                <span
                  className="relative top-3 md:top-[-25px] inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-[var(--text-primary)] text-sm font-semibold hover:border-white/30 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--nav-bg)",
                    boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
                  }}
                >
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                  Open to Work
                </span>
              </div>
            </div>
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
          {["Next.js", "React.js", "TypeScript"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--nav-bg)] border border-[var(--nav-border)] rounded-full text-[var(--text-primary)] text-xs sm:text-sm font-medium hover:border-[var(--text-hover)] hover:bg-[var(--bg-secondary)] transition-all duration-300 hover:scale-105 cursor-default"
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
            className="px-6 cursor-pointer sm:px-8 py-3 sm:py-4 border-2 border-[var(--nav-border)] rounded-lg font-semibold text-[var(--text-secondary)] hover:border-[var(--text-hover)] hover:bg-[var(--nav-bg)] transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            onClick={() => scrollToSection("3")}
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
