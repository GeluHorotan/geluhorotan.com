import { IIconProps } from '@customTypes/IconInterfaces';
import { cn } from '@lib/utils';

export function GithubIcon({ size = 18, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('fill-inherit ', className)}
      viewBox="0 0 16 16.605"
    >
      <path
        id="Icon_akar-github-fill"
        data-name="Icon akar-github-fill"
        d="M8,0A8.266,8.266,0,0,0,0,8.513a8.477,8.477,0,0,0,5.47,8.076.41.41,0,0,0,.55-.4c0-.2-.01-.873-.01-1.585-2.01.394-2.53-.521-2.69-1a3.1,3.1,0,0,0-.82-1.2c-.28-.16-.68-.553-.01-.564a1.606,1.606,0,0,1,1.23.873,1.652,1.652,0,0,0,2.33.7,1.835,1.835,0,0,1,.51-1.139c-1.78-.213-3.64-.947-3.64-4.2a3.434,3.434,0,0,1,.82-2.288,3.241,3.241,0,0,1,.08-2.256s.67-.223,2.2.873a7.1,7.1,0,0,1,4,0c1.53-1.107,2.2-.873,2.2-.873a3.241,3.241,0,0,1,.08,2.256,3.414,3.414,0,0,1,.82,2.288c0,3.267-1.87,3.99-3.65,4.2a2.087,2.087,0,0,1,.54,1.575c0,1.139-.01,2.054-.01,2.341a.407.407,0,0,0,.55.4A8.5,8.5,0,0,0,16,8.513,8.266,8.266,0,0,0,8,0Z"
      />
    </svg>
  );
}
