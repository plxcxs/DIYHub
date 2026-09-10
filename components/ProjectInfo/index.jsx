import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import Steps from "../Steps";
import Materials from "../Materials";
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((response) => response.json());
export default function ProjectInfo() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: project,
    error,
    isLoading,
  } = useSWR(id ? `/api/projects/${id}` : null, fetcher);
  if (error) return <p>Error loading project u fool</p>;
  if (isLoading) return <p> Loading ... u fool</p>;
  if (!project) return <p>Loading...</p>;
  console.log(project);

  return (
    <StyledDiv>
      <p>{project.title} </p>
      <Image
        src="/woodworking-workshop-table-top-scene-making-wood-joint-diy-concept-70303318.jpg"
        alt="picture"
        width={200}
        height={200}
      />

      <p>{project.description}</p>
      <p>{project.complexity}</p>
      <p>{project.duration}</p>

      <section>{<Materials project={project} />}</section>
      <StyledStepSection>
        <Steps project={project} />
      </StyledStepSection>

      <Link href={"/"}>
        <button>Back</button>
      </Link>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 20vh;
  margin-left: 40%;
  border: 1px solid black;
  background-color: #7676ed;
  /* display: flexbox; */
`;

const StyledStepSection = styled.section`
  background-color: aliceblue;
  padding: 1vh;
  border: 2px solid yellow;
`;
