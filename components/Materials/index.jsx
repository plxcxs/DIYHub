export default function Materials({ project }) {
  return (
    <>
      <h2>Materials</h2>
      {project.materials.map((material) => {
        return <p key={material}>Material:{material}</p>;
      })}
    </>
  );
}
