import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat, Nunito, Playfair } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const montSerrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#10b981',
};

export const metadata: Metadata = {
  title: 'Grupo Six',
  description:
    'Domine seu foco com NeuroFocus Max. Suplemento natural premium que aumenta concentração, memória e elimina fadiga mental. 30 dias de garantia. Entrega rápida.',
  keywords: [
    'suplemento foco',
    'foco e memória',
    'concentração',
    'nootropicos naturais',
    'suplemento concentração',
    'NeuroFocus Max',
  ],
  authors: [{ name: 'Anderson Rodrigues de Melo' }],
  creator: 'Anderson Melo',
  publisher: 'Anderson Melo',
  category: 'Saúde',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'http://localhost:3000/',
    siteName: 'Grupo Six',
    title: 'Grupo Six | Suplemento Natural para Foco e Memória',
    description:
      'Aumenta sua concentração e memória com fórmula 100% natural. 30 dias de garantia sem riscos.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grupo Six - Suplemento para Foco',
      },
    ],
  },
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montSerrat.variable} ${nunito.variable} ${playfair.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
