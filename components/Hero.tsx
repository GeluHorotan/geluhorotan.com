'use client';

// Locale
import hero_locale from '@locale/en/hero_locale.json';

// Animation
import { FloatingPhone } from '@components/FloatingPhone';

import { Button } from '@components/ui/Button';
import Link from 'next/link';

export function Hero() {
  const { header, subHeader } = hero_locale;

  return (
    <section className="w-full h-[calc(100svh-64px)] max-md:mb-20 mt-16 flex items-center justify-center gap-80 text-5xl font-bold max-w-8xl max-[1200px]:gap-20 max-[1200px]:px-7 max-md:flex-col-reverse max-md:gap-10 ">
      <div className="w-1/2 max-[900px]:w-full   flex flex-col gap-14">
        <div className="flex flex-col gap-8 max-md:text-center">
          <h1>{header}</h1>
          <p>{subHeader}</p>
        </div>

        <div className="w-full flex gap-4 ">
          <Button className="max-md:w-1/2">
            <Link href="#projects">PROJECTS</Link>
          </Button>

          <Button className="max-md:w-1/2" variant={'outline'}>
            <Link href="#contact">CONTACT</Link>
          </Button>
        </div>
      </div>
      <FloatingPhone />
    </section>
  );
}
