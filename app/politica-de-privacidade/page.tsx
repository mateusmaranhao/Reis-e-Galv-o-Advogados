import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FIRM_DATA } from '@/lib/site-data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Reis Galvão Advocacia',
  description:
    'Política de Privacidade e proteção de dados pessoais do Reis Galvão Advocacia em conformidade com a LGPD (Lei nº 13.709/2018).',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/politica-de-privacidade/`,
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="bg-[#181818] min-h-screen text-white">
      <div className="border-b border-[#313C42]/60 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Política de Privacidade' }]} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 font-sans">
        <div className="space-y-4 mb-12 border-b border-[#313C42] pb-8">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
            CONFORMIDADE LGPD
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white font-medium">
            Política de Privacidade
          </h1>
          <p className="text-xs text-[#FFFFFF]/50">
            Última atualização: Setembro de 2026 • Reis Galvão Advocacia
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#FFFFFF]/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">1. Introdução e Compromisso</h2>
            <p>
              O escritório <strong>{FIRM_DATA.name}</strong>, sediado na {FIRM_DATA.address.formatted}, preza pela privacidade, confidencialidade e segurança dos dados pessoais de seus clientes, parceiros e usuários deste portal, em estrita observância à Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 – LGPD) e ao sigilo profissional inerente ao Estatuto da Advocacia e da OAB.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">2. Dados Pessoais Coletados</h2>
            <p>Podemos coletar os seguintes dados fornecidos voluntariamente:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#FFFFFF]/75">
              <li><strong>Dados de Identificação:</strong> Nome completo, endereço de e-mail e número de telefone/WhatsApp ao submeter formulários de contato.</li>
              <li><strong>Dados da Demanda:</strong> Breve descrição ou relato de dúvidas jurídicas encaminhadas para triagem preliminar.</li>
              <li><strong>Dados de Navegação:</strong> Informações técnicas estritamente necessárias para a estabilidade da página (endereço IP anonimizado, tipo de navegador e preferências de cookies essenciais).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">3. Finalidade do Tratamento</h2>
            <p>Os dados coletados destinam-se exclusivamente às seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#FFFFFF]/75">
              <li>Retornar contatos e responder a solicitações de orientação jurídica formuladas pelo próprio titular.</li>
              <li>Agendamento e realização de consultas presenciais ou telepresenciais.</li>
              <li>Cumprimento de obrigações legais, regulatórias e deontológicas vinculadas ao exercício da advocacia.</li>
            </ul>
            <p className="pt-1">
              O Reis Galvão Advocacia <strong>não comercializa, não aluga e não compartilha</strong> dados pessoais com terceiros para fins de marketing ou prospecção comercial.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">4. Sigilo Profissional e Segurança</h2>
            <p>
              Todas as informações compartilhadas relativas a casos jurídicos gozam da proteção do sigilo profissional advogado-cliente, estabelecido pelo art. 7º, inciso XIX, da Lei nº 8.906/1994 (Estatuto da OAB). Implementamos salvaguardas técnicas adequadas para proteger os dados contra acessos não autorizados, extravios ou incidentes de segurança.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">5. Direitos do Titular</h2>
            <p>
              Em conformidade com o artigo 18 da LGPD, o titular dos dados tem o direito de solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou inexatos e a eliminação dos dados tratados com seu consentimento.
            </p>
            <p>
              Para exercer qualquer um desses direitos, basta entrar em contato através dos nossos canais de atendimento em Campinas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">6. Contato com o Escritório</h2>
            <p>
              Para esclarecer dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais, entre em contato:
            </p>
            <div className="bg-[#121212] border border-[#313C42] p-5 text-sm space-y-1">
              <p><strong>{FIRM_DATA.name}</strong></p>
              <p>{FIRM_DATA.address.formatted}</p>
              <p>Telefone / WhatsApp: {FIRM_DATA.phoneDisplay}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
