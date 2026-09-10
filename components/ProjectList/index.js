import useSWR from "swr";
import ProjectCard from "../ProjectCard";

export default function ProjectList() {
  const { data: projects, error, isLoading } = useSWR("/api/projects");
  if (error) return <p>Error loading projects.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {projects.map((project) => {
        return (
          <ProjectCard
            id={project._id}
            key={project._id}
            title={project.title}
            description={project.description}
            image="/woodworking-workshop-table-top-scene-making-wood-joint-diy-concept-70303318.jpg"
            duration={project.duration}
            complexity={project.complexity}
          />
        );
      })}
    </>
  );
}
