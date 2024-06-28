import { cn } from '@lib/utils';

interface INoiseTexture {
  className?: string;
}
export function NoiseTexture({ className }: INoiseTexture) {
  return (
    <div
      className={cn(
        'absolute z-10 inset-0 w-full h-full  transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]',
        className
      )}
      style={{
        backgroundImage: 'url(/noise.webp)',
        backgroundSize: '30%',
      }}
    ></div>
  );
}
