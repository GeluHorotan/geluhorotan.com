import SvgFinder from '@components/svgs/SvgFinder';
import contact_locale from '@locale/en/contact_locale.json';

import { ContactForm } from '@components/ContactForm';
import { NoiseBackground } from '@components/NoiseBackground';

export function Contact() {
  const { contact_links } = contact_locale;
  return (
    <section className=" w-full  max-w-8xl  flex items-center justify-center self-center">
      <NoiseBackground>
        <div
          style={{
            boxShadow:
              '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)',
          }}
          className="px-28 z-20 relative py-8 bg-background rounded-xl flex gap-20 "
        >
          <ContactForm />
          <div className="w-1/2  justify-between  flex flex-col gap-8 ">
            <div className="flex gap-8 flex-col  ">
              <div className="flex gap-4 flex-col ">
                <span className="text-[27px] font-semibold">Get in touch!</span>
                <p>
                  Let&apos;s build something amazing together! <br /> Drop me a
                  message or contact me through email and I&apos;ll get back to
                  you as soon as possible.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2  w-full gap-4  ">
              {contact_links?.map((link, index) => {
                return (
                  <div
                    className={`py-4 px-8 ${index === 0 || index + 1 === contact_links.length ? 'col-span-2' : ''}   rounded-xl bg-neutral flex items-center gap-4 overflow-hidden `}
                    key={link?.identifier}
                  >
                    <SvgFinder
                      identifier={link.identifier}
                      size={32}
                      className="fill-foreground "
                    />
                    <div className="flex flex-col text-[#777] font-medium ">
                      <span className="text-base">{link?.name}</span>
                      <span className="text-[13px] ">{link?.id}</span>
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
