"use client";
import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCrown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Project } from "../../utils/types";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectDetailsModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsAnimating(false);
    document.body.style.overflow = "unset"; // Reset overflow immediately
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-xl border border-white/10 shadow-2xl transition-all duration-300 ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{
          backgroundColor: "var(--sec-bg)",
          border: "2px solid var(--nav-border)",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Section Header - same as other sections */}
        <div className="p-4 flex items-center justify-between rounded-t-xl bg-black relative">
          <div className="flex items-center justify-start">
            <button
              onClick={handleClose}
              className="bg-[#ff5f56] w-[10px] h-[10px] rounded-full mr-2 shadow-[0_0_5px_#ff5f56] hover:shadow-[0_0_8px_#ff5f56] hover:scale-110 transition-all duration-300 cursor-pointer"
              title="Close"
            />
            <span className="bg-[#ffbd2e] w-[10px] h-[10px] rounded-full mr-2 shadow-[0_0_5px_#ffbd2e]"></span>
            <span className="bg-[#27c93f] w-[10px] h-[10px] rounded-full mr-2 shadow-[0_0_5px_#27c93f]"></span>
          </div>
          <h2 className="text-xl lg:text-2xl font-bold tracking-[.2rem] lg:tracking-[.3rem] text-[var(--text-secondary)]">
            PROJECT DETAILS
          </h2>
        </div>

        {/* Project Images Swiper */}
        <div className="overflow-y-auto max-h-[calc(90vh-92px)] md:max-h-[calc(90vh-72px)]">
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 300000,
                disableOnInteraction: false,
              }}
              loop
              className="custom-project-swiper"
            >
              {project.imgs.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-64 md:min-h-80 max-h-96 flex items-center justify-center bg-black/20">
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="object-contain w-full h-auto max-h-full"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {project.freelance && (
              <div className="absolute top-2 right-2 z-10 flex items-center gap-1 px-2 py-1 rounded-md border border-black-500/30 shadow-md text-black text-xs font-medium bg-white/75">
                <FaCrown size={10} />
                Freelance
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Title & Short Description */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-secondary)] mb-3">
                {project.title}
              </h2>
              <p className="text-[var(--text-primary)] text-lg leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-secondary)] mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 border border-white/10 rounded-lg text-[var(--text-primary)] text-sm font-medium hover:border-white/20 transition-all duration-300"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.05) inset",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-secondary)] mb-3">
                Project Details
              </h3>
              <div className="space-y-4">
                <p className="text-[var(--text-primary)] text-lg leading-relaxed font-medium">
                  {project.descriptionHeading}
                </p>

                <h4 className="text-md font-semibold text-[var(--text-secondary)] mt-4 mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-white to-gray-300 rounded-full"></span>
                  Key Website Features
                </h4>

                <div className="grid gap-3">
                  {project.description.map((desc, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg border border-white/5 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.05) inset",
                      }}
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-white"></span>
                      <p className="text-[var(--text-primary)] leading-relaxed flex-1">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{
                  backgroundColor: "var(--text-secondary)",
                  color: "var(--bg-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--text-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--text-secondary)";
                }}
              >
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-white/20 rounded-lg font-semibold text-[var(--text-secondary)] hover:border-white/30 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--nav-bg)",
                    boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
                  }}
                >
                  <FaGithub size={16} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
