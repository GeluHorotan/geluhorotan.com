import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@app/globals.css';

// Components
import { Header } from '@components/navigation/Header';
import { Providers } from '@components/Providers';
import { Footer } from '@components/navigation/Footer';
import { siteConfig } from '@config/Site';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const generateMetadata = async () => {
  return {
    title: {
      template: `${siteConfig.siteName} | %s`,
      default: siteConfig.siteName,
    },
    description: siteConfig.description,
    // TO DO Opengraph
    // openGraph: {
    //   title: siteConfig.siteName,
    //   description: siteConfig.description,
    //   url: process.env.NEXT_PUBLIC_SITE_URL,
    //   siteName: siteConfig.siteName,
    //   images: [
    //     {
    //       url: '',
    //       width: '',
    //       height: '',
    //     },
    //   ],
    //   type: 'website',
    // },
  };
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={poppins.className}>
        <Providers>
          {' '}
          <main className="flex flex-col items-center justify-center  bg-background text-foreground">
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
