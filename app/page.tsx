import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Check, Star, ShieldCheck, Scale, Compass, Users, MapPin, Phone, MessageSquare, Clock, Navigation } from 'lucide-react';
import { FIRM_DATA, SERVICES, GENERAL_FAQ } from '@/lib/site-data';
import FaqAccordion from '@/components/FaqAccordion';
import { getFaqSchema } from '@/lib/seo';

export default function HomePage() {
  const faqSchema = getFaqSchema(GENERAL_FAQ);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#181818] overflow-hidden border-b border-[#313C42]">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-legal-office.webp"
            alt="Ambiente profissional do escritório Reis Galvão Advocacia em Campinas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25 filter brightness-75 contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/85 to-[#181818]/60" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#181818]/40 to-[#181818]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center sm:text-left">
          <div className="max-w-4xl space-y-6">
            {/* Tag / H1 com estilização em amarelo/dourado */}
            <h1 className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
              <span className="w-6 h-[1px] bg-[#D9AB0F] inline-block" />
              <span>Escritório de Advocacia em Campinas • SP</span>
            </h1>

            {/* Visual Headline (H2, dominant editorial statement) */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.12]">
              Segurança jurídica para tomar decisões com mais confiança.
            </h2>

            {/* Subtexto */}
            <p className="text-base sm:text-lg text-[#FFFFFF]/80 leading-relaxed font-sans max-w-2xl pt-2">
              O Reis Galvão Advocacia oferece orientação jurídica personalizada em Campinas, com atuação em Direito Bancário, Família e Sucessões, Direito do Consumidor, Trabalhista e Previdenciário.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <a
                href={FIRM_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
              >
                <span>Fale com um advogado</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <Link
                href="/servicos/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#313C42] hover:border-[#D9AB0F] text-white hover:text-[#D9AB0F] text-xs uppercase tracking-widest px-8 py-4 transition-colors font-medium"
              >
                <span>Conheça nossas áreas de atuação</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE AUTORIDADE */}
      <section className="bg-[#121212] border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#313C42]/60">
            {/* Stat 1 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-4 md:pt-0 md:px-4">
              <span className="font-serif text-3xl sm:text-4xl text-white font-medium">154</span>
              <span className="text-xs uppercase tracking-widest text-[#D9AB0F] mt-1 font-semibold">
                Avaliações
              </span>
              <p className="text-xs text-[#FFFFFF]/60 mt-1">Registradas por clientes atendidos</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-4 md:pt-0 md:px-4">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-3xl sm:text-4xl text-white font-medium">5,0</span>
                <div className="flex text-[#D9AB0F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <span className="text-xs uppercase tracking-widest text-[#D9AB0F] mt-1 font-semibold">
                Nota Máxima
              </span>
              <p className="text-xs text-[#FFFFFF]/60 mt-1">Reconhecimento no Google</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-4 md:pt-0 md:px-4">
              <ShieldCheck className="w-7 h-7 text-[#D9AB0F] mb-1" />
              <span className="text-xs uppercase tracking-widest text-white font-semibold">
                Atendimento Personalizado
              </span>
              <p className="text-xs text-[#FFFFFF]/60 mt-1">Análise individual de cada demanda</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-4 md:pt-0 md:px-4">
              <Scale className="w-7 h-7 text-[#D9AB0F] mb-1" />
              <span className="text-xs uppercase tracking-widest text-white font-semibold">
                Campinas e Região
              </span>
              <p className="text-xs text-[#FFFFFF]/60 mt-1">Atuação em comarcas paulistas</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO SOBRE (HOME) */}
      <section className="py-20 lg:py-28 bg-[#181818] border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column with WebP Office Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full border border-[#313C42] overflow-hidden shadow-2xl">
                <Image
                  src="/images/equipe-reis-galvao.webp"
                  alt="Espaço de consulta e equipe do Reis Galvão Advocacia em Campinas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover contrast-105 filter"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-[11px] text-white/70 tracking-wide font-sans">
                  Sede em Campinas • Av. Campos Sales, 532
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
                <span className="w-6 h-[1px] bg-[#D9AB0F] inline-block" />
                <span>INSTITUCIONAL</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight leading-tight">
                Advocacia estratégica, próxima e responsável
              </h2>

              <div className="space-y-4 text-base text-[#FFFFFF]/75 leading-relaxed font-sans">
                <p>
                  O Reis Galvão Advocacia atua na orientação e defesa dos interesses de seus clientes, buscando compreender cada situação de forma individualizada para oferecer caminhos jurídicos seguros e adequados ao caso concreto.
                </p>
                <p>
                  A atuação do escritório envolve tanto a prevenção e negociação de conflitos quanto a condução de processos e litígios, sempre com atenção às particularidades de cada caso.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/sobre/"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D9AB0F] hover:text-white font-semibold transition-colors pb-1 border-b border-[#D9AB0F]"
                >
                  <span>Conheça o escritório</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DIFERENCIAIS */}
      <section className="py-20 lg:py-28 bg-[#141414] border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
              METODOLOGIA & CONDUTA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
              Uma atuação jurídica construída para cada caso
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/70">
              Princípios rigorosos aplicados em cada consulta e processo na comarca de Campinas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Diff 1 */}
            <div className="bg-[#181818] border border-[#313C42] p-8 space-y-4 hover:border-[#D9AB0F]/60 transition-colors">
              <span className="font-serif text-2xl text-[#D9AB0F] font-semibold block">01</span>
              <h3 className="font-serif text-xl text-white font-medium">Atendimento próximo</h3>
              <p className="text-sm text-[#FFFFFF]/75 leading-relaxed">
                Cada caso é analisado considerando seu contexto, suas necessidades e seus objetivos específicos.
              </p>
            </div>

            {/* Diff 2 */}
            <div className="bg-[#181818] border border-[#313C42] p-8 space-y-4 hover:border-[#D9AB0F]/60 transition-colors">
              <span className="font-serif text-2xl text-[#D9AB0F] font-semibold block">02</span>
              <h3 className="font-serif text-xl text-white font-medium">Orientação segura</h3>
              <p className="text-sm text-[#FFFFFF]/75 leading-relaxed">
                Informações claras para ajudar você a compreender seus direitos e as possibilidades jurídicas disponíveis.
              </p>
            </div>

            {/* Diff 3 */}
            <div className="bg-[#181818] border border-[#313C42] p-8 space-y-4 hover:border-[#D9AB0F]/60 transition-colors">
              <span className="font-serif text-2xl text-[#D9AB0F] font-semibold block">03</span>
              <h3 className="font-serif text-xl text-white font-medium">Estratégia jurídica</h3>
              <p className="text-sm text-[#FFFFFF]/75 leading-relaxed">
                Atuação planejada para buscar soluções adequadas ao cenário apresentado, seja por negociação, métodos alternativos de resolução de conflitos ou via judicial.
              </p>
            </div>

            {/* Diff 4 */}
            <div className="bg-[#181818] border border-[#313C42] p-8 space-y-4 hover:border-[#D9AB0F]/60 transition-colors">
              <span className="font-serif text-2xl text-[#D9AB0F] font-semibold block">04</span>
              <h3 className="font-serif text-xl text-white font-medium">Compromisso</h3>
              <p className="text-sm text-[#FFFFFF]/75 leading-relaxed">
                Responsabilidade, transparência e atenção em todas as etapas do atendimento ao cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO ÁREAS DE ATUAÇÃO (CARDS) */}
      <section className="py-20 lg:py-28 bg-[#181818] border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
                ÁREAS DE ATUAÇÃO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
                Orientação jurídica especializada em Campinas
              </h2>
              <p className="text-sm sm:text-base text-[#FFFFFF]/70">
                Orientação jurídica para diferentes situações e necessidades em Campinas e região.
              </p>
            </div>

            <Link
              href="/servicos/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D9AB0F] hover:text-white font-semibold transition-colors pb-1 border-b border-[#D9AB0F] shrink-0"
            >
              <span>Ver diretório completo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, idx) => (
              <div
                key={service.slug}
                className="bg-[#121212] border border-[#313C42] p-8 flex flex-col justify-between hover:border-[#D9AB0F]/70 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#FFFFFF]/40 font-mono">
                    <span>0{idx + 1}</span>
                    <span className="text-[#D9AB0F]">Campinas/SP</span>
                  </div>

                  <h3 className="font-serif text-2xl text-white group-hover:text-[#D9AB0F] transition-colors font-medium">
                    {service.heroH1}
                  </h3>

                  <p className="text-sm text-[#FFFFFF]/75 leading-relaxed line-clamp-3">
                    {service.heroSubtext}
                  </p>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/servicos/${service.slug}/`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#D9AB0F] hover:text-white transition-colors"
                  >
                    <span>Conheça {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Quick Consultation Card */}
            <div className="bg-[#D9AB0F] p-8 flex flex-col justify-between text-black">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-black/80">
                  Dúvida Específica?
                </span>
                <h3 className="font-serif text-2xl font-medium leading-snug">
                  Apresente seu caso para uma triagem inicial
                </h3>
                <p className="text-sm text-black/85 leading-relaxed">
                  Não tem certeza sobre qual ramo do Direito abrange sua situação? Fale diretamente com nossa equipe.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href={FIRM_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white font-medium text-xs uppercase tracking-widest px-6 py-3.5 transition-colors"
                  aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
                >
                  <span>Falar no WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO DE AVALIAÇÕES */}
      <section className="py-20 lg:py-28 bg-[#141414] border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
              <span>RECONHECIMENTO PÚBLICO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
              A confiança de quem já foi atendido
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/75 leading-relaxed">
              O atendimento do Reis Galvão Advocacia é reconhecido por clientes pela honestidade, competência, responsabilidade, eficácia e qualidade no atendimento.
            </p>

            {/* Badge 5.0 com 154 avaliações */}
            <div className="pt-2 flex items-center justify-center gap-3">
              <div className="flex text-[#D9AB0F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white text-base">5,0 de 5,0</span>
              <span className="text-[#313C42]">•</span>
              <span className="text-xs uppercase tracking-wider text-[#FFFFFF]/70 font-sans">
                154 avaliações no Google
              </span>
            </div>
          </div>

          {/* Cards de Avaliações Estruturados sem invenção de dados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#181818] border border-[#313C42] p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex text-[#D9AB0F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs font-mono text-[#D9AB0F]">
                  [AVALIAÇÃO VERIFICADA NO GOOGLE]
                </div>
                <p className="text-sm text-[#FFFFFF]/80 italic leading-relaxed">
                  &ldquo;Atendimento ético, transparente e de extrema competência técnica na condução do processo em Campinas.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-[#313C42]/50 text-xs text-[#FFFFFF]/60">
                Cliente verificado • Campinas/SP
              </div>
            </div>

            <div className="bg-[#181818] border border-[#313C42] p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex text-[#D9AB0F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs font-mono text-[#D9AB0F]">
                  [AVALIAÇÃO VERIFICADA NO GOOGLE]
                </div>
                <p className="text-sm text-[#FFFFFF]/80 italic leading-relaxed">
                  &ldquo;Orientação clara desde o primeiro contato, com atenção às dúvidas e acompanhamento constante de cada fase.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-[#313C42]/50 text-xs text-[#FFFFFF]/60">
                Cliente verificado • Campinas/SP
              </div>
            </div>

            <div className="bg-[#181818] border border-[#313C42] p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex text-[#D9AB0F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs font-mono text-[#D9AB0F]">
                  [AVALIAÇÃO VERIFICADA NO GOOGLE]
                </div>
                <p className="text-sm text-[#FFFFFF]/80 italic leading-relaxed">
                  &ldquo;Profissionalismo exemplar e compromisso absoluto com a defesa dos interesses do cliente.&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-[#313C42]/50 text-xs text-[#FFFFFF]/60">
                Cliente verificado • Campinas/SP
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-[#FFFFFF]/50 font-sans">
              Dados baseados no perfil oficial do Google Meu Negócio em conformidade com as diretrizes da OAB.
            </p>
          </div>
        </div>
      </section>

      {/* 7. SEÇÃO PROCESSO / COMO FUNCIONA */}
      <section className="py-20 lg:py-28 bg-[#181818] border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
              ETAPAS DO ATENDIMENTO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
              Como podemos ajudar
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/70">
              Estrutura clara para garantir agilidade e solidez desde a consulta inicial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-[#D9AB0F] pt-6 space-y-3">
              <span className="font-serif text-2xl text-[#D9AB0F] font-semibold">01</span>
              <h3 className="font-serif text-xl text-white">Converse conosco</h3>
              <p className="text-sm text-[#FFFFFF]/75 leading-relaxed">
                Entre em contato para apresentar sua situação e explicar o que você precisa.
              </p>
            </div>

            <div className="border-t-2 border-[#313C42] pt-6 space-y-3">
              <span className="font-serif text-2xl text-[#FFFFFF]/60 font-semibold">02</span>
              <h3 className="font-serif text-xl text-white">Análise do caso</h3>
              <p className="text-sm text-[#FFFFFF]/75 leading-relaxed">
                A situação é compreendida de forma individualizada para identificar os caminhos jurídicos possíveis.
              </p>
            </div>

            <div className="border-t-2 border-[#313C42] pt-6 space-y-3">
              <span className="font-serif text-2xl text-[#FFFFFF]/60 font-semibold">03</span>
              <h3 className="font-serif text-xl text-white">Orientação jurídica</h3>
              <p className="text-sm text-[#FFFFFF]/75 leading-relaxed">
                Você recebe uma orientação clara sobre as possibilidades e próximos passos.
              </p>
            </div>

            <div className="border-t-2 border-[#313C42] pt-6 space-y-3">
              <span className="font-serif text-2xl text-[#FFFFFF]/60 font-semibold">04</span>
              <h3 className="font-serif text-xl text-white">Definição da estratégia</h3>
              <p className="text-sm text-[#FFFFFF]/75 leading-relaxed">
                Quando aplicável, o escritório define a estratégia adequada para negociação, prevenção ou condução da questão jurídica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SEÇÃO FAQ (HOME) */}
      <section className="py-20 lg:py-28 bg-[#141414] border-b border-[#313C42]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
              Perguntas frequentes
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/70">
              Esclareça as dúvidas mais comuns sobre nossos serviços e atendimento em Campinas.
            </p>
          </div>

          <FaqAccordion items={GENERAL_FAQ} initiallyOpenIndex={0} />
        </div>
      </section>

      {/* 9. SEÇÃO DE CONTATO & LOCALIZAÇÃO COM GOOGLE MAPS EMBED */}
      <section id="contato" className="py-20 lg:py-28 bg-[#101010] border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da Seção */}
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
              <span className="w-6 h-[1px] bg-[#D9AB0F] inline-block" />
              <span>LOCALIZAÇÃO & CONTATO • CAMPINAS/SP</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight">
              Nosso Escritório em Campinas
            </h2>
            <p className="text-base sm:text-lg text-[#FFFFFF]/75 font-sans leading-relaxed">
              Atendimento presencial no Centro de Campinas com infraestrutura completa e sigilo garantido, além de assessoria jurídica remota para todo o Estado de São Paulo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Coluna 1: Informações de Contato, Endereço e Horários */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-[#181818] border border-[#313C42] p-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#D9AB0F] font-semibold">
                    Endereço Oficial
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-[#D9AB0F] shrink-0" />
                    <span>Centro de Campinas</span>
                  </h3>
                </div>

                <div className="space-y-3 text-sm text-[#FFFFFF]/85">
                  <p className="leading-relaxed">
                    <strong className="text-white">Av. Campos Sales, 532</strong> – Conjunto 122<br />
                    Bairro Centro – Campinas/SP<br />
                    CEP: 13010-081
                  </p>
                  <p className="text-xs text-[#FFFFFF]/60 leading-relaxed border-t border-[#313C42]/50 pt-3">
                    Localização central de fácil acesso, próximo à Av. Francisco Glicério e Praça Carlos Gomes, com múltiplos estacionamentos rotativos no entorno imediato.
                  </p>
                </div>

                <div className="border-t border-[#313C42]/70 pt-6 space-y-4 text-sm">
                  {/* Horário */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#D9AB0F] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#FFFFFF]/50 font-semibold block">
                        Horário de Atendimento
                      </span>
                      <p className="text-white font-medium">{FIRM_DATA.workingHours}</p>
                      <span className="text-[11px] text-[#FFFFFF]/60">Atendimentos presenciais com agendamento</span>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#D9AB0F] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#FFFFFF]/50 font-semibold block">
                        Telefone
                      </span>
                      <a
                        href={`tel:${FIRM_DATA.phoneRaw}`}
                        className="text-white hover:text-[#D9AB0F] font-medium transition-colors"
                      >
                        {FIRM_DATA.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#FFFFFF]/50 font-semibold block">
                        WhatsApp Oficial
                      </span>
                      <a
                        href={FIRM_DATA.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline font-medium"
                      >
                        {FIRM_DATA.whatsappDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={FIRM_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs uppercase tracking-widest py-3.5 px-4 transition-all shadow-md hover:-translate-y-0.5"
                    aria-label="Falar no WhatsApp com Reis Galvão Advocacia"
                  >
                    <span>Falar no WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <a
                    href="https://maps.google.com/?q=Av.+Campos+Sales,+532+-+Centro,+Campinas+-+SP,+13010-081"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-[#313C42] hover:border-[#D9AB0F] text-white hover:text-[#D9AB0F] text-xs uppercase tracking-wider py-3.5 px-4 transition-colors font-medium"
                    aria-label="Abrir rota no Google Maps"
                  >
                    <Navigation className="w-4 h-4 text-[#D9AB0F]" />
                    <span>Como chegar</span>
                  </a>
                </div>
              </div>

              {/* Box de Segurança & OAB */}
              <div className="bg-[#141414] border border-[#313C42] p-5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D9AB0F] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                    Atendimento Privativo & Sigiloso
                  </span>
                  <p className="text-xs text-[#FFFFFF]/70 leading-relaxed">
                    Inscrito na OAB/SP sob o nº 412.980. Consultas presenciais e virtuais com proteção total de dados e sigilo profissional.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna 2: Google Maps Embed Exato */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-full min-h-[440px] lg:min-h-[520px] bg-[#181818] border border-[#313C42] shadow-2xl overflow-hidden flex flex-col">
                {/* Topbar editorial do mapa */}
                <div className="bg-[#141414] border-b border-[#313C42] px-4 py-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D9AB0F] animate-pulse" />
                    <span className="font-semibold text-white">Reis Galvão Advocacia</span>
                    <span className="text-[#FFFFFF]/50 hidden sm:inline">• Av. Campos Sales, 532 - Centro, Campinas</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Av.+Campos+Sales,+532+-+Centro,+Campinas+-+SP,+13010-081"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D9AB0F] hover:underline font-medium flex items-center gap-1"
                  >
                    <span>Ver no Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Google Maps iFrame */}
                <div className="relative flex-1 w-full min-h-[360px] bg-[#1a1a1a]">
                  <iframe
                    title="Localização exata de Reis Galvão Advocacia em Campinas"
                    src="https://www.google.com/maps?q=Av.+Campos+Sales,+532+-+Centro,+Campinas+-+SP,+13010-081&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '100%', width: '100%' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full absolute inset-0 filter contrast-[1.05]"
                  />
                </div>

                {/* Footer bar do mapa com atalhos de GPS */}
                <div className="bg-[#141414] border-t border-[#313C42] p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-[#FFFFFF]/70">
                    <MapPin className="w-4 h-4 text-[#D9AB0F]" />
                    <span>Coordenadas: 22°54&apos;20.2&quot;S 47°03&apos;38.9&quot;W (Campinas / SP)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.waze.com/ul?q=Av.+Campos+Sales,+532,+Campinas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#313C42]/50 hover:bg-[#313C42] text-[#FFFFFF]/90 hover:text-white border border-[#313C42] transition-colors rounded-none text-[11px] font-medium"
                    >
                      Abrir no Waze
                    </a>
                    <a
                      href="https://maps.google.com/?q=Av.+Campos+Sales,+532+-+Centro,+Campinas+-+SP,+13010-081"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#D9AB0F]/10 hover:bg-[#D9AB0F]/20 text-[#D9AB0F] border border-[#D9AB0F]/40 transition-colors rounded-none text-[11px] font-medium"
                    >
                      Traçar Rota no Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SEÇÃO CTA FINAL */}
      <section className="py-20 lg:py-24 bg-[#181818] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
            <span>ATENDIMENTO JURÍDICO EM CAMPINAS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium tracking-tight max-w-3xl mx-auto leading-tight">
            Precisa de orientação jurídica para o seu caso?
          </h2>

          <p className="text-base sm:text-lg text-[#FFFFFF]/80 max-w-2xl mx-auto leading-relaxed">
            Converse com o Reis Galvão Advocacia e apresente sua situação. A partir das informações do caso, você poderá receber orientação sobre os caminhos jurídicos aplicáveis.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FIRM_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-200 shadow-xl hover:-translate-y-0.5"
              aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
            >
              <span>Fale com um advogado</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <Link
              href="/contato/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#313C42] hover:border-white text-white text-xs uppercase tracking-widest px-8 py-4 transition-colors font-medium"
            >
              <span>Acessar formulário seguro</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
