import { getProjects } from '@data/getProjects';
import { Project } from '@components/Project';
import { SectionTitle } from './SectionTitle';
import { ErrorIllustration } from './svgs/ErrorIllustration';

export async function Projects() {
  let project = await getProjects();
  project = null;
  if (!project) {
    return (
      <div className="max-w-8xl  self-center w-full">
        <ErrorIllustration></ErrorIllustration>
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="w-full   flex flex-col gap-36   max-[1200px]:px-7"
    >
      <div className="gap-20 flex flex-col items-center">
        <SectionTitle desc="Below are some challenging projects I've had the pleasure working on.">
          Embrace every <br /> <span className="text-primary">challenge</span>
        </SectionTitle>
        {project?.map((project: any, index: number) => (
          <Project
            isReversed={index % 2 !== 0 || false}
            key={project.id}
            project={project}
          ></Project>
        ))}
      </div>
    </section>
  );
}
