import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: project,
    error,
    isLoading,
  } = useSWR(id ? `/api/projects/${id}` : null, fetcher);
  if (error) return <p>Error loading project u fool</p>;
  if (isLoading) return <p> Loading ... u fool</p>;
  console.log(project);
  return (
    <div>
      <p>{project.title} </p>
      <Image alt="picture">{project.image}</Image>
      <p>{project.description}</p>
      <p>{project.complexity}</p>
      <p>{project.duration}</p>
      <p>{project.materials}</p>
      <p>{project.steps}</p>
    </div>
  );
}
