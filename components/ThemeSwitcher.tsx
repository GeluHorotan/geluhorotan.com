'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// SVG
import { Sun } from '@components/svgs/SunIcon';
import { Moon } from '@components/svgs/MoonIcon';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className=" flex items-center justify-center">
      {resolvedTheme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <Sun className="fill-foreground" />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')}>
          <Moon className="fill-foreground" />
        </button>
      )}
    </div>
  );
}
