import { Grid } from '@components/svgs/Grid';
import { Bulb } from '@components/svgs/Bulb';
import { WorldWrapper } from '@components/globe/WorldWrapper';

export function AboutSection() {
  return (
    <div className="w-full  max-w-8xl  flex items-center justify-center text-5xl font-bold">
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
        {/* ---------- */}
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col gap-14 w-[40%] ">
            <div className="flex flex-col gap-4">
              <div className="p-2 bg-primary rounded-xl w-max">
                <Grid className="fill-background" size={24} />
              </div>
              <h6>Real-World Applications</h6>
              <p>
                Emphasizing user-centric design, my experience entails crafting
                applications tailored to various user demographics, prioritizing
                both performance and accessibility.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-2 bg-primary rounded-xl w-max">
                <Bulb className="fill-background" size={24} />
              </div>
              <h6>Embracing Complex Challenges</h6>
              <p>
                Embracing challenges as opportunities for growth and innovation,
                I tackle complex problems by applying strategic thinking and
                creativity, overcoming obstacles along the way.
              </p>
            </div>
          </div>
          <div className=" h-[40rem] w-[50%]  flex items-center justify-end ">
            {/* <Image
              src="/chronicles.webp"
              width={1280}
              height={720}
              alt="TEST"
              className=" h-full object-contain  rounded-2xl "
            /> */}
            <WorldWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}
