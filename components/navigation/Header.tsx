'use client';
import { useState } from 'react';
import { ThemeSwitcher } from '@components/ThemeSwitcher';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from '@nextui-org/react';
import Link from 'next/link';

// Locale
import nav_locale from '@locale/en/nav_locale.json';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navButtons } = nav_locale;

  return (
    <Navbar
      isBlurred={false}
      className=" w-full bg-background px-0 justify-between  "
      classNames={{
        base: ' w-full ',
        wrapper: 'px-0 max-w-8xl  mx-auto',
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarContent className="max-sm:!flex-grow-0 ">
        <NavbarBrand className="sm:justify-start justify-center  flex-grow-0">
          <h2>G</h2>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {navButtons.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link className="font-medium uppercase " href={`/${item.to}`}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher></ThemeSwitcher>
      </NavbarContent>

      {/* Sidebar content */}
      <NavbarMenu className="!scrollbar-hide bg-background text-foreground w-full  py-10 px-0 justify-between ">
        <NavbarContent className="flex flex-col w-full !flex-grow-0">
          {navButtons.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="w-full  ">
              <Link
                className={`flex flex-grow uppercase flex-col gap-4 `}
                href={`/${item.to}`}
              >
                <Divider />
                <h6 className="px-4 font-medium">{item.name}</h6>
                {index + 1 === navButtons.length && <Divider />}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarContent>
        <NavbarContent className="flex-col items-start  !flex-grow-0">
          <Divider />
          <div className="flex gap-4 items-center justify-center px-4 ">
            <span>F</span>
            <span>I</span>
            <span>L</span>
          </div>
          <Divider />
        </NavbarContent>
      </NavbarMenu>
    </Navbar>
  );
}
