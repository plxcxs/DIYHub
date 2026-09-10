export default function Steps({ project }) {
  return (
    <>
      {project.steps.map((step, index) => {
        return (
          <p key={index}>
            step {index + 1}:{step.description}
          </p>
        );
      })}
    </>
  );
}
