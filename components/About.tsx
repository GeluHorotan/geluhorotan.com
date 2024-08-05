import about_locale from '@locale/en/about_locale.json';
import SvgFinder from '@components/svgs/SvgFinder';
import Image from 'next/image';
import { NoiseBackground } from '@components/NoiseBackground';
import { SectionTitle } from './SectionTitle';

export function About() {
  const { about_list } = about_locale;
  return (
    <section
      id="about"
      className="w-full px-14  max-[1200px]:px-7 max-w-8xl  flex items-center justify-center text-5xl font-bold self-center  "
    >
      <div className="flex flex-col items-center justify-center gap-20 w-full">
        <SectionTitle
          desc="Your trust is paramount, and I'm committed to delivering results
        that exceed your expectations."
        >
          {' '}
          You&apos;re in <br /> <span className="text-primary">safe hands</span>
        </SectionTitle>

        <div className="flex items-center justify-between w-full max-[900px]:flex-col-reverse max-[900px]:justify-center  max-[900px]:gap-20 ">
          <div className="flex flex-col gap-14 w-[45%]  max-[900px]:w-[70%] self-start max-md:w-full">
            {about_list?.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="p-2 bg-primary rounded-xl w-max">
                  <SvgFinder
                    identifier={item?.identifier}
                    className="fill-background"
                    size={24}
                  />
                </div>
                <h6>{item?.title}</h6>
                <p>{item?.desc}</p>
              </div>
            ))}
          </div>
          <div className=" w-1/2 max-[900px]:w-full   flex items-center justify-end ">
            <NoiseBackground className="p-12 max-sm:p-6  bg-pink-800">
              <Image
                src={
                  'https://api.microlink.io/?url=https%3A%2F%2Frehabsportstherapy.co.uk&screenshot=true&embed=screenshot.url'
                }
                alt="The Sinners Project"
                width={1280}
                height={720}
                className=" rounded-xl w-full h-full"
              />
            </NoiseBackground>
          </div>
        </div>
      </div>
    </section>
  );
}
