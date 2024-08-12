import nav_locale from '@locale/en/nav_locale.json';
import Link from 'next/link';

export function Footer() {
  const { nav_buttons, nav_social_buttons } = nav_locale;

  return (
    <div className="h-max px-14 mt-36 w-full max-w-8xl flex bg-red-700 items-start justify-between ">
      <h4 className="font-bold self-center">G</h4>
      <div className="flex gap-4 flex-col">
        <p className="font-medium">NAVIGATION</p>
        <ul className="flex items-start gap-2  flex-col">
          {nav_buttons?.map((button) => {
            return (
              <Link href={`/#${button.to}`} key={button?.id}>
                <li className="uppercase">{button?.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="flex gap-4 flex-col">
          <p className="font-medium">LEGAL</p>
          <ul className="flex items-start gap-2  flex-col">
            {nav_social_buttons?.map((button) => {
              return (
                <Link href={`/#${button.to}`} key={button?.id}>
                  <li className="uppercase">{button?.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <p>GET IN TOUCH</p>
      </div>
    </div>
  );
}
