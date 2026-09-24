import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, CheckCircle2, Shield, BookOpen, Clock, Award } from 'lucide-react';
import { FIRM_DATA } from '@/lib/site-data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Sobre o Escritório | Reis Galvão Advocacia em Campinas',
  description:
    'Conheça o Reis Galvão Advocacia em Campinas/SP. Condução jurídica séria, responsável e personalizada nas áreas bancária, familiar, consumerista e previdenciária.',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/sobre/`,
  },
};

export default function SobrePage() {
  return (
    <div className="bg-[#181818] min-h-screen text-white">
      {/* Breadcrumb Header */}
      <div className="border-b border-[#313C42]/60 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Sobre o Escritório' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
              INSTITUCIONAL • CAMPINAS/SP
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-tight">
              Sobre o Reis Galvão Advocacia
            </h1>
            <p className="text-base sm:text-xl text-[#FFFFFF]/80 leading-relaxed font-sans pt-2">
              Advocacia orientada por rigor técnico, transparência e compromisso com o cliente em Campinas e região metropolitana.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="py-16 lg:py-24 border-b border-[#313C42] bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-base text-[#FFFFFF]/80 leading-relaxed">
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                Uma advocacia construída sobre a confiança e a proximidade
              </h2>

              <p>
                O <strong className="text-white">Reis Galvão Advocacia</strong> nasceu com a premissa de oferecer um atendimento jurídico diferenciado: longe de soluções pré-fabricadas e impessoais, priorizamos a compreensão aprofundada de cada demanda para estruturar caminhos juridicamente sólidos e viáveis.
              </p>

              <p>
                Com sede estratégica instalada no Centro de Campinas, o escritório atua tanto na prevenção e solução consensual de conflitos (por meio de notificações, negociações extrajudiciais e mediações) quanto no patrocínio de causas complexas no âmbito contencioso judicial perante as varas e tribunais paulistas.
              </p>

              <p>
                Nossa conduta profissional rejeita promessas milagrosas e falsas facilidades. Atuamos com base nas normas processuais, na jurisprudência sedimentada e na análise realista das probabilidades de êxito, garantindo que o cliente tome decisões com segurança e serenidade.
              </p>

              {/* Guiding Principles Grid */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#181818] border border-[#313C42] p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[#D9AB0F]">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold text-white text-sm">Sigilo & Privacidade</span>
                  </div>
                  <p className="text-xs text-[#FFFFFF]/70 leading-relaxed">
                    Absoluta reserva e sigilo profissional em todas as consultas e atos praticados.
                  </p>
                </div>

                <div className="bg-[#181818] border border-[#313C42] p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[#D9AB0F]">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-semibold text-white text-sm">Rigor Técnico</span>
                  </div>
                  <p className="text-xs text-[#FFFFFF]/70 leading-relaxed">
                    Atualização doutrinária e jurisprudencial contínua para defesas robustas.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] w-full border border-[#313C42] overflow-hidden shadow-2xl">
                <Image
                  src="/images/ambiente-escritorio.webp"
                  alt="Espaço corporativo do Reis Galvão Advocacia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="bg-[#181818] border border-[#313C42] p-6 space-y-3">
                <h3 className="font-serif text-lg text-white">Sede em Campinas/SP</h3>
                <p className="text-xs text-[#FFFFFF]/75 leading-relaxed">
                  Localização acessível no Centro da cidade para receber clientes presencialmente ou conduzir consultas e reuniões jurídicas via videoconferência segura.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#D9AB0F] font-semibold pt-1">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{FIRM_DATA.address.formatted}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final da página Sobre */}
      <section className="py-16 bg-[#181818]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
            Agende uma consulta jurídica
          </h2>
          <p className="text-base text-[#FFFFFF]/75 max-w-xl mx-auto">
            Apresente sua situação aos nossos advogados para receber um diagnóstico preliminar fundamentado.
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
