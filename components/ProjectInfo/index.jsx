import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import Steps from "../Steps";
import Materials from "../Materials";
import Link from "next/link";

export default function ProjectInfo() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: project,
    error,
    isLoading,
  } = useSWR(id ? `/api/projects/${id}` : null);
  if (error) return <p>Error loading project u fool</p>;
  if (isLoading) return <p> Loading ... u fool</p>;
  if (!project) return <p>Project not found</p>;

  return (
    <StyledDiv>
      <h2>{project.title} </h2>

      <Image
        src={project.imageUrl}
        alt={project.title}
        width={200}
        height={200}
      />

      <p>{project.description}</p>
      <p>{project.complexity}</p>
      <p>{project.duration}</p>

      <StyledMaterialsSection>
        <Materials project={project} />
      </StyledMaterialsSection>
      <StyledStepSection>
        <Steps project={project} />
      </StyledStepSection>

      <Link href={"/"}>Back</Link>
    </StyledDiv>
  );
}
const StyledMaterialsSection = styled.section`
  background-color: #6f95b9;
  border: 1px solid black;
`;
const StyledDiv = styled.div`
  margin: 0 auto;
  width: 320px;
  border: 1px solid black;
  background-color: #6f95b9;
  @media (min-width: 768px) {
    width: 600px;
    padding: 1.5rem;
  }
`;

const StyledStepSection = styled.section`
  background-color: #6f95b9;
  padding: 1vw;
  border: 1px solid black;
`;
