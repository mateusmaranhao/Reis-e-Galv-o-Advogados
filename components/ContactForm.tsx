'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { FIRM_DATA, SERVICES } from '@/lib/site-data';

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || '',
    message: '',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Por favor, informe seu nome completo.';
    if (!formData.email.trim()) {
      errs.email = 'Por favor, informe seu e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Informe um endereço de e-mail válido.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Por favor, informe seu telefone com DDD.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Telefone inválido. Inclua DDD + número.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Por favor, descreva resumidamente a sua dúvida ou necessidade.';
    }
    if (!formData.privacyAccepted) {
      errs.privacyAccepted = 'É obrigatório aceitar a Política de Privacidade para enviar.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous clean processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-[#101010] border border-[#313C42] p-8 text-center space-y-4">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#D9AB0F]/10 border border-[#D9AB0F] flex items-center justify-center text-[#D9AB0F]">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-2xl text-white">Mensagem Enviada com Sucesso</h3>
        <p className="text-sm text-[#FFFFFF]/75 max-w-md mx-auto leading-relaxed">
          Recebemos sua mensagem com total sigilo profissional. Nossa equipe entrará em contato em breve para dar continuidade ao atendimento.
        </p>
        <div className="pt-4 border-t border-[#313C42]/60 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                service: defaultService || '',
                message: '',
                privacyAccepted: false,
              });
            }}
            className="text-xs uppercase tracking-wider text-[#FFFFFF]/70 hover:text-white underline"
          >
            Enviar outra mensagem
          </button>
          <a
            href={FIRM_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D9AB0F] text-black font-semibold text-xs uppercase tracking-wider px-5 py-2.5 transition-colors hover:bg-[#c4990c]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar agora no WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Nome */}
      <div>
        <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-semibold text-[#FFFFFF]/85 mb-1.5">
          Nome Completo <span className="text-[#D9AB0F]">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Ex: Carlos Eduardo de Oliveira"
          className={`w-full bg-[#101010] border px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D9AB0F] transition-colors ${
            errors.name ? 'border-red-500' : 'border-[#313C42]'
          }`}
        />
        {errors.name && (
          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Grid: E-mail e Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-semibold text-[#FFFFFF]/85 mb-1.5">
            E-mail <span className="text-[#D9AB0F]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seuemail@exemplo.com.br"
            className={`w-full bg-[#101010] border px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D9AB0F] transition-colors ${
              errors.email ? 'border-red-500' : 'border-[#313C42]'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-semibold text-[#FFFFFF]/85 mb-1.5">
            Telefone / WhatsApp <span className="text-[#D9AB0F]">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(19) 99999-9999"
            className={`w-full bg-[#101010] border px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D9AB0F] transition-colors ${
              errors.phone ? 'border-red-500' : 'border-[#313C42]'
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Área de Interesse */}
      <div>
        <label htmlFor="contact-service" className="block text-xs uppercase tracking-wider font-semibold text-[#FFFFFF]/85 mb-1.5">
          Área de Interesse
        </label>
        <select
          id="contact-service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full bg-[#101010] border border-[#313C42] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D9AB0F] transition-colors"
        >
          <option value="">Selecione uma área (opcional)</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Outro Assunto">Outro Assunto / Não sei informar</option>
        </select>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-semibold text-[#FFFFFF]/85 mb-1.5">
          Breve Relato do Caso <span className="text-[#D9AB0F]">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Descreva resumidamente a questão jurídica que você deseja esclarecer..."
          className={`w-full bg-[#101010] border px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D9AB0F] transition-colors resize-y ${
            errors.message ? 'border-red-500' : 'border-[#313C42]'
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.message}
          </p>
        )}
      </div>

      {/* LGPD Checkbox */}
      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.privacyAccepted}
            onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
            className="mt-1 h-4 w-4 rounded-none border-[#313C42] bg-[#101010] text-[#D9AB0F] focus:ring-[#D9AB0F] cursor-pointer"
          />
          <span className="text-xs text-[#FFFFFF]/70 leading-relaxed">
            Declaro que li e concordo com os termos da{' '}
            <Link href="/politica-de-privacidade/" className="text-[#D9AB0F] underline hover:text-white">
              Política de Privacidade
            </Link>
            , autorizando o contato para fins exclusivos de retorno sobre esta consulta.
          </span>
        </label>
        {errors.privacyAccepted && (
          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.privacyAccepted}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9AB0F] hover:bg-[#c4990c] text-black font-semibold text-xs uppercase tracking-widest px-8 py-3.5 transition-all duration-200 cursor-pointer disabled:opacity-50"
      >
        <span>{isSubmitting ? 'Enviando...' : 'Enviar Solicitação de Orientação'}</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
