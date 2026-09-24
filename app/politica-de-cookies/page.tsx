import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FIRM_DATA } from '@/lib/site-data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Política de Cookies | Reis Galvão Advocacia',
  description:
    'Saiba como o Reis Galvão Advocacia utiliza cookies técnicos e essenciais para navegação e segurança dos usuários.',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/politica-de-cookies/`,
  },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="bg-[#181818] min-h-screen text-white">
      <div className="border-b border-[#313C42]/60 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Política de Cookies' }]} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 font-sans">
        <div className="space-y-4 mb-12 border-b border-[#313C42] pb-8">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
            TRANSPARÊNCIA DIGITAL
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white font-medium">
            Política de Cookies
          </h1>
          <p className="text-xs text-[#FFFFFF]/50">
            Última atualização: Setembro de 2026 • Reis Galvão Advocacia
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#FFFFFF]/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no dispositivo do usuário quando este visita um website. Eles servem para viabilizar funcionalidades essenciais, memorizar preferências do usuário e garantir estabilidade operacional.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">2. Categorias de Cookies Utilizados</h2>
            <div className="space-y-4 pt-2">
              <div className="bg-[#121212] border border-[#313C42] p-5 space-y-2">
                <h3 className="font-serif text-lg text-[#D9AB0F]">Cookies Estritamente Necessários</h3>
                <p className="text-sm text-[#FFFFFF]/75">
                  Indispensáveis para o funcionamento da plataforma, permitindo a navegação segura, carregamento de fontes e persistência das suas escolhas de privacidade. Não armazenam nenhuma informação de identificação pessoal e não podem ser desativados no sistema.
                </p>
              </div>

              <div className="bg-[#121212] border border-[#313C42] p-5 space-y-2">
                <h3 className="font-serif text-lg text-[#D9AB0F]">Cookies de Desempenho e Navegação</h3>
                <p className="text-sm text-[#FFFFFF]/75">
                  Coletam dados agregados e anônimos sobre como os visitantes utilizam o portal, permitindo aprimorar a usabilidade e velocidade das páginas sem identificar individualmente os internautas.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">3. Gestão e Desativação de Cookies</h2>
            <p>
              O usuário pode configurar seu navegador a qualquer instante para recusar a instalação de cookies ou alertar quando um cookie estiver sendo enviado. Note que a desativação integral de cookies essenciais pode afetar a exibição adequada de determinados elementos do site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">4. Dúvidas</h2>
            <p>
              Caso tenha dúvidas sobre como utilizamos cookies, consulte nossa{' '}
              <Link href="/politica-de-privacidade/" className="text-[#D9AB0F] underline hover:text-white">
                Política de Privacidade
              </Link>{' '}
              ou fale diretamente com nossa equipe em Campinas.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
