import { ITechnology } from '@customTypes/ProjectInterfaces';
import { Technology } from './Technology';

interface ITechnologies {
  technologies: ITechnology[];
}

export function Technologies({ technologies }: ITechnologies) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-semibold">TECHNOLOGIES</span>
      <div className="flex gap-4 flex-wrap">
        {technologies.map((tech: ITechnology) => {
          return (
            <Technology
              name={tech.name}
              identifier={tech.identifier}
              key={tech.id}
            />
          );
        })}
      </div>
    </div>
  );
}
