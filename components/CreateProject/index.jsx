import styled, { css } from "styled-components";
import { mutate } from "swr";
import { useState } from "react";

export default function CreateProject({ isOpen, project, onEdit }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    const url = project ? `/api/projects/${project.id}` : "/api/projects";
    const method = project ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        await mutate("/api/projects");
        setSuccessMessage(
          project ? "project update successful" : "project created"
        );

        setTimeout(() => {
          setSuccessMessage("");
          onEdit();
        }, 3000);
        event.target.reset();
      } else {
        setErrorMessage("sorry wasnt able to create project, please try again");
        setTimeout(() => setErrorMessage(""), 3000);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setErrorMessage(
        "network error, please check ur connection and try again"
      );
      setTimeout(() => setErrorMessage(""), 3000);
    }
  }
  console.log("categories:", project?.categories, typeof project?.categories);
  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
      <StyledForm action="submit" $isOpen={isOpen} onSubmit={handleSubmit}>
        <h2>{project ? "Edit Project" : "Create Project"}</h2>
        <StyledSection>
          <label htmlFor="title">Title</label>
          <StyledTextArea
            name="title"
            id="title"
            placeholder="title"
            defaultValue={project?.title || ""}
            required
          ></StyledTextArea>
        </StyledSection>
        <StyledSection>
          <label htmlFor="description">Description</label>
          <StyledTextArea
            name="description"
            id="description"
            placeholder="description"
            defaultValue={project?.description || ""}
            required
          ></StyledTextArea>
        </StyledSection>

        <StyledSection>
          <label htmlFor="categories">Categories</label>
          <select
            name="categories"
            id="categories"
            defaultValue={
              Array.isArray(project?.categories)
                ? project.categories[0]
                : project?.categories || ""
            }
            required
          >
            <option value="">please choose a category</option>
            <option value="Woodworking">Woodworking</option>
            <option value="Electronics">Electronics</option>
            <option value="Crafts">Crafts</option>
            <option value="Home Improvement">Home Improvement</option>
            <option value="Garden">Garden</option>
            <option value="Upcycling">Upcycling</option>
          </select>
        </StyledSection>
        <StyledSection>
          <label htmlFor="duration">Duration</label>
          <StyledTextArea
            name="duration"
            id="duration"
            defaultValue={project?.duration || ""}
            placeholder="duration"
            required
          ></StyledTextArea>
        </StyledSection>

        <StyledSection>
          <label htmlFor="complexity">Complexity</label>
          <select
            id="complexity"
            name="complexity"
            defaultValue={project?.complexity || ""}
            required
          >
            <option value="" disabled>
              Please select a Complexity
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </StyledSection>

        <button>{project ? "Edit" : "Create"}</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #9eb8c4;
  ${(props) =>
    !props.$isOpen &&
    css`
      display: none;
    `}
`;

const StyledTextArea = styled.textarea`
  resize: none;
  background-color: #9eb8c4;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;
