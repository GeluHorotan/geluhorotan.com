// Locale
import nav_locale from '@locale/en/nav_locale.json';
import { DesktopHeader } from '@components/navigation/DesktopHeader';
import { MobileHeader } from '@components/navigation/MobileHeader';

export function Header() {
  const { nav_buttons, nav_social_buttons } = nav_locale;
  console.log(nav_social_buttons);
  return (
    <>
      <DesktopHeader buttons={nav_buttons}></DesktopHeader>
      <MobileHeader
        socialButtons={nav_social_buttons}
        buttons={nav_buttons}
      ></MobileHeader>
    </>
  );
}
