// components/ProjectsSection.tsx
import React from "react";
import SectionTitle from "../sites/SectionTitle";
import ProjectCard from "./ProjectCard"; // Assuming ProjectCardProps is defined in ProjectCard.tsx

// Re-define or import ProjectCardProps if it's defined elsewhere
interface ProjectItem {
  id: string; // Add an id for mapping
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  techStack: string;
  projectLink: string;
  linkText?: string;
  kmpVisionNote?: string;
}

interface ProjectsSectionProps {
  title: string;
  projects: ProjectItem[];
  className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title,
  projects,
  className = "py-16",
}) => {
  return (
    <section id="projects" className={className}>
      <div className="w-11/12 max-w-6xl mx-auto">
        <SectionTitle title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              imgSrc={project.imgSrc}
              imgAlt={project.imgAlt}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              projectLink={project.projectLink}
              linkText={project.linkText}
              kmpVisionNote={project.kmpVisionNote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
