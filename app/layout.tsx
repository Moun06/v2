import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Super Serrurier - Urgence 24h/24 à Nice | Dépannage Express en 15 min',
  description: 'Serrurier en urgence à Nice ? Intervention rapide en moins de 15 min pour ouverture de porte, changement de serrure et installation de porte blindée. Contactez-nous 24h/24 et 7j/7 au 06 99 06 06 99 !',
  alternates: {
    canonical: 'https://super-serrurier.fr',
  },
  openGraph: {
    title: 'Super Serrurier - Urgence 24h/24 à Nice | Dépannage Express en 15 min',
    description: 'Serrurier en urgence à Nice ? Intervention rapide en moins de 15 min pour ouverture de porte, changement de serrure et installation de porte blindée. Contactez-nous 24h/24 et 7j/7 au 06 99 06 06 99 !',
    url: 'https://super-serrurier.fr',
    siteName: 'Super Serrurier',
    images: [
      {
        url: 'https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/Super-Serrurier.png',
        width: 1200,
        height: 630,
        alt: 'Super Serrurier - Service de serrurerie en urgence',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super Serrurier - Urgence 24h/24 à Nice | Dépannage Express en 15 min',
    description: 'Serrurier en urgence à Nice ? Intervention rapide en moins de 15 min pour ouverture de porte, changement de serrure et installation de porte blindée. Contactez-nous 24h/24 et 7j/7 au 06 99 06 06 99 !',
    images: ['https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/Super-Serrurier.png'],
  },
  icons: {
    icon: 'https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/superserrurier/favicon.ico',
    shortcut: 'https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/superserrurier/favicon.ico',
    apple: 'https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/superserrurier/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://super-serrurier.fr" />
        <link rel="icon" href="https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/superserrurier/favicon.ico" />
        <link rel="shortcut icon" href="https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/superserrurier/favicon.ico" />
        <link rel="apple-touch-icon" href="https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/superserrurier/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
