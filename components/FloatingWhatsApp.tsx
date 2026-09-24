'use client';

import React, { useState } from 'react';
import { FIRM_DATA } from '@/lib/site-data';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      <div
        className={`hidden sm:block mr-3 px-3.5 py-1.5 bg-[#181818] border border-[#313C42] text-xs font-sans text-white shadow-xl pointer-events-none transition-all duration-200 ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="text-[#D9AB0F] font-medium mr-1.5">WhatsApp</span>
        Fale conosco pelo WhatsApp
      </div>

      {/* Floating Button with Official WhatsApp vector */}
      <a
        href={FIRM_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Falar com o Reis Galvão Advocacia pelo WhatsApp"
      >
        {/* Subtle ping pulse */}
        <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping -z-10" />

        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.68C8.02 10.89 8.9 12.06 9.02 12.22C9.14 12.38 10.7 14.89 13.16 15.86C15.2 16.66 15.62 16.5 16.08 16.46C16.54 16.42 17.57 15.85 17.78 15.26C18 14.67 18 14.17 17.93 14.06C17.86 13.95 17.69 13.89 17.43 13.76C17.18 13.63 15.93 13.02 15.7 12.93C15.47 12.85 15.3 12.81 15.13 13.07C14.96 13.32 14.47 13.89 14.32 14.06C14.17 14.23 14.02 14.25 13.77 14.12C13.51 14 12.69 13.73 11.72 12.86C10.96 12.18 10.45 11.34 10.3 11.09C10.15 10.84 10.28 10.7 10.41 10.57C10.53 10.45 10.67 10.27 10.8 10.12C10.93 9.97 10.97 9.86 11.06 9.69C11.14 9.52 11.1 9.38 11.04 9.25C10.97 9.12 10.45 7.85 10.23 7.34C10.02 6.84 9.81 6.91 9.66 6.9C9.52 6.9 9.36 6.9 9.19 6.9" />
        </svg>
      </a>
    </div>
  );
}
