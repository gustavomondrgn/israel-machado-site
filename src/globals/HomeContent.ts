import type { GlobalConfig } from "payload";

export const HomeContent: GlobalConfig = {
  slug: "home-content",
  label: "Conteúdo da Home",
  fields: [
    {
      name: "heroTitle",
      type: "text",
      label: "Título do Hero",
    },
    {
      name: "heroSubtitle",
      type: "text",
      label: "Subtítulo do Hero",
    },
    {
      name: "heroDescription",
      type: "textarea",
      label: "Descrição do Hero",
    },
    {
      name: "heroNote",
      type: "text",
      label: "Nota do Hero",
    },
  ],
};
