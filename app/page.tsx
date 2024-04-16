import { FloatingPhone } from '@components/FloatingPhone';
import { Button } from '@components/ui/Button';

export default function Home() {
  return (
    <div className="w-full max-w-8xl ">
      <div className="w-full h-screen  flex items-center justify-between gap-40 text-5xl font-bold">
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
        <FloatingPhone></FloatingPhone>
      </div>
      <div className="w-full h-screen bg-blue-300 flex items-center justify-center text-5xl font-bold">
        2
      </div>
      <div className="w-full h-screen bg-blue-400 flex items-center justify-center text-5xl font-bold">
        3
      </div>
      <div className="w-full h-screen bg-blue-500 flex items-center justify-center text-5xl font-bold">
        4
      </div>
    </div>
  );
}
