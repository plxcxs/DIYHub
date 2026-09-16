import useSWR from "swr";
import ProjectCard from "../ProjectCard";
import CreateProject from "../CreateProject";
import { useState } from "react";

export default function ProjectList() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: projects, error, isLoading } = useSWR("/api/projects");

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  if (error) return <p>Error loading projects.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <button onClick={handleOpen}>
        {!isOpen ? "Create Project" : "Back"}
      </button>
      <CreateProject isOpen={isOpen} />
      {projects.map((project) => {
        return (
          <ProjectCard
            id={project._id}
            key={project._id}
            title={project.title}
            description={project.description}
            image={project.imageUrl}
            duration={project.duration}
            complexity={project.complexity}
          />
        );
      })}
    </>
  );
}
