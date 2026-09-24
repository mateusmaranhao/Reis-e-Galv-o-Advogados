import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Home } from 'lucide-react';
import { FIRM_DATA, SERVICES } from '@/lib/site-data';

export default function NotFound() {
  return (
    <div className="bg-[#181818] min-h-[80vh] flex items-center justify-center text-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9AB0F]">
          ERRO 404 • PÁGINA NÃO ENCONTRADA
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
          Página não localizada
        </h1>

        <p className="text-base sm:text-lg text-[#FFFFFF]/75 leading-relaxed max-w-lg mx-auto">
          O endereço acessado não existe ou foi remanejado. Utilize os atalhos abaixo para retornar às seções principais do Reis Galvão Advocacia.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs uppercase tracking-widest px-6 py-3.5 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Retornar ao Início</span>
          </Link>

          <a
            href={FIRM_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#313C42] hover:border-white text-white font-medium text-xs uppercase tracking-widest px-6 py-3.5 transition-colors"
            aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-[#D9AB0F]" />
            <span>Falar com o Escritório</span>
          </a>
        </div>

        {/* Quick Directory Links */}
        <div className="pt-10 border-t border-[#313C42]/60 mt-10">
          <span className="text-xs uppercase tracking-wider text-[#FFFFFF]/50 block mb-4">
            Áreas de Atuação do Escritório em Campinas:
          </span>
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}/`}
                className="px-3 py-1.5 bg-[#121212] border border-[#313C42] text-[#FFFFFF]/80 hover:text-[#D9AB0F] hover:border-[#D9AB0F]/50 transition-colors"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
