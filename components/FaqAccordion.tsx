'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  initiallyOpenIndex?: number;
}

export default function FaqAccordion({ items, initiallyOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(initiallyOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[#313C42]/70 border-y border-[#313C42]/70">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-4 sm:py-5">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9AB0F] py-1 cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span
                className={`font-serif text-lg sm:text-xl pr-6 transition-colors ${
                  isOpen ? 'text-[#D9AB0F]' : 'text-white group-hover:text-[#D9AB0F]'
                }`}
              >
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full border border-[#313C42] flex items-center justify-center shrink-0 transition-colors ${
                  isOpen ? 'border-[#D9AB0F] bg-[#D9AB0F]/10' : 'group-hover:border-white/50'
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#D9AB0F]' : 'text-white/70'
                  }`}
                />
              </div>
            </button>

            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm sm:text-base text-[#FFFFFF]/75 leading-relaxed pr-6 sm:pr-12">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
