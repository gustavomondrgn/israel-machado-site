import type { GlobalConfig } from "payload";

export const ServicosContent: GlobalConfig = {
  slug: "servicos-content",
  label: "Conteúdo de Serviços",
  fields: [
    {
      name: "pricePresencial",
      type: "number",
      label: "Preço Presencial (R$)",
      defaultValue: 200,
    },
    {
      name: "priceOnline",
      type: "number",
      label: "Preço Online (R$)",
      defaultValue: 180,
    },
    {
      name: "footerNote",
      type: "textarea",
      label: "Nota de rodapé",
      defaultValue:
        "Os valores podem ser conversados. A ideia é que o custo não seja um impedimento para quem precisa de atendimento.",
    },
  ],
};
