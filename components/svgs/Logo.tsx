import { IIconProps } from '@customTypes/IconInterfaces';

export function Logo({ size = 32, className }: IIconProps) {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 34.02 31.11"
    >
      <path
        id="Path_1"
        data-name="Path 1"
        d="M26.76,12.84H17.93v5.89h8.31v5.31H12.87v7.07H34.02V12.84Z"
        className="fill-primary"
      />
      <rect
        id="Rectangle_1"
        data-name="Rectangle 1"
        width="7.87"
        height="18.26"
        transform="translate(0 12.84)"
        className="fill-primary"
      />
      <path
        id="Path_2"
        data-name="Path 2"
        d="M0,0V7.85H34.02V0Z"
        className="fill-primary"
      />
    </svg>
  );
}
