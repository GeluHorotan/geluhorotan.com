import { NoiseTexture } from '@components/NoiseTexture';
import { cn } from '@lib/utils';

interface INoiseBackground {
  children: React.ReactNode;
  className?: string;
}

export function NoiseBackground({ children, className }: INoiseBackground) {
  return (
    <div
      className={cn(
        'w-full relative bg-indigo-800 rounded-xl p-20 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]',
        className
      )}
    >
      <NoiseTexture className="rounded-xl" />
      <div className="z-20 relative rounded-xl shadow-lg">{children}</div>
    </div>
  );
}
