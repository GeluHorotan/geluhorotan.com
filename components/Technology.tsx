import SvgFinder from '@components/svgs/SvgFinder';

interface ITechnology {
  name: string;
  identifier: string;
}
export function Technology({ name, identifier }: ITechnology) {
  return (
    <div className="flex items-center gap-2">
      <SvgFinder size={16} identifier={identifier} /> {name}
    </div>
  );
}
