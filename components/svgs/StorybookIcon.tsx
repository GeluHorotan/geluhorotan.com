import { IIconProps } from '@customTypes/IconInterfaces';
import { cn } from '@lib/utils';

export function StorybookLogo({ size = 24, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      className={cn('fill-[#ff4684]', className)}
      viewBox="0 0 16 19.94"
    >
      <path
        id="Icon_simple-storybook"
        data-name="Icon simple-storybook"
        d="M15.074.2l-.1,2.252a.15.15,0,0,0,.241.125l.881-.665.748.582a.15.15,0,0,0,.233-.116L16.994.086,18.1,0a1,1,0,0,1,1.063,1V18.942a1,1,0,0,1-1.047,1l-13.373-.6a1,1,0,0,1-.955-.964L3.163,1.929A1,1,0,0,1,4.1.874L15.066.185ZM12.524,7.727c0,.39,2.625.2,2.983-.066C15.506,5,14.077,3.6,11.469,3.6S7.4,5.027,7.4,7.162c0,3.7,4.984,3.764,4.984,5.782,0,.582-.266.914-.872.914-.8,0-1.122-.407-1.08-1.795,0-.3-3.032-.4-3.131,0-.224,3.348,1.853,4.32,4.236,4.32,2.318,0,4.128-1.238,4.128-3.473,0-3.963-5.067-3.855-5.067-5.815a.84.84,0,0,1,.939-.914c.374,0,1.039.058.989,1.554Z"
        transform="translate(-3.161 0)"
      />
    </svg>
  );
}
