import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FIRM_DATA, SERVICES } from '@/lib/site-data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Áreas de Atuação | Reis Galvão Advocacia em Campinas',
  description:
    'Diretório de áreas de atuação do Reis Galvão Advocacia em Campinas/SP: Direito Bancário, Família e Sucessões, Direito do Consumidor, Trabalhista e Previdenciário.',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/servicos/`,
  },
};

export default function ServicosIndexPage() {
  return (
    <div className="bg-[#181818] min-h-screen text-white">
      {/* Breadcrumbs */}
      <div className="border-b border-[#313C42]/60 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Áreas de Atuação' }]} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 sm:py-24 border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
              ÁREAS DE ATUAÇÃO • CAMPINAS/SP
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-tight">
              Orientação jurídica especializada
            </h1>
            <p className="text-base sm:text-xl text-[#FFFFFF]/80 leading-relaxed font-sans pt-2">
              Conheça as áreas de atuação do escritório Reis Galvão Advocacia em Campinas e região, com soluções personalizadas e foco na segurança do cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 lg:py-24 bg-[#141414] border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES.map((service, idx) => (
            <div
              key={service.slug}
              id={service.slug}
              className="bg-[#181818] border border-[#313C42] p-8 lg:p-12 hover:border-[#D9AB0F]/60 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl text-[#D9AB0F] font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#FFFFFF]/50 font-sans">
                      Campinas • SP
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                    {service.heroH1}
                  </h2>

                  <p className="text-sm sm:text-base text-[#FFFFFF]/80 leading-relaxed">
                    {service.heroSubtext}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/servicos/${service.slug}/`}
                      className="inline-flex items-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs uppercase tracking-widest px-6 py-3 transition-colors"
                    >
                      <span>Acessar página completa de {service.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#121212] border border-[#313C42]/80 p-6 space-y-3">
                  <h3 className="text-xs uppercase tracking-widest text-[#D9AB0F] font-semibold">
                    Demandas frequentes nesta área:
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#FFFFFF]/75">
                    {service.situations.slice(0, 4).map((sit, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D9AB0F] shrink-0 mt-0.5" />
                        <span>{sit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#181818]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
            Não encontrou sua dúvida entre as áreas acima?
          </h2>
          <p className="text-base text-[#FFFFFF]/75 max-w-xl mx-auto">
            Muitas situações jurídicas envolvem interseções entre diferentes ramos do Direito. Converse diretamente com nossos advogados para uma avaliação direcionada.
          </p>
          <div className="pt-2">
            <a
              href={FIRM_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 transition-colors"
              aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
            >
              <span>Fale com um advogado</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
