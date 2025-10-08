import React, { useState } from "react";
import Card from "./Card/Card";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { projectsItems } from "../../utils/data";
import { Project } from "../../utils/types";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="w-full grid gap-x-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-[10px]">
        {projectsItems.map((project) => (
          <Card
            key={project.id}
            {...project}
            onShowDetails={() => handleShowDetails(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default Projects;
