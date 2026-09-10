export default function Materials({ project }) {
  return (
    <>
      {project.materials.map((material, i) => {
        return <p key={i}>material:{material}</p>;
      })}
    </>
  );
}
