export default function Materials({ project }) {
  return (
    <>
      <h3>Materials</h3>
      {project.materials.map((material) => {
        return <p key={material}>Material:{material}</p>;
      })}
    </>
  );
}
