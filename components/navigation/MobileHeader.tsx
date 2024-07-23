'use client';
import { motion, useCycle } from 'framer-motion';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { Menu, X } from 'lucide-react';
import SvgFinder from '@components/svgs/SvgFinder';
import { itemAnimation, sidebarAnimation } from '@animations/HeaderAnimations';
import { IHeaderButtons } from '@customTypes/HeaderInterfaces';
import Link from 'next/link';

interface IMobileHeader {
  buttons: IHeaderButtons[];
}

export function MobileHeader({ buttons }: IMobileHeader) {
  const [isOpen, toggleSidebar] = useCycle(false, true);

  return (
    <>
      {/* Main container */}
      <div className="h-16 top-0  w-full bg-background   items-center px-7 z-50 fixed justify-between max-md:flex hidden">
        <h4 className="font-bold">G</h4>

        <div className="flex items-center gap-4 justify-center">
          <ThemeSwitcher />
          <span
            onClick={() => toggleSidebar()}
            className={` cursor-pointer flex items-center rounded-lg justify-center z-50 `}
          >
            {isOpen ? <X /> : <Menu />}
          </span>
        </div>
      </div>
      {/* Container when sidebar is open */}
      <motion.div
        variants={sidebarAnimation}
        initial={'closed'}
        animate={isOpen ? 'open' : 'closed'}
        className={`h-[calc(100svh-32px)] flex w-full  bg-background text-primary z-40  fixed  top-16   py-14  items-center justify-start px-7`}
      >
        <div className="flex flex-col w-full self-end h-[75%] justify-between items-start">
          <nav className=" w-full">
            <ul className="text-5xl  w-full font-bold flex flex-col gap-4">
              {buttons?.map((button, i) => {
                return (
                  <Link
                    href={`/#${button?.to}`}
                    key={i}
                    onClick={() => toggleSidebar(0)}
                  >
                    <motion.li
                      whileHover={{
                        opacity: 1,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                      variants={itemAnimation}
                      className={`${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} lowercase`}
                    >
                      {button?.name}.
                    </motion.li>
                  </Link>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center justify-center gap-4 ">
            <motion.div variants={itemAnimation}>
              <SvgFinder
                identifier="twitter"
                size={20}
                className="fill-foreground"
              />
            </motion.div>
            <motion.div variants={itemAnimation}>
              <SvgFinder
                size={20}
                identifier="linkedin"
                className="fill-foreground"
              />
            </motion.div>
            <motion.div variants={itemAnimation}>
              <SvgFinder
                size={20}
                identifier="github"
                className="fill-foreground"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
