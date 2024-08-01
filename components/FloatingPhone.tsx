'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
export function FloatingPhone() {
  return (
    <div
      style={{
        transformStyle: 'preserve-3d',
        transform: 'rotateY(-30deg) rotateX(15deg)',
      }}
      className="rounded-[24px] bg-primary"
    >
      <motion.div
        initial={{
          transform: 'translateZ(8px) translateY(-2px)',
        }}
        animate={{
          transform: 'translateZ(32px) translateY(-8px)',
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'easeInOut',
        }}
        //  max-md:h-80 max-md:w-40 - responsive size
        className="relative h-96 w-56 max-md:h-[22rem] max-md:w-[12rem]  rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
}

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <Image src="/3556.png" fill alt="test"></Image>
    </div>
  );
};
