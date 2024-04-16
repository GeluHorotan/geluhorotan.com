import { FloatingPhone } from './FloatingPhone';
import { Button } from '@components/ui/Button';

export function HeroSection() {
  return (
    <section className="w-full h-screen  flex items-center justify-between gap-40 text-5xl font-bold">
      <div className="w-1/2    flex flex-col gap-14">
        <div className="flex flex-col gap-8">
          <h1>Build apps that are efficient and scale</h1>
          <p>
            As a frontend developer, I specialised in building apps that are
            efficient and scales, with latest technologies like React,Next.js,
            Typescript, Redux and Tailwind.css
          </p>
        </div>
        <div className="w-full flex gap-4 ">
          <Button>PROJECTS</Button>
          <Button variant={'outline'}>CONTACT</Button>
        </div>
      </div>
      <FloatingPhone />
    </section>
  );
}
