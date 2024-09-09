import { ITechnology } from '@customTypes/ProjectInterfaces';
import { Technology } from './Technology';

interface ITechnologies {
  technologies: ITechnology[];
  center?: boolean;
}

export function Technologies({ technologies, center }: ITechnologies) {
  return (
    <div className={`flex flex-col gap-4 w-full  ${center && 'items-center'}`}>
      <span className="font-semibold">TECHNOLOGIES</span>
      <div
        className={`flex gap-4 flex-wrap items-center ${center && 'justify-center'} `}
      >
        {technologies?.map((tech: ITechnology) => {
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
