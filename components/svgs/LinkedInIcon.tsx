import { IIconProps } from '@customTypes/Icon';
import { cn } from '@lib/utils';

export function LinkedInIcon({ size = 18, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('fill-inherit', className)}
      viewBox="0 0 16 16.001"
    >
      <path
        id="Icon_corebrands-linkedin-in"
        data-name="Icon corebrands-linkedin-in"
        d="M4.582,16H1.265V5.318H4.582ZM2.921,3.861A1.93,1.93,0,1,1,4.842,1.921,1.937,1.937,0,0,1,2.921,3.861ZM17,16h-3.31V10.8c0-1.239-.025-2.829-1.725-2.829-1.725,0-1.989,1.346-1.989,2.74V16H6.66V5.318H9.841V6.775h.046A3.485,3.485,0,0,1,13.026,5.05C16.383,5.05,17,7.261,17,10.132V16Z"
        transform="translate(-1)"
      />
    </svg>
  );
}
