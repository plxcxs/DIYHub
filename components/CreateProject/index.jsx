import styled, { css } from "styled-components";

export default function CreateProject({ isOpen }) {
  return (
    <>
      <StyledForm action="submit" $isOpen={isOpen}>
        <h2>Create Project</h2>
        <StyledTextArea
          name="title"
          id="title"
          placeholder="title"
        ></StyledTextArea>
        <StyledTextArea
          name="description"
          id="description"
          placeholder="description"
        ></StyledTextArea>
        <StyledTextArea
          name="categories"
          id="categories"
          placeholder="categories"
        ></StyledTextArea>
        <StyledTextArea
          name="level"
          id="level"
          placeholder="level"
        ></StyledTextArea>
        <StyledTextArea
          name="time"
          id="time"
          placeholder="time"
        ></StyledTextArea>

        <button>Create</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: lime;
  ${(props) =>
    !props.$isOpen &&
    css`
      display: none;
    `}
`;

const StyledTextArea = styled.textarea`
  resize: none;
`;
