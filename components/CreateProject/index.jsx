import styled, { css } from "styled-components";
import useSWR from "swr";
import { useState } from "react";

export default function CreateProject({ isOpen }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [complexity, setComplexity] = useState("");
  const [duration, setDuration] = useState("");

  const { mutate } = useSWR("/api/projects");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { title, description, categories, complexity, duration };
    const response = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      mutate();
      alert("porject created");
      setTitle("");
      setDescription("");
      setCategories("");
      setComplexity("");
      setDuration("");
    } else {
      alert("sorry wasnt able to create project, please try again");
    }
  }
  return (
    <>
      <StyledForm action="submit" $isOpen={isOpen} onSubmit={handleSubmit}>
        <h2>Create Project</h2>
        <StyledTextArea
          name="title"
          id="title"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        ></StyledTextArea>
        <StyledTextArea
          name="description"
          id="description"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        ></StyledTextArea>
        <section>
          <label htmlFor="categories">Categories</label>
          <select
            name="categories"
            id="categories"
            defaultValue=""
            required
            value={categories}
            onChange={(event) => setCategories(event.target.value)}
          >
            <option value="">please choose a category</option>
            <option value="Woodworking">Woodworking</option>
            <option value="Electronics">Electronics</option>
            <option value="Crafts">Crafts</option>
            <option value="Home Improvement">Home Improvement</option>
            <option value="Garden">Garden</option>
            <option value="Upcycling">Upcycling</option>
          </select>
        </section>

        <StyledTextArea
          name="duration"
          id="duration"
          placeholder="duration"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          required
        ></StyledTextArea>
        <section>
          <label htmlFor="complexity">Complexity</label>
          <select
            id="complexity"
            name="complexity"
            defaultValue=""
            value={complexity}
            onChange={(event) => setComplexity(event.target.value)}
            required
          >
            <option value="" disabled>
              Please select a Complexity
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </section>

        <button>Create</button>
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
