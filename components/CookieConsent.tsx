'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('rg_cookie_consent');
      if (!consent) {
        setVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('rg_cookie_consent', 'all');
    setVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('rg_cookie_consent', 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Consentimento de Cookies"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-[#121212]/95 backdrop-blur-md border-t border-[#313C42] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        <div className="text-xs sm:text-sm text-[#FFFFFF]/80 max-w-3xl leading-relaxed">
          <p>
            Utilizamos cookies essenciais para garantir o funcionamento técnico correto do nosso site e aprimorar sua experiência de navegação, em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD).
            Para saber mais detalhes sobre os dados coletados, leia nossa{' '}
            <Link
              href="/politica-de-cookies/"
              className="text-[#D9AB0F] underline hover:text-white transition-colors"
            >
              Política de Cookies
            </Link>{' '}
            e{' '}
            <Link
              href="/politica-de-privacidade/"
              className="text-[#D9AB0F] underline hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleAcceptEssential}
            className="px-4 py-2 text-xs uppercase tracking-wider font-medium text-white border border-[#313C42] hover:border-white/50 transition-colors"
          >
            Apenas Necessários
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-black bg-[#D9AB0F] hover:bg-[#c4990c] transition-colors shadow-md"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  );
}
