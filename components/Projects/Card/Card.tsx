// components/Card.tsx
import React from "react";
import Image from "next/image";
import { FaInfoCircle, FaCrown } from "react-icons/fa";
import { Project } from "../../../utils/types";

interface CardProps extends Project {
  onShowDetails: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  shortDescription,
  techs,
  freelance,
  onShowDetails,
}) => {
  return (
    <div
      className="max-w-[300px] w-full mx-auto my-8 rounded-[1.25em] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out group border border-white/10"
      style={{
        backgroundColor: "var(--nav-bg)",
        boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
      }}
    >
      <div className="relative overflow-hidden p-2 h-full rounded-[.25em]">
        <div className="absolute inset-0 rounded-[1.25em] bg-[var(--card-bg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="w-full h-[150px] lg:h-[140px] relative overflow-hidden ">
            <Image
              src={typeof image === "string" ? image : image.src}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-[0.8em]"
            />
            {freelance && (
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md border border-black-500/30 shadow-md text-black text-xs font-medium bg-white/75">
                <FaCrown size={10} />
                Freelance
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-4 justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[var(--text-secondary)]">
                {title}
              </h2>
              <p className="text-sm text-[var(--text-primary)] mt-2">
                {shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 justify-space-between">
                {techs.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full border border-white/10 text-[var(--text-primary)]"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Show Details Button */}
            <button
              onClick={onShowDetails}
              className="flex items-center justify-center gap-2 mt-6 w-full text-sm px-4 py-3 rounded-lg border border-white/10 text-[var(--text-secondary)] hover:border-white/20 cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: "var(--nav-bg)",
                boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
              }}
            >
              <FaInfoCircle size={14} />
              Show Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
