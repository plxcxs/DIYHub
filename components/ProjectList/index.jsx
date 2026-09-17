import useSWR from "swr";
import ProjectCard from "../ProjectCard";
import { useState } from "react";
import styled from "styled-components";
import ProjectForm from "../ProjectForm";
import { breakpoints } from "@/styles";

export default function ProjectList() {
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(false);
  const { data: projects, error, isLoading } = useSWR("/api/projects");

  function handleToggleView() {
    setIsOpen(!isOpen);
    setEditId(null);
  }

  if (error) return <p>Error loading projects.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <StyledListSection>
      <StyledCreateButton onClick={handleToggleView}>
        {!isOpen ? "Create Project" : "Back"}
      </StyledCreateButton>
      <ProjectForm isOpen={isOpen} />
      <div>
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
              isEdit={editId === project._id}
              categories={project.categories}
              onEdit={() =>
                setEditId(editId === project._id ? null : project._id)
              }
            />
          );
        })}
      </div>
    </StyledListSection>
  );
}
const StyledCreateButton = styled.button`
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.3rem;
  }
`;
const StyledListSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;
