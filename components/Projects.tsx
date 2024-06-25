import { getProjects } from '@data/getProjects';
import { Project } from '@components/Project';

export async function Projects() {
  const project = await getProjects();

  if (!project) {
    return <div>NOT FOUND</div>;
  }

  return (
    <section className="w-full   flex flex-col gap-36 ">
      {project?.map((project: any, index: number) => (
        <Project
          isReversed={index % 2 !== 0 || false}
          key={project.id}
          project={project}
        ></Project>
      ))}
    </section>
  );
}
