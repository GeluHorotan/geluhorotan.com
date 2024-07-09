import about_locale from '@locale/en/about_locale.json';
import SvgFinder from './svgs/SvgFinder';
import Image from 'next/image';
import { NoiseBackground } from './NoiseBackground';

export function About() {
  const { about_list } = about_locale;
  return (
    <section className="w-full  max-w-8xl  flex items-center justify-center text-5xl font-bold self-center ">
      <div className="flex flex-col items-center justify-center gap-20 w-full">
        <div className="flex gap-4 flex-col items-center justify-center w-1/2  text-center">
          <h2 className="w-1/2">
            You&apos;re in <br />{' '}
            <span className="text-primary">safe hands</span>
          </h2>
          <p className="w-1/2">
            Your trust is paramount, and I&apos;m committed to delivering
            results that exceed your expectations.
          </p>
        </div>

        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col gap-14 w-[45%] ">
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
          <div className=" w-1/2    flex items-center justify-end ">
            <NoiseBackground className="p-12 bg-pink-800">
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
