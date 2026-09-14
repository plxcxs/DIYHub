export default function Steps({ project }) {
  return (
    <>
      <h3>Steps</h3>
      {project.steps.map((step, index) => {
        return (
          <p key={step.id}>
            step {index + 1}: {step.description}
          </p>
        );
      })}
    </>
  );
}
