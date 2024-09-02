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
      template: `${siteConfig.siteTitle} | %s`,
      default: siteConfig.siteTitle,
    },
    description: siteConfig.description,
    openGraph: {
      title: {
        template: `${siteConfig.siteTitle} | %s`,
        default: siteConfig.siteTitle,
      },
      description: siteConfig.description,
      url: process.env.SITE_URL,
      siteName: siteConfig.siteName,
      images: [
        {
          url: `${process.env.SITE_URL}/opengraph-image.png`,
          width: 1280,
          height: 628,
        },
      ],
      locale: siteConfig.locale,
      type: siteConfig.type,
    },
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
