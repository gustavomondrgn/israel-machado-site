"use client";

import FadeIn from "@/components/FadeIn";
import { Phone, Shield, Instagram } from "lucide-react";
import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
const CONTACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445130629/85MobFamEzJu6NZEiDVUCk/contact-bg-WiTgbBHjndtMdqdAfiFnUY.webp";

export default function ContatoSection() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 lg:py-28 relative" id="contato">
      <div className="absolute inset-0">
        <img src={CONTACT_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ivory/85 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-bronze" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-bronze">
                Contato
              </span>
              <div className="w-8 h-[1px] bg-bronze" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
              Agende sua consulta
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Como agendar
                </h3>
                <p className="font-body text-base text-foreground/75 leading-relaxed mb-6">
                  O primeiro passo é entrar em contato. Você pode enviar uma mensagem pelo WhatsApp ou preencher o formulário ao lado. Responderei o mais breve possível.
                </p>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-cream/80 border border-border/50 rounded-sm hover:shadow-md hover:border-bronze/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-marsala/10 flex items-center justify-center flex-shrink-0 group-hover:bg-marsala/20 transition-colors">
                  <Phone className="w-5 h-5 text-marsala" />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">WhatsApp</p>
                  <p className="font-sans text-xs text-muted-foreground">(54) 99914-1101</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/israelkmachado"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-cream/80 border border-border/50 rounded-sm hover:shadow-md hover:border-bronze/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0 group-hover:bg-bronze/20 transition-colors">
                  <Instagram className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">Instagram</p>
                  <p className="font-sans text-xs text-muted-foreground">@israelkmachado</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-cream/80 border border-border/50 rounded-sm">
                <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">Sigilo Absoluto</p>
                  <p className="font-sans text-xs text-muted-foreground">Tudo o que é dito em sessão é protegido pelo sigilo profissional</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" className="flex">
            <form
              className="bg-cream/60 border border-border/50 rounded-sm p-6 sm:p-8 flex flex-col flex-1"
              onSubmit={handleEmailSubmit}
            >
              <div className="space-y-5 flex flex-col flex-1">
                <div>
                  <label className="block font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-marsala/50 focus:ring-1 focus:ring-marsala/20 transition-all"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-marsala/50 focus:ring-1 focus:ring-marsala/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="block font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full flex-1 min-h-[120px] px-4 py-3 bg-ivory border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-marsala/50 focus:ring-1 focus:ring-marsala/20 transition-all resize-none"
                    placeholder="Escreva sua mensagem..."
                    required
                  />
                </div>
                {status === "success" && (
                  <p className="font-sans text-sm text-green-700 bg-green-50 border border-green-200 rounded-sm px-4 py-3">
                    Mensagem enviada com sucesso! Responderei em breve.
                  </p>
                )}
                {status === "error" && (
                  <p className="font-sans text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
                    Erro ao enviar. Tente novamente ou use o WhatsApp.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-colors duration-300 disabled:opacity-60"
                >
                  {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
