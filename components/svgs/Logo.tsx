import { IIconProps } from '@customTypes/IconInterfaces';

export function Logo({ size = 32, className }: IIconProps) {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 1019.2 922.03"
    >
      <path
        id="Path_1"
        data-name="Path 1"
        d="M775.92,309.87H480.06V507.03H758.43V685.11H310.47V922.03H1019.2V309.87Z"
        className="fill-foreground"
      />
      <rect
        id="Rectangle_1"
        data-name="Rectangle 1"
        width="263.94"
        height="612.15"
        transform="translate(0 309.87)"
        className="fill-primary"
      />
      <path
        id="Path_2"
        data-name="Path 2"
        d="M0,0V262.97H1019.19V0Z"
        className="fill-foreground"
      />
    </svg>
  );
}
