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
        released: 'var(--color-released)',
        mvp: 'var(--color-mvp)',
        development: 'var(--color-development)',
        neutral: 'var(--color-neutral)',

        // Theme
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        primaryForeground: 'var(--color-primaryForeground)',
      },
    },
  },
  plugins: [
    // nextui({
    //   themes: {
    //     dark: {
    //       colors: {
    //         background: '#1A1D21',
    //         foreground: '#F7F3F4',
    //         primary: {
    //           DEFAULT: '#578EF8',
    //           foreground: '#1A1D21',
    //         },
    //       },
    //     },
    //     light: {
    //       colors: {
    //         background: '#F7F3F4',
    //         foreground: '#1A1D21',
    //         primary: {
    //           DEFAULT: '#125AE1',
    //           foreground: '#F7F3F4',
    //         },
    //       },
    //     },
    //   },
    // }),
  ],
};
export default config;
