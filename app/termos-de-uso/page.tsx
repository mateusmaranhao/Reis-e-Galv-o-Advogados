import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FIRM_DATA } from '@/lib/site-data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Termos de Uso | Reis Galvão Advocacia',
  description:
    'Termos e condições de uso do website institucional do Reis Galvão Advocacia em Campinas/SP.',
  alternates: {
    canonical: `${FIRM_DATA.baseUrl}/termos-de-uso/`,
  },
};

export default function TermosDeUsoPage() {
  return (
    <div className="bg-[#181818] min-h-screen text-white">
      <div className="border-b border-[#313C42]/60 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Termos de Uso' }]} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 font-sans">
        <div className="space-y-4 mb-12 border-b border-[#313C42] pb-8">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
            CONDIÇÕES GERAIS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white font-medium">
            Termos de Uso
          </h1>
          <p className="text-xs text-[#FFFFFF]/50">
            Última atualização: Setembro de 2026 • Reis Galvão Advocacia
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#FFFFFF]/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">1. Natureza Informativa do Conteúdo</h2>
            <p>
              O conteúdo disponibilizado neste website possui caráter estritamente institucional e informativo, em consonância com as normas deontológicas estabelecidas pelo Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB) e pelo Provimento nº 205/2021 do Conselho Federal da OAB.
            </p>
            <p>
              Nenhum texto, artigo ou resposta constante deste portal configura parecer jurídico individualizado, consulta jurídica formal ou garantia de resultado em qualquer demanda processual. A contratação dos serviços do escritório ocorre somente após análise técnica prévia e celebração formal de instrumento de prestação de serviços advocatícios.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">2. Propriedade Intelectual</h2>
            <p>
              Todos os elementos deste site — incluindo identidade visual, textos, logotipos, estruturas de navegação e composições editoriais — são de titularidade do <strong>Reis Galvão Advocacia</strong> ou foram licenciados legalmente para sua utilização. É expressamente vedada a reprodução total ou parcial sem expressa e prévia autorização.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">3. Limitação de Responsabilidade</h2>
            <p>
              O escritório emprega seus melhores esforços para manter as informações deste site atualizadas e em conformidade com a legislação brasileira. Contudo, em virtude da constante evolução jurisprudencial e das particularidades de cada caso fático, o escritório não se responsabiliza por decisões tomadas exclusivamente com base em informações genéricas contidas nas páginas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-white">4. Foro Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pela legislação da República Federativa do Brasil. Para dirimir quaisquer controvérsias decorrentes da utilização deste website, fica eleito o Foro da Comarca de Campinas, Estado de São Paulo, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
