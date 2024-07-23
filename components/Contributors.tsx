import { IContributor } from '@customTypes/ProjectInterfaces';
import { Contributor } from './Contributor';

interface IContributors {
  contributors: IContributor[];
}
export function Contributors({ contributors }: IContributors) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-semibold">CONTRIBUTORS</span>
      <div className="flex gap-8 flex-wrap ">
        {contributors.map((contributor: IContributor) => {
          return (
            <Contributor
              name={contributor?.name}
              role={contributor?.role}
              avatar={contributor?.avatar}
              key={contributor?.id}
            />
          );
        })}
      </div>
    </div>
  );
}
