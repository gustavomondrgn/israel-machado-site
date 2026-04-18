import type { GlobalConfig } from "payload";

export const SiteConfig: GlobalConfig = {
  slug: "site-config",
  label: "Configurações do Site",
  fields: [
    {
      name: "whatsappNumber",
      type: "text",
      label: "WhatsApp (número completo)",
      defaultValue: "5554999141101",
    },
    {
      name: "whatsappMessage",
      type: "text",
      label: "Mensagem pré-preenchida do WhatsApp",
      defaultValue: "Olá, gostaria de agendar uma consulta.",
    },
    {
      name: "instagramUrl",
      type: "text",
      label: "URL do Instagram",
      defaultValue: "https://www.instagram.com/israelkmachado",
    },
    {
      name: "doctoraliaUrl",
      type: "text",
      label: "URL do Doctoralia",
      defaultValue:
        "https://www.doctoralia.com.br/israel-machado/psicologo/passo-fundo",
    },
    {
      name: "crp",
      type: "text",
      label: "CRP",
      defaultValue: "CRP 07/43950",
    },
    {
      name: "address",
      type: "text",
      label: "Endereço principal",
      defaultValue: "Rua Uruguai, 1969 — Passo Fundo, RS",
    },
    {
      name: "contactEmail",
      type: "email",
      label: "Email para receber formulário de contato",
    },
  ],
};
