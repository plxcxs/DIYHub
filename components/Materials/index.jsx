export default function Materials({ project }) {
  return (
    <>
      {project.materials.map((material) => {
        return <p key={material}>Material:{material}</p>;
      })}
    </>
  );
}
