import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, MessageSquare, ShieldCheck, Clock, ArrowUpRight, Navigation } from 'lucide-react';
import { FIRM_DATA } from '@/lib/site-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contato | Reis Galvão Advocacia em Campinas/SP',
  description:
    'Entre em contato com o Reis Galvão Advocacia em Campinas. Endereço no Centro, WhatsApp direto (19) 98424-0366 e formulário seguro de orientação jurídica.',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/contato/`,
  },
};

export default function ContatoPage() {
  return (
    <div className="bg-[#181818] min-h-screen text-white">
      {/* Breadcrumbs */}
      <div className="border-b border-[#313C42]/60 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contato' }]} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 sm:py-24 border-b border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
              ATENDIMENTO JURÍDICO • CAMPINAS/SP
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-tight">
              Fale com o escritório
            </h1>
            <p className="text-base sm:text-xl text-[#FFFFFF]/80 leading-relaxed font-sans pt-2">
              Apresente sua situação aos advogados do Reis Galvão Advocacia. Atendimento presencial no Centro de Campinas ou consulta jurídica remota.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <section className="py-16 lg:py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Information Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#181818] border border-[#313C42] p-8 space-y-6">
                <h2 className="font-serif text-2xl text-white font-medium">
                  Canais Oficiais de Contato
                </h2>

                <div className="space-y-5 text-sm">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-wider text-[#FFFFFF]/50 font-semibold block">
                        WhatsApp Oficial
                      </span>
                      <a
                        href={FIRM_DATA.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-white hover:text-[#D9AB0F] transition-colors block"
                        aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
                      >
                        {FIRM_DATA.phoneDisplay}
                      </a>
                      <p className="text-xs text-[#FFFFFF]/60">
                        Canal direto para envio de dúvidas e agendamento de consultas.
                      </p>
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="flex items-start gap-4 pt-4 border-t border-[#313C42]/60">
                    <div className="w-10 h-10 rounded-full bg-[#D9AB0F]/10 border border-[#D9AB0F]/40 flex items-center justify-center text-[#D9AB0F] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-wider text-[#FFFFFF]/50 font-semibold block">
                        Endereço da Sede
                      </span>
                      <p className="text-sm font-medium text-white leading-relaxed">
                        {FIRM_DATA.address.street} - {FIRM_DATA.address.complement}
                        <br />
                        {FIRM_DATA.address.neighborhood} - {FIRM_DATA.address.city}/{FIRM_DATA.address.state}
                        <br />
                        CEP {FIRM_DATA.address.postalCode}
                      </p>
                      <p className="text-xs text-[#FFFFFF]/60 pt-1">
                        Ponto central de Campinas com fácil acesso a cartórios e tribunais.
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-start gap-4 pt-4 border-t border-[#313C42]/60">
                    <div className="w-10 h-10 rounded-full bg-[#313C42]/50 border border-[#313C42] flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-wider text-[#FFFFFF]/50 font-semibold block">
                        Atendimento Telefônico
                      </span>
                      <a
                        href={`tel:${FIRM_DATA.phoneRaw}`}
                        className="text-sm font-medium text-white hover:text-[#D9AB0F] transition-colors"
                      >
                        {FIRM_DATA.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#313C42]/60">
                  <a
                    href={FIRM_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs uppercase tracking-widest py-3.5 transition-colors"
                    aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
                  >
                    <span>Falar no WhatsApp agora</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>

              {/* Informação sobre sigilo e agendamento */}
              <div className="bg-[#101010] border border-[#313C42] p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#D9AB0F]">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-white">
                    Sigilo e Privacidade
                  </span>
                </div>
                <p className="text-xs text-[#FFFFFF]/75 leading-relaxed">
                  As informações enviadas por este canal são tratadas com sigilo profissional inviolável garantido pelo Estatuto da Advocacia e pela LGPD. Os atendimentos presenciais requerem agendamento prévio.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#181818] border border-[#313C42] p-8 lg:p-10 shadow-2xl">
              <div className="mb-6 space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9AB0F]">
                  FORMULÁRIO DE ORIENTAÇÃO
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  Envie os detalhes do seu caso
                </h2>
                <p className="text-xs sm:text-sm text-[#FFFFFF]/70">
                  Preencha os campos abaixo. Retornaremos o contato pelo telefone ou e-mail informado.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Seção com o mapa interativo exato */}
      <section className="py-16 bg-[#101010] border-t border-[#313C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
                MAPA & ROTA DE ACESSO
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                Localização em Campinas
              </h2>
              <p className="text-sm text-[#FFFFFF]/70">
                Av. Campos Sales, 532 - Sala 122 - Centro, Campinas/SP (CEP: 13010-081)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.waze.com/ul?q=Av.+Campos+Sales,+532,+Campinas"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#313C42]/50 hover:bg-[#313C42] text-white border border-[#313C42] transition-colors text-xs font-medium"
              >
                Abrir no Waze
              </a>
              <a
                href="https://maps.google.com/?q=Av.+Campos+Sales,+532+-+Centro,+Campinas+-+SP,+13010-081"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Traçar Rota no Maps</span>
              </a>
            </div>
          </div>

          <div className="w-full h-[450px] bg-[#181818] border border-[#313C42] overflow-hidden shadow-2xl relative">
            <iframe
              title="Localização de Reis Galvão Advocacia no Google Maps"
              src="https://www.google.com/maps?q=Av.+Campos+Sales,+532+-+Centro,+Campinas+-+SP,+13010-081&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-[1.05]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
