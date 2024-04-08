import type { Config } from 'tailwindcss';
const { createThemes } = require('tw-colors');

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [
    createThemes({
      dark: {
        surface: '#1A1D21',
        foreground: '#F7F3F4',

        accent: '#578EF8',
      },
      light: {
        surface: '#F7F3F4',
        foreground: '#1A1D21',

        accent: '#125AE1',
      },
    }),
  ],
};
export default config;
