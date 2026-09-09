import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
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
    <>
      <p>{project.title} </p>
      <Image src={project.imageUrl} alt="picture" width={200} height={200} />
      <p>{project.description}</p>
      <p>{project.complexity}</p>
      <p>{project.duration}</p>
      <p>
        {project.materials.map((material, i) => {
          return <div key={i}>material:{material}</div>;
        })}
      </p>
      <p>
        {project.steps.map((step) => {
          return (
            <div key={step.id}>
              step {step.id}:{step.description}
            </div>
          );
        })}
      </p>
    </>
  );
}
