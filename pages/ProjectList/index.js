import useSWR from "swr";
export default function ProjectList() {
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const { data: projects, error, isLoading } = useSWR("/api/projects", fetcher);

  console.log({ projects, error, isLoading });
  return (
    <>
      <section>hello</section>
    </>
  );
}
