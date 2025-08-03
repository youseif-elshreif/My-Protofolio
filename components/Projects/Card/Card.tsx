// components/Card.tsx
import React from "react";
import Image from "next/image";
import { Project } from "../../../utils/types";

const Card: React.FC<Project> = ({
  image,
  title,
  description,
  techs,
  githubUrl,
  liveDemoUrl,
}) => {
  return (
    <div
      className="max-w-[300px] w-full mx-auto my-8 rounded-[1.25em] backdrop-blur-[0.75em] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out group border border-white/10"
      style={{
        backgroundColor: "var(--nav-bg)",
        boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
      }}
    >
      <div className="relative overflow-hidden p-2 h-full rounded-[.25em]">
        <div
          className="absolute inset-0 rounded-[1.25em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ backgroundColor: "hsla(0, 0%, 100%, 0.05)" }}
        />

        <div className="flex  flex-col h-full">
          {/* Image */}
          <div className="w-full h-[150px] lg:h-[140px] relative overflow-hidden ">
            <Image
              src={typeof image === "string" ? image : image.src}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-[0.8em]"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-4 justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="text-sm text-[#a89ec9] mt-2">{description}</p>

              <div className="flex flex-wrap gap-2 mt-4 justify-space-between">
                {techs.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-white/10 text-white"
                    style={{
                      backgroundColor: "var(--nav-bg)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6 gap-2">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center text-sm px-3 py-2 rounded-lg border border-white/10 text-white hover:bg-white/10 transition"
              >
                GitHub
              </a>
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center text-sm px-3 py-2 rounded-lg border border-white/10 text-white hover:bg-white/10 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
