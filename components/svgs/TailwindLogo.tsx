import { IIconProps } from '@customTypes/Icon';
import { cn } from '@lib/utils';

export function TailwindLogo({ size = 24, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      className={cn('fill-[#38bdf8]', className)}
      viewBox="0 0 16 9.6"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            id="Path_26"
            data-name="Path 26"
            d="M0,0H16V9.6H0Z"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g id="Tailwind_CSS_Logo" clipPath="url(#clip-path)">
        <path
          id="Path_25"
          data-name="Path 25"
          d="M8,0A3.781,3.781,0,0,0,4,3.2,2.565,2.565,0,0,1,6.8,2,3.41,3.41,0,0,1,8.325,3.082,4.618,4.618,0,0,0,12,4.8a3.781,3.781,0,0,0,4-3.2,2.565,2.565,0,0,1-2.8,1.2,3.41,3.41,0,0,1-1.525-1.082A4.618,4.618,0,0,0,8,0ZM4,4.8A3.781,3.781,0,0,0,0,8,2.565,2.565,0,0,1,2.8,6.8,3.413,3.413,0,0,1,4.325,7.882,4.618,4.618,0,0,0,8,9.6a3.781,3.781,0,0,0,4-3.2A2.565,2.565,0,0,1,9.2,7.6,3.41,3.41,0,0,1,7.675,6.518,4.618,4.618,0,0,0,4,4.8Z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}
