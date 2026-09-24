import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ShieldAlert, Scale, HelpCircle } from 'lucide-react';
import { ServiceArea, FIRM_DATA } from '@/lib/site-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import ContactForm from '@/components/ContactForm';
import { getFaqSchema } from '@/lib/seo';

interface ServiceDetailViewProps {
  service: ServiceArea;
}

export default function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const faqSchema = getFaqSchema(service.faq);

  return (
    <div className="bg-[#181818] min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="border-b border-[#313C42]/60 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Áreas de Atuação', href: '/servicos/' },
              { label: service.title },
            ]}
          />
        </div>
      </div>

      {/* 1. HERO SECTION DA ÁREA */}
      <section className="py-16 sm:py-24 border-b border-[#313C42] bg-gradient-to-b from-[#141414] to-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
              <span className="w-6 h-[1px] bg-[#D9AB0F] inline-block" />
              <span>{service.heroTag}</span>
            </div>

            <h1 className="text-sm sm:text-base text-[#FFFFFF]/70 tracking-wide font-sans font-normal">
              {service.heroH1}
            </h1>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.14]">
              {service.heroH2}
            </h2>

            <p className="text-base sm:text-lg text-[#FFFFFF]/80 leading-relaxed font-sans max-w-3xl pt-2">
              {service.heroSubtext}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={FIRM_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
              >
                <span>Fale com um advogado</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#formulario"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#313C42] hover:border-white text-white text-xs uppercase tracking-widest px-8 py-4 transition-colors font-medium"
              >
                <span>Solicitar contato por formulário</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O QUE É ESTA ÁREA */}
      <section className="py-16 lg:py-20 border-b border-[#313C42] bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9AB0F]">
                COMPREENDENDO A MATÉRIA
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium">
                O que é {service.title}
              </h2>
              <p className="text-base text-[#FFFFFF]/80 leading-relaxed">
                {service.whatIs}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#181818] border border-[#313C42] p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-lg text-white font-medium">
                Aspectos centrais da atuação:
              </h3>
              <ul className="space-y-3 text-sm text-[#FFFFFF]/75">
                {service.whatIsDetails.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D9AB0F] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SITUAÇÕES COMUNS ATENDIDAS */}
      <section className="py-16 lg:py-20 border-b border-[#313C42] bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9AB0F]">
              CASOS FREQUENTES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium">
              Situações comuns atendidas pelo escritório em Campinas
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/70">
              Conheça os principais cenários em que nossos clientes procuram orientação jurídica preventiva e contenciosa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.situations.map((sit, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#121212] border border-[#313C42] p-6 space-y-3 hover:border-[#D9AB0F]/60 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#D9AB0F]/10 border border-[#D9AB0F]/30 flex items-center justify-center text-[#D9AB0F] text-xs font-mono font-bold">
                  {sIdx + 1}
                </div>
                <p className="text-sm text-[#FFFFFF]/85 leading-relaxed font-sans">
                  {sit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA A ATUAÇÃO (4 STEPS) */}
      <section className="py-16 lg:py-20 border-b border-[#313C42] bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9AB0F]">
              PASSO A PASSO
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium">
              Como funciona a condução do seu caso
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/70">
              {service.howWorks}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howWorksSteps.map((stepItem, stIdx) => (
              <div
                key={stIdx}
                className="bg-[#181818] border border-[#313C42] p-6 space-y-3"
              >
                <span className="font-serif text-2xl text-[#D9AB0F] font-semibold">
                  {stepItem.step}
                </span>
                <h3 className="font-serif text-lg text-white font-medium">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFFFFF]/75 leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POR QUE BUSCAR ORIENTAÇÃO PROFISSIONAL */}
      <section className="py-16 lg:py-20 border-b border-[#313C42] bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9AB0F]">
                SEGURANÇA JURÍDICA
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium leading-tight">
                Por que buscar orientação profissional especializada
              </h2>
              <p className="text-sm sm:text-base text-[#FFFFFF]/75 leading-relaxed">
                {service.whySeek}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {service.whySeekPoints.map((pt, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-[#121212] border border-[#313C42] p-6 space-y-2"
                >
                  <h3 className="font-serif text-lg text-white font-medium">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-[#FFFFFF]/70 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMO O ESCRITÓRIO ATUA */}
      <section className="py-16 lg:py-20 border-b border-[#313C42] bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9AB0F]">
              POSTURA & TÉCNICA
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium">
              Como o Reis Galvão Advocacia atua nesta área
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/75">
              {service.howFirmActs}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howFirmActsPoints.map((act, aIdx) => (
              <div
                key={aIdx}
                className="bg-[#181818] border border-[#313C42] p-6 space-y-3 hover:border-[#D9AB0F]/50 transition-colors"
              >
                <div className="w-2 h-2 bg-[#D9AB0F]" />
                <h3 className="font-serif text-lg text-white font-medium">
                  {act.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFFFFF]/70 leading-relaxed">
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ DA ÁREA */}
      <section className="py-16 lg:py-20 border-b border-[#313C42] bg-[#181818]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9AB0F]">
              DÚVIDAS SOBRE {service.title.toUpperCase()}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium">
              Perguntas frequentes
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/70">
              Respostas claras sobre os aspectos práticos da matéria jurídica.
            </p>
          </div>

          <FaqAccordion items={service.faq} initiallyOpenIndex={0} />
        </div>
      </section>

      {/* 8. CONTATO & FORMULÁRIO */}
      <section id="formulario" className="py-16 lg:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9AB0F]">
                ORIENTAÇÃO EM CAMPINAS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-tight">
                Apresente seu caso sobre {service.title}
              </h2>
              <p className="text-sm text-[#FFFFFF]/75 leading-relaxed">
                Preencha o formulário seguro com um resumo da sua dúvida ou acione nossa equipe diretamente pelo canal do WhatsApp para agilidade.
              </p>
              <div className="pt-2">
                <a
                  href={FIRM_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs uppercase tracking-widest px-6 py-3.5 transition-colors"
                  aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
                >
                  <span>Atendimento rápido no WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#181818] border border-[#313C42] p-6 sm:p-8 shadow-xl">
              <ContactForm defaultService={service.title} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
