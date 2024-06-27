import { submitContactForm } from '@data/submitContactForm';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Textarea } from './ui/Textarea';
import { cn } from '@lib/utils';
import SvgFinder from './svgs/SvgFinder';
import contact_locale from '@locale/en/contact_locale.json';

interface INoise {
  className?: string;
}

const Noise = ({ className }: INoise) => {
  return (
    <div
      className={cn(
        'absolute z-10 inset-0 w-full h-full  transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]',
        className
      )}
      style={{
        backgroundImage: 'url(/noise.webp)',
        backgroundSize: '30%',
      }}
    ></div>
  );
};

export function Contact() {
  const { contact_links } = contact_locale;
  return (
    <section className=" w-full  max-w-8xl  flex items-center justify-center self-center">
      <div className="w-full bg-indigo-800 relative rounded-xl p-20 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]">
        <Noise className="rounded-xl"></Noise>

        <div
          style={{
            boxShadow:
              '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)',
          }}
          className="px-28 z-20 relative py-8 bg-background rounded-xl flex gap-20 "
        >
          <form
            action={submitContactForm}
            className=" w-1/2 flex flex-col items-start gap-4"
          >
            <div className="flex flex-col gap-3 w-full">
              <Label htmlFor="full_name">Full name</Label>
              <Input
                type="text"
                id="full_name"
                placeholder="Gelu Horotan"
                required
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="geluhorotan@streamlinedsolutions.com"
                required
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="phone"
                id="phone"
                placeholder="+40 7543 742"
                required
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="subject"
                id="subject"
                placeholder="B2B React Project"
                required
              />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Write your thoughts here."
                required
              />
            </div>
            <Button className="w-full" type="submit">
              Send message
            </Button>
          </form>
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
                      className="fill-foreground"
                    />
                    <div className="flex flex-col text-[#777] font-medium ">
                      <span className="">{link?.name}</span>
                      <span className="text-[13px] ">{link?.id}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
