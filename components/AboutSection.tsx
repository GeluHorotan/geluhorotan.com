import Image from 'next/image';

export function AboutSection() {
  return (
    <div className="w-full h-screen max-w-8xl  flex items-center justify-center text-5xl font-bold">
      <div className="flex flex-col items-center justify-center gap-20 w-full">
        <div className="flex gap-4 flex-col items-center justify-center w-1/2  text-center">
          <h2 className="w-1/2">You&apos;re in safe hands</h2>
          <p className="w-1/2">
            Your trust is paramount, and I&apos;m committed to delivering
            results that exceed your expectations.
          </p>
        </div>
        {/* ---------- */}
        <div className="flex items-center justify-between  w-full">
          <div className="flex flex-col gap-8 w-[40%]">
            <div className="flex flex-col gap-4">
              <div>T</div>
              <h6>Real-World Applications</h6>
              <p>
                Emphasizing user-centric design, my experience entails crafting
                applications tailored to various user demographics, prioritizing
                both performance and accessibility.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h6>Real-World Applications</h6>
              <p>
                Emphasizing user-centric design, my experience entails crafting
                applications tailored to various user demographics, prioritizing
                both performance and accessibility.
              </p>
            </div>
          </div>
          <Image src="/gitted.png" width={864} height={576} alt="test2"></Image>
        </div>
      </div>
    </div>
  );
}
