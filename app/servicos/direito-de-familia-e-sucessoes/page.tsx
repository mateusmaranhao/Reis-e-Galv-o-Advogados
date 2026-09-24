import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, FIRM_DATA } from '@/lib/site-data';
import ServiceDetailView from '@/components/ServiceDetailView';

const SERVICE_SLUG = 'direito-de-familia-e-sucessoes';

export const metadata: Metadata = {
  title: 'Direito de Família e Sucessões em Campinas | Reis Galvão Advocacia',
  description:
    'Orientação jurídica em Direito de Família e Sucessões em Campinas. Divórcio, inventário, partilha e planejamento sucessório com acolhimento e técnica.',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/servicos/${SERVICE_SLUG}/`,
  },
  openGraph: {
    title: 'Direito de Família e Sucessões em Campinas | Reis Galvão Advocacia',
    description:
      'Orientação jurídica em Direito de Família e Sucessões em Campinas. Inventário judicial e extrajudicial, divórcios e gestão patrimonial preventiva.',
    url: `${FIRM_DATA.baseUrl}/servicos/${SERVICE_SLUG}/`,
  },
};

export default function DireitoFamiliaSucessoesPage() {
  const service = SERVICES.find((s) => s.slug === SERVICE_SLUG);
  if (!service) notFound();

  return <ServiceDetailView service={service} />;
}
