import { cn } from '@lib/utils';
import { IIconProps } from '@customTypes/Icon';

export function Bulb({ size = 18, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('fill-inherit', className)}
      viewBox="0 0 16 24"
    >
      <path
        id="Icon_ion-bulb"
        data-name="Icon ion-bulb"
        d="M14.475,23.212h-3.2a.8.8,0,0,0,0,1.6h3.2a.8.8,0,1,0,0-1.6Zm.8-2.4h-4.8a.8.8,0,0,0,0,1.6h4.8a.8.8,0,1,0,0-1.6ZM18.546,3.147A8.006,8.006,0,0,0,4.875,8.812a8.212,8.212,0,0,0,2.45,5.982l.218.2c.9.842,2.132,2,2.132,3.013v1.2a.8.8,0,0,0,.8.8h1.2a.4.4,0,0,0,.4-.4V13.753a.4.4,0,0,0-.256-.373,6.536,6.536,0,0,1-1.308-.717.8.8,0,1,1,.929-1.3,3.6,3.6,0,0,0,1.435.65,3.628,3.628,0,0,0,1.436-.65.8.8,0,0,1,.928,1.3,6.537,6.537,0,0,1-1.308.716.4.4,0,0,0-.257.374v5.86a.4.4,0,0,0,.4.4h1.2a.8.8,0,0,0,.8-.8v-1.2c0-.994,1.218-2.146,2.107-2.988l.246-.233a8.044,8.044,0,0,0,2.447-5.978A7.958,7.958,0,0,0,18.546,3.147Z"
        transform="translate(-4.875 -0.812)"
      />
    </svg>
  );
}