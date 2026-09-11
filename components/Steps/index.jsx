import { staticPageGenerationTimeout } from "@/next.config";

export default function Steps({ project }) {
  return (
    <>
      {project.steps.map((step, index) => {
        return (
          <p key={step.id}>
            step {index + 1}:{step.description}
          </p>
        );
      })}
    </>
  );
}
