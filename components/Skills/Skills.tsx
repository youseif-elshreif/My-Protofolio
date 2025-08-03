import React from "react";
import GlassIcons from "./GlassIcons/GlassIcons";
import { skillsItems } from "../../utils/data";

function Skills() {
  return (
    <div className="relative w-full">
      <GlassIcons items={skillsItems} />
    </div>
  );
}

export default Skills;
