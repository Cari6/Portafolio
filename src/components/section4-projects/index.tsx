import { useEffect, useState } from "react";
import { projectsData } from "../../utils/constants/projects";
import Modal from "../modal";
import Project from "../project-card";
import Typography from "../typography";
import { ProjectsContainer, SectionContainer } from "./styles";

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    images: string[];
    title: string;
    description: string;
    languageIcons: string[];
    links?: { url: string; icon: string }[];
  } | null>(null);

  const openModal = (project: typeof selectedProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isModalOpen]);
  return (
    <SectionContainer id={id}>
      <Typography variant="h2">Proyectos</Typography>
      <ProjectsContainer>
        {projectsData.map((project, index) => (
          <div key={index} onClick={() => openModal(project)}>
            <Project title={project.title} image={project.images[0]} />
          </div>
        ))}
        {isModalOpen && selectedProject && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            project={selectedProject}
          />
        )}
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default ProjectsSection;
