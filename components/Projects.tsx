import { getProjects } from '@api/getProjects';
import { Project } from './Project';

export async function Projects() {
  const project = await getProjects();

  if (!project) {
    return <div>NOT FOUND</div>;
  }

  return (
    <div className="w-full   flex flex-col gap-20 bg-blue-400">
      {project?.map((project: any, index: number) => (
        <Project
          isReversed={index % 2 !== 0 || false}
          key={project.id}
          name={project.name}
        ></Project>
      ))}
    </div>
  );
}
