import { ITechnology } from '@customTypes/Project';

interface ITechnologies {
  technologies: ITechnology[];
}
export function Technologies({ technologies }: ITechnologies) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-semibold">TECHNOLOGIES</span>
      <div className="flex gap-4 flex-wrap">
        {technologies.map((tech: ITechnology) => {
          return <div key={tech.id}>{tech.name}</div>;
        })}
      </div>
    </div>
  );
}
