import { getProjects } from '@api/getProjects';
import { Project } from './Project';

export async function Projects() {
  const project = await getProjects();
  console.log('🚀 ~ Projects ~ projects:', project);
  if (!project) {
    return <div>NOT FOUND</div>;
  }

  return (
    <div className="w-full bg-red-400">
      {project?.map((project: any) => (
        <Project key={project.id} name={project.name}></Project>
      ))}
    </div>
  );
}
