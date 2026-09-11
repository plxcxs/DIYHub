export default function Materials({ project }) {
  console.log(project.materials);
  return (
    <>
      {project.materials.map((material) => {
        return <p key={material}>Material:{material}</p>;
      })}
    </>
  );
}
