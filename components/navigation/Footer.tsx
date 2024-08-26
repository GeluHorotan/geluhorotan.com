// Components
import SvgFinder from '@components/svgs/SvgFinder';
import { LegalWrapper } from '@components/LegalWrapper';
import { PrivacyPolicy } from '@components/PrivacyPolicy';
import { TermsAndConditions } from '@components/TermsAndConditions';
import Link from 'next/link';

// Types
import {
  INavigationButton,
  ISocialButton,
} from '@customTypes/NavigationInterfaces';

// Locale
import nav_locale from '@locale/en/nav_locale.json';

export function Footer() {
  const { nav_buttons, nav_social_buttons, nav_legal_buttons } = nav_locale;

  return (
    <div className="h-max px-14   max-[1200px]:px-7 pb-14 max-md:mt-14 mt-36 w-full max-w-8xl flex flex-col bg-background items-center  justify-center gap-10 ">
      <div className="w-full flex  max-[1000px]:flex-col max-[1000px]:gap-10 justify-between  items-start ">
        {/* Logo */}
        <h4 className="font-bold self-center text-[5rem] max-[1000px]:self-start  ">
          G
        </h4>
        {/* Navigation */}
        <div className="flex gap-4 flex-col">
          <p className="  font-semibold uppercase">{nav_buttons?.title}</p>
          <div className="flex items-start gap-2  flex-col">
            {nav_buttons?.items?.map((button: INavigationButton) => {
              return (
                <Link
                  href={`/#${button?.to}`}
                  key={button?.id}
                  className="uppercase "
                >
                  {button?.name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Legal */}
        <div className="flex gap-4 flex-col">
          <p className=" font-semibold uppercase">{nav_legal_buttons?.title}</p>
          <div className="flex items-start gap-2  flex-col">
            <LegalWrapper title="Privacy Policy">
              {' '}
              <PrivacyPolicy />
            </LegalWrapper>
            <LegalWrapper title="Terms and Conditions">
              {' '}
              <TermsAndConditions />
            </LegalWrapper>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-4 flex-col">
          <p className=" font-semibold uppercase">
            {nav_social_buttons?.title}
          </p>
          <div className="flex flex-col gap-4">
            <div>{nav_social_buttons?.items[0]?.value}</div>
            <div className="flex items-center gap-4 ">
              {nav_social_buttons?.items?.map(
                (button: ISocialButton) =>
                  button?.isSocial && (
                    <SvgFinder
                      key={button?.id}
                      identifier={button?.identifier}
                      size={20}
                      className={`fill-foreground `}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-[1000px]:justify-start w-full flex justify-center">
        {new Date().getFullYear()} &#169; All rights reserved.{' '}
      </div>
    </div>
  );
}
