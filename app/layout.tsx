import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CookieConsent from '@/components/CookieConsent';
import { FIRM_DATA } from '@/lib/site-data';
import { getLegalServiceSchema } from '@/lib/seo';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(FIRM_DATA.baseUrl),
  title: {
    default: 'Reis Galvão Advocacia | Escritório de Advocacia em Campinas/SP',
    template: '%s | Reis Galvão Advocacia',
  },
  description:
    'Escritório de advocacia em Campinas/SP. Orientação jurídica segura e estratégica em Direito Bancário, Família e Sucessões, Direito do Consumidor, Trabalhista e Previdenciário.',
  applicationName: FIRM_DATA.name,
  keywords: [
    'Advogado Campinas',
    'Advocacia Campinas SP',
    'Escritório de Advocacia Campinas',
    'Direito Bancário Campinas',
    'Inventário Campinas',
    'Divórcio Campinas',
    'Direito do Consumidor Campinas',
    'Advogado Trabalhista Campinas',
    'Direito Previdenciário Campinas INSS',
    'Reis Galvão Advocacia',
  ],
  authors: [{ name: FIRM_DATA.name, url: FIRM_DATA.baseUrl }],
  creator: FIRM_DATA.name,
  publisher: FIRM_DATA.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: FIRM_DATA.baseUrl,
    siteName: FIRM_DATA.name,
    title: 'Reis Galvão Advocacia | Escritório de Advocacia em Campinas/SP',
    description:
      'Orientação jurídica personalizada em Campinas/SP. Atuação especializada em Direito Bancário, Família e Sucessões, Consumidor, Trabalhista e Previdenciário.',
    images: [
      {
        url: '/images/og-reis-galvao.webp',
        width: 1200,
        height: 630,
        alt: 'Reis Galvão Advocacia em Campinas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reis Galvão Advocacia | Escritório de Advocacia em Campinas/SP',
    description:
      'Orientação jurídica personalizada em Campinas/SP. Atuação em Direito Bancário, Família, Consumidor, Trabalhista e Previdenciário.',
    images: ['/images/og-reis-galvao.webp'],
  },
  alternates: {
    canonical: FIRM_DATA.baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const legalServiceJsonLd = getLegalServiceSchema();

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
      </head>
      <body className="bg-[#181818] text-white min-h-screen flex flex-col font-sans selection:bg-[#D9AB0F] selection:text-black">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </body>
    </html>
  );
}
