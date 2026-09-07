import Image from "next/image";
export default function ProjectCard({
  title,
  image,
  description,
  complexity,
  duration,
}) {
  return (
    <>
      <section>
        <h3>{title} </h3>
        <Image alt="image" href={image} />
        <p>{description} </p>
        <div>{complexity}</div>
        <div>{duration}</div>
      </section>
    </>
  );
}
