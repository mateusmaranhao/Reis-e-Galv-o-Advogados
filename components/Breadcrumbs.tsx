import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FIRM_DATA } from '@/lib/site-data';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    { name: 'Início', item: FIRM_DATA.baseUrl },
    ...items.map((it) => ({
      name: it.label,
      item: it.href ? (it.href.startsWith('http') ? it.href : `${FIRM_DATA.baseUrl}${it.href}`) : '',
    })),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.item ? { item: item.item } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Navegação estrutural" className="py-4 font-sans text-xs tracking-wide">
        <ol className="flex flex-wrap items-center gap-1.5 text-[#FFFFFF]/60">
          <li>
            <Link href="/" className="hover:text-[#D9AB0F] transition-colors">
              Início
            </Link>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-[#313C42]" />
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-[#D9AB0F] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#D9AB0F] font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
