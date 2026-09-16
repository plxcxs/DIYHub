import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import CreateProject from "../CreateProject";
export default function ProjectCard({
  title,
  image,
  description,
  complexity,
  duration,
  categories,
  id,
  isEdit,
  onEdit,
}) {
  return (
    <>
      <StyledArticle>
        <StyledHeader>
          <h2>{title} </h2>
          <StyledEditButton onClick={onEdit}>Edit</StyledEditButton>
        </StyledHeader>
        <CreateProject
          key={isEdit ? `edit-${id}` : "create"}
          isOpen={isEdit}
          project={
            isEdit
              ? { title, description, complexity, duration, id, categories }
              : null
          }
          onEdit={onEdit}
        />
        <StyledImage alt="image" src={image} width={200} height={200} />
        <StyledContent>
          <p>{description} </p>
          <div>{complexity}</div>
          <div>{duration}</div>
          <Link href={`/projects/${id}`}>Details</Link>
        </StyledContent>
      </StyledArticle>
    </>
  );
}
const StyledContent = styled.div`
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
const StyledImage = styled(Image)`
  padding: 5px;
  border-radius: 10%;
  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const StyledHeader = styled.header`
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: #c2d6da;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledEditButton = styled.button`
  padding: 0.3rem 0.8rem;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const StyledArticle = styled.article`
  width: 320px;
  margin: 50px;

  @media (min-width: 768px) {
    width: 600px;
    padding: 1.5rem;
  }
`;
