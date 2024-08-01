import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { IHeaderButtons } from '@customTypes/HeaderInterfaces';
import Link from 'next/link';

interface IDesktopHeader {
  buttons: IHeaderButtons[];
}
export function DesktopHeader({ buttons }: IDesktopHeader) {
  return (
    <div className="max-w-8xl bg-background  px-7 fixed top-0 w-full h-16 justify-between   items-center max-md:hidden flex">
      <h4 className="font-bold">G</h4>
      <ul className="flex items-center gap-4 font-semibold">
        {buttons?.map((button) => {
          return (
            <Link href={`/#${button.to}`} key={button?.id}>
              <li className="uppercase">{button?.name}</li>
            </Link>
          );
        })}
      </ul>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
}
