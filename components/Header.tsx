'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { FIRM_DATA, SERVICES } from '@/lib/site-data';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close dropdown on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const isServicesActive = pathname.startsWith('/servicos');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#181818]/95 backdrop-blur-md border-b border-[#313C42]/60 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#181818]/90 via-[#181818]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            onClick={closeAllMenus}
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9AB0F]"
            aria-label="Reis Galvão Advocacia - Página Inicial"
          >
            <span className="font-serif text-2xl sm:text-[26px] tracking-tight font-medium text-white group-hover:text-[#D9AB0F] transition-colors leading-none">
              Reis Galvão
            </span>
            <span className="text-[10px] tracking-[0.28em] text-[#D9AB0F] uppercase font-sans mt-1 font-semibold">
              Advocacia • Campinas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Navegação Principal">
            <Link
              href="/"
              onClick={closeAllMenus}
              className={`px-3 py-2 text-sm font-sans tracking-wide transition-colors ${
                pathname === '/'
                  ? 'text-[#D9AB0F] font-semibold'
                  : 'text-[#FFFFFF]/80 hover:text-white'
              }`}
            >
              Início
            </Link>

            <Link
              href="/sobre/"
              onClick={closeAllMenus}
              className={`px-3 py-2 text-sm font-sans tracking-wide transition-colors ${
                pathname === '/sobre/'
                  ? 'text-[#D9AB0F] font-semibold'
                  : 'text-[#FFFFFF]/80 hover:text-white'
              }`}
            >
              Sobre
            </Link>

            {/* Dropdown Serviços: Clean, strictly names only */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-sans tracking-wide transition-colors cursor-pointer ${
                  isServicesActive
                    ? 'text-[#D9AB0F] font-semibold'
                    : 'text-[#FFFFFF]/80 hover:text-white'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Serviços</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-[#D9AB0F]' : 'opacity-70'
                  }`}
                />
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-1 w-72 bg-[#181818] border border-[#313C42] shadow-2xl py-2 z-50 text-left animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicos/${service.slug}/`}
                      onClick={closeAllMenus}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === `/servicos/${service.slug}/`
                          ? 'text-[#D9AB0F] bg-[#313C42]/20 font-medium'
                          : 'text-[#FFFFFF]/85 hover:text-white hover:bg-[#313C42]/30'
                      }`}
                      role="menuitem"
                    >
                      {service.title}
                    </Link>
                  ))}
                  <div className="my-1 border-t border-[#313C42]/70" />
                  <Link
                    href="/servicos/"
                    onClick={closeAllMenus}
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider text-[#D9AB0F] hover:text-white hover:bg-[#313C42]/30 font-semibold transition-colors"
                    role="menuitem"
                  >
                    Ver todas as áreas de atuação →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contato/"
              onClick={closeAllMenus}
              className={`px-3 py-2 text-sm font-sans tracking-wide transition-colors ${
                pathname === '/contato/'
                  ? 'text-[#D9AB0F] font-semibold'
                  : 'text-[#FFFFFF]/80 hover:text-white'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={FIRM_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-[#000000] font-sans font-medium text-xs uppercase tracking-widest px-4 py-2.5 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
            >
              <span>Fale com um advogado</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D9AB0F] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181818] border-b border-[#313C42] px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={closeAllMenus}
            className="block py-2 text-base font-medium text-white hover:text-[#D9AB0F]"
          >
            Início
          </Link>
          <Link
            href="/sobre/"
            onClick={closeAllMenus}
            className="block py-2 text-base font-medium text-white hover:text-[#D9AB0F]"
          >
            Sobre
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-white hover:text-[#D9AB0F]"
            >
              <span>Serviços</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileServicesOpen ? 'rotate-180 text-[#D9AB0F]' : ''
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 border-l border-[#313C42] mt-1 space-y-2 py-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicos/${s.slug}/`}
                    onClick={closeAllMenus}
                    className="block py-1.5 text-sm text-[#FFFFFF]/80 hover:text-white"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link
                  href="/servicos/"
                  onClick={closeAllMenus}
                  className="block py-1.5 text-xs text-[#D9AB0F] font-semibold uppercase tracking-wider"
                >
                  Ver todas as áreas de atuação →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contato/"
            onClick={closeAllMenus}
            className="block py-2 text-base font-medium text-white hover:text-[#D9AB0F]"
          >
            Contato
          </Link>

          <div className="pt-3 border-t border-[#313C42]">
            <a
              href={FIRM_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#D9AB0F] text-[#000000] font-sans font-medium text-xs uppercase tracking-widest py-3 transition-colors text-center"
              aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
            >
              <span>Fale com um advogado</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
