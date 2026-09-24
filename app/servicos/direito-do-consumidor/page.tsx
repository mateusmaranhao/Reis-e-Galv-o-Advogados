import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, FIRM_DATA } from '@/lib/site-data';
import ServiceDetailView from '@/components/ServiceDetailView';

const SERVICE_SLUG = 'direito-do-consumidor';

export const metadata: Metadata = {
  title: 'Direito do Consumidor em Campinas | Reis Galvão Advocacia',
  description:
    'Orientação e defesa em Direito do Consumidor em Campinas. Produtos defeituosos, serviços com vício, negativação indevida e reparação de danos.',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/servicos/${SERVICE_SLUG}/`,
  },
  openGraph: {
    title: 'Direito do Consumidor em Campinas | Reis Galvão Advocacia',
    description:
      'Defesa dos direitos do consumidor em Campinas. Falhas em serviços essenciais, problemas com planos de saúde e negativações indevidas.',
    url: `${FIRM_DATA.baseUrl}/servicos/${SERVICE_SLUG}/`,
  },
};

export default function DireitoConsumidorPage() {
  const service = SERVICES.find((s) => s.slug === SERVICE_SLUG);
  if (!service) notFound();

  return <ServiceDetailView service={service} />;
}
