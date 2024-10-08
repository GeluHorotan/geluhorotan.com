import { IIconProps } from '@customTypes/IconInterfaces';
import { cn } from '@lib/utils';

export function Logo({ size = 40, className }: IIconProps) {
  return (
    <svg
      role="img"
      id="logo"
      aria-labelledby={`logoTitle-1 logoDesc-1`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('', className)}
      viewBox="0 0 358.687 414.16"
    >
      <title id={`logoTitle-1`}>Logo</title>
      <desc id={`logoDesc-1`}>Gelu&apos;s Horotan Logo</desc>
      <g id="Group_1" data-name="Group 1">
        <path
          id="Path_2"
          data-name="Path 2"
          d="M202.568,244.758l104.277,60.2-39.834,23h0L135.3,404.011l67.268,38.832L381.907,339.3l.008-68.676L202.568,167.07Z"
          transform="translate(-23.228 -28.683)"
          className="fill-primary"
        />
        <path
          id="Path_3"
          data-name="Path 3"
          d="M199.994,0,120.31,46v77.672l50.271-29.024L199.994,77.68,379.342,181.212V103.54Z"
          transform="translate(-20.655)"
          className="fill-primary"
        />
        <path
          id="Path_4"
          data-name="Path 4"
          d="M67.276,242.349V78.11L0,116.95V324.03l79.684,46,67.268-38.84-79.676-46Z"
          transform="translate(0 -13.41)"
          className="fill-primary"
        />
      </g>
    </svg>
  );
}
