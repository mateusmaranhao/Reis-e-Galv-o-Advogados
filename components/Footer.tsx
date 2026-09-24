import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { FIRM_DATA, SERVICES } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-[#FFFFFF]/80 border-t border-[#313C42]/80 font-sans">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-6">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-2xl lg:text-3xl text-white font-medium tracking-tight group-hover:text-[#D9AB0F] transition-colors">
                Reis Galvão
              </span>
              <span className="block text-[11px] uppercase tracking-[0.24em] text-[#D9AB0F] font-semibold mt-1">
                Advocacia • Campinas/SP
              </span>
            </Link>
            <p className="text-sm text-[#FFFFFF]/70 leading-relaxed max-w-md pt-2">
              Orientação jurídica personalizada em Campinas para questões patrimoniais, familiares, bancárias, consumeristas e previdenciárias, com foco em segurança jurídica e transparência.
            </p>
            <div className="pt-2 text-xs text-[#FFFFFF]/50 space-y-1">
              <p>Atuação em conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB.</p>
              <p>Caráter estritamente informativo, sem cunho de captação indevida ou mercantilização.</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4 border-b border-[#313C42]/60 pb-2">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D9AB0F] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre/" className="hover:text-[#D9AB0F] transition-colors">
                  Sobre o Escritório
                </Link>
              </li>
              <li>
                <Link href="/servicos/" className="hover:text-[#D9AB0F] transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link href="/contato/" className="hover:text-[#D9AB0F] transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Áreas de Atuação */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4 border-b border-[#313C42]/60 pb-2">
              Áreas de Atuação
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}/`}
                    className="hover:text-[#D9AB0F] transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Localização e Contato */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4 border-b border-[#313C42]/60 pb-2">
              Atendimento
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9AB0F] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-[#FFFFFF]/80">
                  {FIRM_DATA.address.street} - {FIRM_DATA.address.complement}
                  <br />
                  {FIRM_DATA.address.neighborhood} - {FIRM_DATA.address.city}/{FIRM_DATA.address.state}
                  <br />
                  CEP {FIRM_DATA.address.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#D9AB0F] shrink-0" />
                <a
                  href={`tel:${FIRM_DATA.phoneRaw}`}
                  className="text-xs text-[#FFFFFF]/90 hover:text-[#D9AB0F] transition-colors"
                >
                  {FIRM_DATA.phoneDisplay}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={FIRM_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D9AB0F] hover:underline font-medium"
                  aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp direto</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-[#313C42]/60 bg-[#0A0A0A] py-6 text-xs text-[#FFFFFF]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Reis Galvão Advocacia. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/politica-de-privacidade/" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-[#313C42]">/</span>
            <Link href="/termos-de-uso/" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <span className="text-[#313C42]">/</span>
            <Link href="/politica-de-cookies/" className="hover:text-white transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
