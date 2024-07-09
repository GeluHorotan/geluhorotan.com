import { IIconProps } from '@customTypes/Icon';
import { cn } from '@lib/utils';

export function StyledComponentsLogo({ size = 24, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('', className)}
      viewBox="0 0 17 16"
    >
      <text
        id="_"
        data-name="💅"
        transform="translate(0 13)"
        fontSize="12"
        fontFamily="SegoeUIEmoji, Segoe UI Emoji"
        letterSpacing="0.005em"
      >
        <tspan x="0" y="0">
          💅
        </tspan>
      </text>
    </svg>
  );
}
