"use client";
import React from "react";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import { MdWork, MdVolunteerActivism } from "react-icons/md";
import { workExperience, volunteeringExperience } from "../../utils/data";

function Experience() {
  return (
    <div className="p-[10px] w-full space-y-16">
      {/* Work Experience Section */}
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div
            className="p-3 rounded-xl border transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--nav-bg)",
              borderColor: "var(--nav-border)",
            }}
          >
            <MdWork
              className="text-2xl"
              style={{ color: "var(--text-accent)" }}
            />
          </div>
          <h2
            className="text-2xl lg:text-3xl font-bold font-inter"
            style={{ color: "var(--text-primary)" }}
          >
            Work Experience
          </h2>
        </div>

        {/* Work Experience Cards */}
        <div className="space-y-6">
          {workExperience.map((exp, index) => (
            <div
              key={exp.id}
              className="group p-6 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold font-inter mb-2 group-hover:text-opacity-90 transition-all duration-300"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <FaBuilding
                      className="text-sm opacity-70"
                      style={{ color: "var(--text-accent)" }}
                    />
                    <span
                      className="font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {exp.company}
                    </span>
                  </div>
                </div>

                {/* Job Type Badge */}
                <div
                  className="px-4 py-2 rounded-full text-sm font-medium border self-start transition-all duration-300 hover:scale-105"
                  style={{
                    color: "var(--text-accent)",
                    borderColor: "var(--text-accent)",
                    backgroundColor: "rgba(255,255,255,0.02)",
                  }}
                >
                  {exp.type}
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-wrap gap-6 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt
                    className="opacity-70"
                    style={{ color: "var(--text-accent)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt
                    className="opacity-70"
                    style={{ color: "var(--text-accent)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-4 opacity-90"
                style={{ color: "var(--text-secondary)" }}
              >
                {exp.description}
              </p>

              {/* Technologies - Optional */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech: string, techIndex: number) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-sm font-medium border  transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "var(--nav-bg)",
                        borderColor: "var(--nav-border)",
                        color: "var(--text-secondary)",
                        animationDelay: `${techIndex * 50}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Volunteering Experience Section */}
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div
            className="p-3 rounded-xl  border transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--nav-bg)",
              borderColor: "var(--nav-border)",
            }}
          >
            <MdVolunteerActivism
              className="text-2xl"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
          <h2
            className="text-2xl lg:text-3xl font-bold font-inter"
            style={{ color: "var(--text-primary)" }}
          >
            Volunteering Experience
          </h2>
        </div>

        {/* Volunteering Experience Cards */}
        <div className="space-y-6">
          {volunteeringExperience.map((exp, index) => (
            <div
              key={exp.id}
              className="group p-6 rounded-2xl  border transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Header */}
              <div className="flex-1 mb-4">
                <h3
                  className="text-xl font-bold font-inter mb-2 group-hover:text-opacity-90 transition-all duration-300"
                  style={{ color: "var(--text-primary)" }}
                >
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2">
                  <FaBuilding
                    className="text-sm opacity-70"
                    style={{ color: "var(--text-muted)" }}
                  />
                  <span
                    className="font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.organization}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-wrap gap-6 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt
                    className="opacity-70"
                    style={{ color: "var(--text-muted)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt
                    className="opacity-70"
                    style={{ color: "var(--text-muted)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-4 opacity-90"
                style={{ color: "var(--text-secondary)" }}
              >
                {exp.description}
              </p>

              {/* Impact */}
              <div
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: "var(--nav-bg)",
                  borderLeft: "3px solid var(--nav-border)",
                }}
              >
                <FaHeart
                  className="text-lg opacity-80"
                  style={{ color: "var(--text-muted)" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {exp.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
