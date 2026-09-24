import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, FIRM_DATA } from '@/lib/site-data';
import ServiceDetailView from '@/components/ServiceDetailView';

const SERVICE_SLUG = 'direito-bancario';

export const metadata: Metadata = {
  title: 'Direito Bancário em Campinas | Reis Galvão Advocacia',
  description:
    'Orientação jurídica em Direito Bancário em Campinas. Conheça a atuação do Reis Galvão Advocacia e fale com um advogado sobre contratos, dívidas e financiamentos.',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/servicos/${SERVICE_SLUG}/`,
  },
  openGraph: {
    title: 'Direito Bancário em Campinas | Reis Galvão Advocacia',
    description:
      'Orientação jurídica em Direito Bancário em Campinas. Revisão de contratos, cobranças e renegociação de dívidas com foco na segurança patrimonial.',
    url: `${FIRM_DATA.baseUrl}/servicos/${SERVICE_SLUG}/`,
  },
};

export default function DireitoBancarioPage() {
  const service = SERVICES.find((s) => s.slug === SERVICE_SLUG);
  if (!service) notFound();

  return <ServiceDetailView service={service} />;
}
