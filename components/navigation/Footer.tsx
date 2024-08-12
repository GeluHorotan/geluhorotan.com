import SvgFinder from '@components/svgs/SvgFinder';
import {
  INavigationButton,
  ISocialButton,
} from '@customTypes/NavigationInterfaces';
import nav_locale from '@locale/en/nav_locale.json';
import Link from 'next/link';

export function Footer() {
  const { nav_buttons, nav_social_buttons, nav_legal_buttons } = nav_locale;

  return (
    <div className="h-max px-14 py-20 mt-36 w-full max-w-8xl flex flex-col bg-background items-center  justify-center gap-10 ">
      <div className="w-full flex justify-between items-start ">
        {/* Logo */}
        <h4 className="font-bold self-center">G</h4>
        {/* Navigation */}
        <div className="flex gap-4 flex-col">
          <p className="font-medium">NAVIGATION</p>
          <ul className="flex items-start gap-2  flex-col">
            {nav_buttons?.map((button: INavigationButton) => {
              return (
                <Link href={`/#${button.to}`} key={button?.id}>
                  <li className="uppercase">{button?.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        {/* Legal */}
        <div className="flex gap-4 flex-col">
          <p className="font-medium">LEGAL</p>
          <ul className="flex items-start gap-2  flex-col">
            {nav_legal_buttons?.map((button: INavigationButton) => {
              return (
                <Link href={`/#${button.to}`} key={button?.id}>
                  <li className="uppercase">{button?.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex gap-4 flex-col">
          <p className="font-medium">GET IN TOUCH</p>
          <ul className="flex items-center gap-4 flex-wrap ">
            {nav_social_buttons?.map((button: ISocialButton) => {
              return button?.isSocial ? (
                <SvgFinder
                  key={button?.id}
                  identifier={button?.identifier}
                  size={20}
                  className={`fill-foreground `}
                />
              ) : (
                <div className={`${!button?.isSocial && 'basis-full w-full '}`}>
                  {button?.value}
                </div>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="">
        {new Date().getFullYear()} &#169; All rights reserved.{' '}
      </div>
    </div>
  );
}
