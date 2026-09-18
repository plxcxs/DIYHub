import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ProjectForm from "../ProjectForm";
import { breakpoints } from "@/styles";

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
  onDelete,
}) {
  return (
    <>
      <StyledArticle>
        <StyledHeader>
          <StyledH2>{title} </StyledH2>
          <StyledButton onClick={onEdit}>Edit</StyledButton>
        </StyledHeader>
        {isEdit && (
          <ProjectForm
            isOpen
            project={{
              title,
              description,
              complexity,
              duration,
              id,
              categories,
            }}
            onEdit={onEdit}
          />
        )}

        <StyledImage
          alt={`image of ${title}`}
          src={image}
          width={200}
          height={200}
        />
        <StyledContent>
          <p>{description} </p>
          <div>{complexity}</div>
          <div>{duration}</div>
        </StyledContent>
        <StyledFooter>
          <StyledLink href={`/projects/${id}`}>Details</StyledLink>
          <StyledButton onClick={onDelete}>delete</StyledButton>
        </StyledFooter>
      </StyledArticle>
    </>
  );
}

const StyledH2 = styled.h2`
  font-size: 2rem;
`;

const StyledContent = styled.div`
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
`;
const StyledImage = styled(Image)`
  padding: 5px;
  border-radius: 10%;
  @media (min-width: ${breakpoints.tablet}) {
    width: 300px;
    height: 300px;
  }
`;
const StyledLink = styled(Link)`
  font-size: 2rem;
`;

const StyledHeader = styled.header`
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: #a7bbbe;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  padding: 0.3rem 0.8rem;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.3rem;
  }
`;

const StyledArticle = styled.article`
  width: 320px;
  margin: 50px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #4a87d5;
  @media (min-width: ${breakpoints.tablet}) {
    width: 600px;
    padding: 1.5rem;
  }
`;

const StyledFooter = styled.footer`
  padding: 10px;
  height: 4rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: #c0b0e5;
  flex-direction: row;
  justify-content: space-between;
`;
