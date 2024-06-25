// import about_locale from '@locale/en/about_locale.json';
// import SvgFinder from './svgs/SvgFinder';
import Image from 'next/image';
import { WobbleCard } from './aceternity-ui/WobbleCard';

export function About() {
  // const { about_list } = about_locale;
  return (
    <section className="w-full  max-w-8xl  flex items-center justify-center text-5xl font-bold self-center ">
      {/* <div className="flex flex-col items-center justify-center gap-20 w-full">
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
          <div className="flex flex-col gap-14 w-[40%] ">
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
          <div className=" h-[40rem] w-[50%]  flex items-center justify-end "></div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Real-World Applications
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Emphasizing user-centric design, my experience entails crafting
              applications tailored to various user demographics, prioritizing
              both performance and accessibility.
            </p>
          </div>
          <Image
            src="/chronicles.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Embracing Complex Challenges
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Embracing challenges as opportunities for growth and innovation, I
              tackle complex problems by applying strategic thinking and
              creativity, overcoming obstacles along the way.
            </p>
          </div>
          <Image
            src="/thesinners.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
}
