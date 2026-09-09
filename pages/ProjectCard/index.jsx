import Image from "next/image";
import Link from "next/link";
export default function ProjectCard({
  title,
  image,
  description,
  complexity,
  duration,
  id,
}) {
  return (
    <>
      <section>
        <h3>{title} </h3>
        <Image alt="image" src={image} width={200} height={200} />
        <p>{description} </p>
        <div>{complexity}</div>
        <div>{duration}</div>
        <Link href={`/projects/${id}`}>
          <button>Details</button>
        </Link>
      </section>
    </>
  );
}
