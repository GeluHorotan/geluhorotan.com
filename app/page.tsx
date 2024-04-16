import { HeroSection } from '@components/HeroSection';

export default function Home() {
  return (
    <div className="w-full max-w-8xl ">
      <HeroSection />
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
