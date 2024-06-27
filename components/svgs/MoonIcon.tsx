import { cn } from '@lib/utils';
import { IIconProps } from '@customTypes/Icon';

export function Moon({ size = 18, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('fill-inherit', className)}
      viewBox="0 0 17.875 19.503"
    >
      <path
        id="Icon_ion-ios-moon"
        data-name="Icon ion-ios-moon"
        d="M20.384,17.987c-.147.005-.295.01-.442.01A8.953,8.953,0,0,1,13.5,15.285a9.251,9.251,0,0,1-2.666-6.541,9.368,9.368,0,0,1,.889-4,13.236,13.236,0,0,1,.691-1.188.2.2,0,0,0-.2-.31,9.777,9.777,0,0,0-8.155,9.7,9.727,9.727,0,0,0,9.654,9.8,9.573,9.573,0,0,0,7.358-3.458,9.276,9.276,0,0,0,.833-1.107.2.2,0,0,0-.208-.31,8.672,8.672,0,0,1-1.315.112Z"
        transform="translate(-4.063 -3.247)"
      />
    </svg>
  );
}
