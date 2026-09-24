import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, FIRM_DATA } from '@/lib/site-data';
import ServiceDetailView from '@/components/ServiceDetailView';

const SERVICE_SLUG = 'direito-trabalhista';

export const metadata: Metadata = {
  title: 'Direito Trabalhista em Campinas | Reis Galvão Advocacia',
  description:
    'Orientação jurídica em Direito Trabalhista em Campinas. Verbas rescisórias, horas extras, rescisão indireta e relações de trabalho no polo de Campinas.',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/servicos/${SERVICE_SLUG}/`,
  },
  openGraph: {
    title: 'Direito Trabalhista em Campinas | Reis Galvão Advocacia',
    description:
      'Orientação trabalhista em Campinas perante o TRT da 15ª Região. Defesa técnica em verbas de rescisão, pejotização e horas extraordinárias.',
    url: `${FIRM_DATA.baseUrl}/servicos/${SERVICE_SLUG}/`,
  },
};

export default function DireitoTrabalhistaPage() {
  const service = SERVICES.find((s) => s.slug === SERVICE_SLUG);
  if (!service) notFound();

  return <ServiceDetailView service={service} />;
}
