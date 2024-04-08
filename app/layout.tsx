import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@app/globals.css';

// Components
import { Header } from '@components/navigation/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>
        <main className="max-w-8xl">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
