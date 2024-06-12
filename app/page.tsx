import { About } from '@components/About';
import { Hero } from '@components/Hero';

export default function Home() {
  return (
    <div className="w-full max-w-8xl ">
      <Hero />
      <div className="w-full flex flex-col gap-36">
        <About />
        <div className="w-full h-screen bg-blue-400 flex items-center justify-center text-5xl font-bold">
          3
        </div>
        <div className="w-full h-screen bg-blue-500 flex items-center justify-center text-5xl font-bold">
          4
        </div>
      </div>
    </div>
  );
}
