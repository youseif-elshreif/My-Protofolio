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
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
              onClick={onClose}
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
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              className="custom-project-swiper"
            >
              {project.imgs.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-64 md:h-80 overflow-hidden">
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover m-auto"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {project.freelance && (
              <div
                className="absolute top-2 right-2 z-10 flex items-center gap-1 px-2 py-1 rounded-md border border-yellow-500/30 shadow-md text-yellow-400 text-xs font-medium"
                style={{ backgroundColor: "var(--card-bg)" }}
              >
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
              <p className="text-[var(--text-primary)] leading-relaxed">
                {project.description}
              </p>
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
