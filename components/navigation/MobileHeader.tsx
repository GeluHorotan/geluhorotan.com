'use client';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { Menu, X } from 'lucide-react';
import SvgFinder from '@components/svgs/SvgFinder';
import {
  ISocialButton,
  INavigationButton,
} from '@customTypes/NavigationInterfaces';
import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/Drawer';
import { useState } from 'react';

interface IMobileHeader {
  buttons: INavigationButton[];
  socialButtons: ISocialButton[];
}

export function MobileHeader({ buttons, socialButtons }: IMobileHeader) {
  const [isOpen, toggleSidebar] = useState(false);
  console.log(socialButtons);
  return (
    <>
      <Drawer
        disablePreventScroll
        preventScrollRestoration={false}
        modal={false}
        onOpenChange={(open) => toggleSidebar(open)}
        direction="right"
      >
        <div className="z-50 h-16  top-0  w-full bg-background   items-center px-7  fixed justify-between max-md:flex hidden">
          <h4 className="font-bold ">G</h4>

          <div className="flex items-center gap-4 justify-center">
            <ThemeSwitcher />
            <span
              className={` cursor-pointer flex items-center rounded-lg justify-center z-50 `}
            >
              <DrawerTrigger>{isOpen ? <X /> : <Menu />}</DrawerTrigger>
            </span>
          </div>
        </div>

        <DrawerContent
          noOverlay
          className=" h-[calc(100svh-32px)] top-16  rounded-none py-14 mt-0 px-7  "
        >
          <DrawerTitle className="hidden">Navigation</DrawerTitle>
          <DrawerDescription className="hidden">
            Side navigation
          </DrawerDescription>
          <DrawerHeader className="px-0">
            <div className="flex flex-col w-full self-end h-[75%] justify-between items-start">
              <nav className=" w-full">
                <ul className="text-5xl  w-full font-bold flex flex-col gap-8">
                  {buttons?.map((button) => {
                    return (
                      <Link
                        href={`/#${button?.to}`}
                        className=" w-max"
                        key={button?.id}
                      >
                        <DrawerClose className=" flex items-start ">
                          <li className={` lowercase`}>{button?.name}.</li>
                        </DrawerClose>
                      </Link>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </DrawerHeader>
          <DrawerFooter className="self-start px-0">
            <div className="flex items-center justify-center gap-4 ">
              {socialButtons?.map((button) => {
                return (
                  button?.isSocial && (
                    <SvgFinder
                      key={button?.id}
                      identifier={button?.identifier}
                      size={20}
                      className="fill-foreground"
                    />
                  )
                );
              })}
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
