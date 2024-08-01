import { FloatingPhone } from './FloatingPhone';
import { Button } from '@components/ui/Button';
import { FlipWords } from './aceternity-ui/FlipWords';

export function Hero() {
  const words = ['scale', 'grow', 'adapt', 'expand'];
  return (
    <section className="w-full h-[calc(100svh-64px)] mt-16   flex items-center justify-center gap-80 text-5xl font-bold max-w-8xl max-[1200px]:gap-20 max-[1200px]:px-7 max-md:flex-col-reverse max-md:gap-10  ">
      <div className="w-1/2 max-md:w-full  flex flex-col gap-14">
        <div className="flex flex-col gap-8 max-md:text-center">
          <h1>
            Build web applications <br /> that <FlipWords words={words} />{' '}
          </h1>
          <p>
            As a frontend developer, I specialised in building apps that are
            efficient and scales, with latest technologies like React,Next.js,
            Typescript, Redux and Tailwind.css
          </p>
        </div>
        <div className="w-full flex gap-4">
          <Button className="max-md:w-1/2">PROJECTS</Button>
          <Button className="max-md:w-1/2" variant={'outline'}>
            CONTACT
          </Button>
        </div>
      </div>
      <FloatingPhone />
    </section>
  );
}
