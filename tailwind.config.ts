import type { Config } from 'tailwindcss';
const { createThemes } = require('tw-colors');

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '87.5rem',
      },
    },
  },
  plugins: [
    createThemes({
      dark: {
        primary: '#1A1D21',
        secondary: '#F7F3F4',
        accent: '#578EF8',
      },
      light: {
        primary: '#F7F3F4',
        secondary: '#1A1D21',
        accent: '#125AE1',
      },
    }),
  ],
};
export default config;
