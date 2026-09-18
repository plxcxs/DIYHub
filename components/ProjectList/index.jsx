import useSWR from "swr";
import ProjectCard from "../ProjectCard";
import { useState } from "react";
import styled from "styled-components";
import ProjectForm from "../ProjectForm";
import { breakpoints } from "@/styles";
import ProjectDeleteModal from "../ProjectDeleteModal";

export default function ProjectList() {
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(false);
  const { data: projects, error, isLoading, mutate } = useSWR("/api/projects");
  const [deleteId, setDeleteId] = useState(null);
  const deleteProject = projects?.find((project) => project._id === deleteId);
  const [deleteError, setDeleteError] = useState("");

  async function handleConfirmDelete() {
    try {
      const response = await fetch(`/api/projects/${deleteId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        mutate(projects.filter((project) => project._id !== deleteId)
        );
        setDeleteId(null);
      } else {
        setDeleteError("Sorry, wasn't able to delete the project.");
        setTimeout(() => setDeleteError(""), 3000);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setDeleteError("Network error, please try again");
      setTimeout(() => setDeleteError(""), 3000);
    }
  }

  function handleToggleView() {
    setIsOpen(!isOpen);
    setEditId(null);
  }

  function handleDeleteToggle(id) {
    setDeleteId(deleteId === id ? null : id);
  }

  if (error) return <p>Error loading projects.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {deleteProject && (
        <ProjectDeleteModal
          title={deleteProject.title}
          onConfirm={handleConfirmDelete}
          onCancel={() => setDeleteId(null)}
          error={deleteError}
        />
      )}
      <StyledListSection>
        <StyledCreateButton onClick={handleToggleView}>
          {!isOpen ? "Create Project" : "Back"}
        </StyledCreateButton>
        <ProjectForm isOpen={isOpen} />
        <div>
          {projects.map((project) => {
            return (
              <>
                {" "}
                <StyledCardGrid>
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
                    deleteId={deleteId === project._id}
                    onDelete={() => handleDeleteToggle(project._id)}
                  />
                </StyledCardGrid>
              </>
            );
          })}
        </div>
      </StyledListSection>
    </>
  );
}

const StyledCardGrid = styled.div`
  display: flex;
`;

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
  width: 100%;
  max-width: 600px;
  gap: 5rem;
`;
