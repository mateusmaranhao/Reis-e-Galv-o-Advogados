import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, FIRM_DATA } from '@/lib/site-data';
import ServiceDetailView from '@/components/ServiceDetailView';

const SERVICE_SLUG = 'direito-previdenciario';

export const metadata: Metadata = {
  title: 'Direito Previdenciário em Campinas | Reis Galvão Advocacia',
  description:
    'Orientação jurídica em Direito Previdenciário em Campinas. Planejamento de aposentadoria, benefícios do INSS, auxílios e recursos administrativos.',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/servicos/${SERVICE_SLUG}/`,
  },
  openGraph: {
    title: 'Direito Previdenciário em Campinas | Reis Galvão Advocacia',
    description:
      'Planejamento de aposentadoria e requerimentos perante o INSS e Justiça Federal em Campinas. Análise técnica de tempo especial e transições.',
    url: `${FIRM_DATA.baseUrl}/servicos/${SERVICE_SLUG}/`,
  },
};

export default function DireitoPrevidenciarioPage() {
  const service = SERVICES.find((s) => s.slug === SERVICE_SLUG);
  if (!service) notFound();

  return <ServiceDetailView service={service} />;
}
