import React from "react";
import Card from "./Card/Card";
import { projectsItems } from "../../utils/data";

function Projects() {
  return (
    <div className="w-full grid gap-x-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-[10px]">
      {projectsItems.map((project) => (
        <Card
          key={project.id}
          id={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          techs={project.techs}
          githubUrl={project.githubUrl}
          liveDemoUrl={project.liveDemoUrl}
        />
      ))}
    </div>
  );
}

export default Projects;
