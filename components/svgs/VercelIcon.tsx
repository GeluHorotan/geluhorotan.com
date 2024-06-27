import { IIconProps } from '@customTypes/Icon';
import { cn } from '@lib/utils';

export function VercelLogo({ size = 24, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('fill-foreground', className)}
      viewBox="0 0 16 14"
    >
      <path
        id="Icon_akar-vercel-fill"
        data-name="Icon akar-vercel-fill"
        d="M8,1.333l8,14H0Z"
        transform="translate(0 -1.333)"
      />
    </svg>
  );
}
