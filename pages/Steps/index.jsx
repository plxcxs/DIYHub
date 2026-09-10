export default function Steps({ project }) {
  return (
    <>
      {project.steps.map((step) => {
        return (
          <p key={step.id}>
            step {step.id}:{step.description}
          </p>
        );
      })}
    </>
  );
}
