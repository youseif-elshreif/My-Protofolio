import React from "react";
import "./SectionContainer.css";
import Header from "./Header";
function SectionContainer({
  children,
  title,
  mt = true,
  id,
  ref,
  num,
}: {
  children: React.ReactNode;
  title: string;
  mt?: boolean;
  id?: string;
  ref: any;
  num: number;
}) {
  return (
    <section
      ref={(el) => {
        ref.current[num] = el;
      }}
      id={id}
      className={`relative main mx-[15px] md:mx-auto rounded-[1.5rem] h-[calc(100vh-110px)] ${
        mt && "mt-8"
      } p-[10px] `}
      style={{
        backgroundColor: "var(--nav-bg)",
        border: "2px solid var(--nav-border)",
      }}
    >
      <Header title={title} />
      <div className="overflow-hidden rounded-b-[.8rem] h-[calc(100%-65px)]">
        <div className="overflow-y-auto overflow-x-hidden h-full block md:flex">
          {children}
        </div>
      </div>
    </section>
  );
}

export default SectionContainer;
