import { NoiseTexture } from '@components/NoiseTexture';

interface INoiseBackground {
  children: React.ReactNode;
  color?: string;
}

export function NoiseBackground({
  children,
  color = 'bg-indigo-800',
}: INoiseBackground) {
  return (
    <div
      className={`w-full ${color} relative rounded-xl p-20 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]`}
    >
      <NoiseTexture className="rounded-xl" />
      {children}
    </div>
  );
}
