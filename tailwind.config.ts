import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '87.5rem',
      },
      colors: {
        released: 'var(--color-released)',
        mvp: 'var(--color-mvp)',
        development: 'var(--color-development)',
      },
    },
  },
  plugins: [
    // createThemes({
    //   dark: {
    //     primary: '#1A1D21',
    //     secondary: '#F7F3F4',
    //     accent: '#578EF8',
    //   },
    //   light: {
    //     primary: '#F7F3F4',
    //     secondary: '#1A1D21',
    //     accent: '#125AE1',
    //   },
    // }),
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#1A1D21',
            foreground: '#F7F3F4',
            primary: {
              DEFAULT: '#578EF8',
              foreground: '#1A1D21',
            },
          },
        },
        light: {
          colors: {
            background: '#F7F3F4',
            foreground: '#1A1D21',
            primary: {
              DEFAULT: '#125AE1',
              foreground: '#F7F3F4',
            },
          },
        },
      },
    }),
  ],
};
export default config;
