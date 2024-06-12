import { About } from '@components/About';
import { Hero } from '@components/Hero';
import { Projects } from '@components/Projects';

export default function Home() {
  return (
    <div className="w-full max-w-8xl ">
      <Hero />
      <div className="w-full flex flex-col gap-36">
        <About />
        <Projects />
        <div className="w-full h-screen bg-blue-500 flex items-center justify-center text-5xl font-bold">
          4
        </div>
      </div>
    </div>
  );
}
