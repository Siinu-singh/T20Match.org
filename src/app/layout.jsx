import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import NewsletterSection from '@/components/NewsletterSection';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://t20match.org'),
  title: {
    default: 'T20 Match - Live Scores, News & Analysis',
    template: '%s | T20 Match',
  },
  description: 'Your ultimate destination for live T20 cricket scores, match schedules, team stats, and in-depth analysis. Stay updated with the fastest ball-by-ball coverage.',
  keywords: ['T20', 'cricket', 'live scores', 'match analysis', 'T20Match.org'],
  robots: 'index, follow, noodp',
  openGraph: {
    title: 'T20 Match - Live Scores, News & Analysis',
    description: 'The best place for live T20 cricket action.',
    url: 'https://t20match.org',
    siteName: 'T20 Match',
    images: [
      {
        url: 'https://t20match.org/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T20 Match - Live Scores, News & Analysis',
    description: 'The best place for live T20 cricket action.',
    images: ['https://t20match.org/twitter-image.png'],
  },
};


export default function RootLayout({
  children,
}) {
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="#FFC107" d="M12 12c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" /><path fill="#E0E0E0" d="M12 12c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" /><path fill="#D1C4E9" d="M16.95 6c0-1.22-.44-2.33-1.17-3.21-1.27 1.48-3.23 2.4-5.43 2.4-.46 0-.9-.05-1.35-.13 1.15 2.16 3.54 3.65 6.24 3.65.42 0 .83-.04 1.23-.11A5.95 5.95 0 0016.95 6z" /><path fill="#FF9800" d="M11 24h2V11h-2v13z" /><path fill="#FFC107" d="M11 24h2V11h-2v13z" /><path fill="#FF9800" d="M15 24h2V13h-2v11z" /><path fill="#FF5722" d="M15 17h2v-2h-2v2z" /><path fill="#FFC107" d="M15 24h2V13h-2v11z" /><path fill="#FF5722" d="M15 17h2v-2h-2v2z" /><path fill="#FF9800" d="M7 24h2V13H7v11z" /><path fill="#FFC107" d="M7 24h2V13H7v11z" /><path fill="#FF5722" d="M7 17h2v-2H7v2z" /><path fill="#FF9800" d="M16.4 4.5l-3.56.89.89 3.56 3.56-.89-.89-3.56z" /><path fill="#FFC107" d="M16.4 4.5l-3.56.89.89 3.56 3.56-.89-.89-3.56z" /><path fill="#FF9800" d="M19.14 4.04l-1.06 1.06-2.12-.42.42-2.12 1.06-1.06.85.85.85.85z" /><path fill="#FF9800" d="M11.97 8.35l-1.06 1.06-.42-2.12 2.12-.42-1.06 1.06z" /><path fill="#FF9800" d="M7.6 4.5l3.56.89-.89 3.56-3.56-.89.89-3.56z" /><path fill="#FFC107" d="M7.6 4.5l3.56.89-.89 3.56-3.56-.89.89-3.56z" /><path fill="#FF9800" d="M4.86 4.04l1.06 1.06 2.12-.42-.42-2.12-1.06-1.06-.85.85-.85.85z" /><path fill="#FF9800" d="M12.03 8.35l1.06 1.06.42-2.12-2.12-.42 1.06 1.06z" /></g></svg>`;

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="icon" href={`data:image/svg+xml,${encodeURIComponent(faviconSvg)}`} />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container mx-auto px-6 sm:px-10 lg:px-16 py-8">
              {children}
          </main>
          <NewsletterSection />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
