import SvgFinder from '@components/svgs/SvgFinder';
import contact_locale from '@locale/en/contact_locale.json';

import { ContactForm } from '@components/ContactForm';
import { NoiseBackground } from '@components/NoiseBackground';

export function Contact() {
  const { contact_links } = contact_locale;
  return (
    <section
      id="contact"
      className=" w-full  max-w-8xl  flex items-center justify-center px-14  max-[1200px]:px-7 self-center "
    >
      <NoiseBackground className="p-12 max-sm:p-6">
        <div className="p-8 bg-background rounded-xl flex gap-20 max-md:gap-10 max-[1050px]:flex-col-reverse  ">
          <ContactForm />
          <div className="w-1/2 max-[1050px]:w-full  justify-center  flex flex-col gap-8 max-md:gap-4 ">
            <div className="flex gap-8 flex-col  ">
              <div className="flex gap-4 flex-col ">
                <span className="text-[27px] font-semibold">Get in touch!</span>
                {/* <p>
                  Let&apos;s build something amazing together! <br /> Drop me a
                  message or contact me through email and I&apos;ll get back to
                  you as soon as possible.
                </p> */}
              </div>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-4  w-full gap-4  ">
              {contact_links?.map((link, index) => {
                return (
                  <div
                    className={`flex items-center justify-start max-md:justify-center py-4 px-8 max-md:p-3   ${index === 0 || index + 1 === contact_links.length ? 'col-span-2 max-md:col-span-1' : 'max-[1350px]:col-span-2 max-[1050px]:col-span-1  '}   rounded-xl bg-neutral flex  items-center gap-4 overflow-hidden `}
                    key={link?.identifier}
                  >
                    <SvgFinder
                      identifier={link.identifier}
                      size={24}
                      className="fill-foreground "
                    />
                    <div className="flex flex-col text-[#777] font-medium max-md:hidden ">
                      <span className="text-base  ">{link?.name}</span>
                      <span className="small   ">{link?.id}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </NoiseBackground>
    </section>
  );
}
