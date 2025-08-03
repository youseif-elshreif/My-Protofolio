import React from "react";
import "./glassIcons.css";
import { GlassIconsProps } from "../../../utils/types";

const GlassIcons: React.FC<GlassIconsProps> = ({ items }) => {
  return (
    <div
      className={`grid gap-y-[4em]  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto py-[3em] overflow-visible`}
    >
      {items.map((item, index) => (
        <span
          key={index}
          aria-label={item.label}
          className={`relative bg-transparent m-auto outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group `}
        >
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] "
            style={{
              background:
                "linear-gradient(hsla(0, 0%, 41%, 1.00), hsla(0, 0%, 41%, 1.00))",
              boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
            }}
          ></span>
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform "
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span
              className="m-auto w-[3em] h-[3em] flex items-center justify-center"
              aria-hidden="true"
            >
              {item.icon}
            </span>
          </span>

          <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base  transition-[transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 ">
            {item.label}
          </span>
        </span>
      ))}
    </div>
  );
};

export default GlassIcons;
