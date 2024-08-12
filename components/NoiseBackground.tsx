import { NoiseTexture } from '@components/NoiseTexture';
import { cn } from '@lib/utils';

interface INoiseBackground {
  children: React.ReactNode;
  className?: string;
  noBackground?: boolean;
}

export function NoiseBackground({
  children,
  className,
  noBackground,
}: INoiseBackground) {
  return (
    <div
      className={cn(
        ` ${noBackground ? 'p-0 background-none rounded-none' : 'bg-indigo-800 rounded-xl p-20 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]'} w-full relative `,
        className
      )}
    >
      <NoiseTexture className="rounded-xl" />
      <div className="z-20 relative  shadow-lg">{children}</div>
    </div>
  );
}
