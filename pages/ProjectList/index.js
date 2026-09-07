import useSWR from "swr";
import ProjectCard from "../ProjectCard";
export default function ProjectList() {
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const { data: projects, error, isLoading } = useSWR("/api/projects", fetcher);
  if (error) return <p>Error loading projects.</p>;
  if (isLoading) return <p>Loading...</p>;
  console.log(projects);
  return (
    <>
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.imageUrl}
            duration={project.duration}
            complexity={project.complexity}
          />
        );
      })}
    </>
  );
}
