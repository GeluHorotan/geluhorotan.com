import { IIconProps } from '@customTypes/IconInterfaces';
import { cn } from '@lib/utils';

export function MailIcon({ size = 18, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('fill-inherit', className)}
      viewBox="0 0 16 10.105"
    >
      <g
        id="Icon_ion-email"
        data-name="Icon ion-email"
        transform="translate(-2.25 -6)"
      >
        <path
          id="Path_44"
          data-name="Path 44"
          d="M3.025,6.97c.421.272,6.269,4.177,6.487,4.317a1.328,1.328,0,0,0,.785.206,1.328,1.328,0,0,0,.785-.206c.218-.141,6.066-4.045,6.487-4.317.157-.1.421-.277.478-.478.1-.356-.008-.492-.432-.492H2.979c-.425,0-.532.141-.432.492.057.206.321.38.478.478Z"
          transform="translate(0)"
        />
        <path
          id="Path_45"
          data-name="Path 45"
          d="M17.93,7.167c-.315.163-3.146,2.192-5.019,3.412l3.161,3.582c.077.077.112.17.069.217s-.146.019-.227-.054L12.123,11.1c-.573.372-.977.627-1.046.666a1.519,1.519,0,0,1-.788.17,1.519,1.519,0,0,1-.788-.17c-.073-.039-.473-.294-1.046-.666L4.661,14.324c-.077.077-.181.1-.227.054s-.012-.139.065-.217l3.158-3.582C5.785,9.359,2.923,7.33,2.608,7.167c-.338-.174-.358.031-.358.19V15.3a1.041,1.041,0,0,0,.9.809H17.423a.958.958,0,0,0,.827-.809V7.357C18.25,7.194,18.273,6.993,17.93,7.167Z"
        />
      </g>
    </svg>
  );
}
