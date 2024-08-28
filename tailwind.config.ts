import type { Config } from 'tailwindcss';

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
        red: 'var(--color-red)',
        blue: 'var(--color-blue)',
        green: 'var(--color-green)',
        neutral: 'var(--color-neutral)',

        // Theme
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        primaryForeground: 'var(--color-primaryForeground)',
      },
    },
  },
  plugins: [],
};
export default config;
