import SvgFinder from '@components/svgs/SvgFinder';
import nav_locale from '@locale/en/nav_locale.json';

import { ContactForm } from '@components/ContactForm';
import { NoiseTexture } from './NoiseTexture';
import { ISocialButton } from '@customTypes/NavigationInterfaces';

export function Contact() {
  const { nav_social_buttons } = nav_locale;
  return (
    <section
      id="contact"
      className=" w-full   max-w-8xl  flex items-center justify-center self-center px-14  max-[1200px]:px-7"
    >
      <div
        className={
          'bg-indigo-800 relative rounded-xl p-20 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] max-[1000px]:p-0 max-[1000px]:rounded-none max-[1000px]:bg-transparent w-full'
        }
      >
        <NoiseTexture className="rounded-xl max-[1000px]:hidden" />
        <div className="z-20 relative  shadow-lg max-[1000px]:shadow-none">
          <div className="max-[1000px]:p-0 max-[1000px]:rounded-none p-8 max-md:p-0 w-full bg-background rounded-xl flex gap-20 max-[800px]:gap-10 max-md:flex-col-reverse   ">
            <ContactForm />
            <div className="w-1/2 max-[1050px]:w-full  justify-center  flex flex-col gap-8 max-md:gap-4 ">
              <span className="text-[27px] font-semibold">Get in touch!</span>

              <div className="grid grid-cols-2  w-full gap-4  ">
                {nav_social_buttons?.map(
                  (button: ISocialButton, index: number) => {
                    return (
                      <div
                        className={`flex rounded-xl bg-neutral  gap-4 items-center justify-start py-4 px-8 max-[520px]:px-4  ${index === 0 || index + 1 === nav_social_buttons.length ? 'col-span-2' : 'col-span-1 max-[520px]:col-span-2 max-[1050px]:col-span-2 max-md:col-span-1 max-[1350px]:col-span-2'}    `}
                        key={button?.id}
                      >
                        <SvgFinder
                          identifier={button?.identifier}
                          size={24}
                          className="fill-foreground"
                        />
                        <div className="flex flex-col text-[#777] font-medium  ">
                          <span className="text-base  ">{button?.name}</span>
                          <span className="small   ">{button?.value}</span>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
