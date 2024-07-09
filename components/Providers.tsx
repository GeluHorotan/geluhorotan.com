'use client';
import { ThemeProvider } from 'next-themes';

interface IProviders {
  children: React.ReactNode;
}
export function Providers({ children }: IProviders) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
