import { About } from '@components/About';
import { Contact } from '@components/Contact';
import { Hero } from '@components/Hero';
import { Projects } from '@components/Projects';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center ">
      <Hero />
      <div className="w-full flex flex-col gap-36  ">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
