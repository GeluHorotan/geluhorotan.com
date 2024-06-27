import { IIconProps } from '@customTypes/Icon';
import { cn } from '@lib/utils';

export function TwitterIcon({ size = 18, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('fill-inherit', className)}
      viewBox="0 0 15.137 12.306"
    >
      <path
        id="Icon_akar-twitter-fill"
        data-name="Icon akar-twitter-fill"
        d="M15.762,3.291a6.219,6.219,0,0,1-1.783.489,3.113,3.113,0,0,0,1.365-1.719,6.2,6.2,0,0,1-1.972.753A3.107,3.107,0,0,0,8.08,5.648,8.819,8.819,0,0,1,1.679,2.4,3.111,3.111,0,0,0,2.64,6.549a3.1,3.1,0,0,1-1.407-.389V6.2A3.107,3.107,0,0,0,3.725,9.246a3.128,3.128,0,0,1-1.4.053,3.107,3.107,0,0,0,2.9,2.156,6.232,6.232,0,0,1-3.857,1.33,6.334,6.334,0,0,1-.741-.043,8.783,8.783,0,0,0,4.76,1.4A8.776,8.776,0,0,0,14.221,5.3c0-.133,0-.268-.009-.4a6.313,6.313,0,0,0,1.549-1.607v0Z"
        transform="translate(-0.625 -1.832)"
      />
    </svg>
  );
}
