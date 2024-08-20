import { Logo } from '@components/svgs/Logo';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { INavigationButton } from '@customTypes/NavigationInterfaces';
import Link from 'next/link';

interface IDesktopHeader {
  buttons: INavigationButton[];
}
export function DesktopHeader({ buttons }: IDesktopHeader) {
  return (
    <div className=" bg-background z-50   fixed top-0  h-16 justify-between w-full   items-center max-md:hidden flex">
      <div className="px-14  max-[1200px]:px-7 flex justify-between items-center  w-full mx-auto max-w-8xl">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex items-center gap-4 font-semibold">
          {buttons?.map((button: INavigationButton) => {
            return (
              <Link href={`/#${button.to}`} key={button?.id}>
                <li className="uppercase">{button?.name}</li>
              </Link>
            );
          })}
        </ul>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
