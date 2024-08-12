import { IIconProps } from '@customTypes/IconInterfaces';
import { cn } from '@lib/utils';

export function TypescriptLogo({ size = 24, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('fill-[#017ACB]', className)}
      viewBox="0 0 16.001 16.001"
    >
      <path
        id="Icon_akar-typescript-fill"
        data-name="Icon akar-typescript-fill"
        d="M15.619,0H.38A.381.381,0,0,0,0,.381V15.62A.38.38,0,0,0,.381,16H15.62A.381.381,0,0,0,16,15.62V.38A.381.381,0,0,0,15.619,0Zm-6.1,8.551h-1.9v5.925H6.1V8.551h-1.9V7.238H9.524Zm.427,5.587V12.554a3.556,3.556,0,0,0,1.9.652c1.038,0,1-.679,1-.772,0-.985-2.941-.985-2.941-3.167,0-2.968,4.286-1.8,4.286-1.8l-.053,1.411A3.129,3.129,0,0,0,12.613,8.4c-.812,0-1.1.387-1.1.8,0,1.065,2.968.959,2.968,3.1,0,3.3-4.525,1.837-4.525,1.837Z"
        transform="translate(0 0)"
      />
    </svg>
  );
}
