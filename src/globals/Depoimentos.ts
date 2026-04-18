import type { GlobalConfig } from "payload";

export const DepoimentosGlobal: GlobalConfig = {
  slug: "depoimentos",
  label: "Depoimentos",
  fields: [
    {
      name: "testimonials",
      type: "array",
      label: "Depoimentos",
      fields: [
        {
          name: "initials",
          type: "text",
          required: true,
        },
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "text",
          type: "textarea",
          required: true,
        },
        {
          name: "date",
          type: "text",
        },
        {
          name: "location",
          type: "text",
        },
        {
          name: "verified",
          type: "checkbox",
          defaultValue: true,
        },
        {
          name: "category",
          type: "select",
          required: true,
          options: [
            { label: "Consultas", value: "Consultas" },
            {
              label: "Aulas, Palestras e Seminários",
              value: "Aulas, Palestras e Seminários",
            },
            { label: "Coral", value: "Coral" },
          ],
        },
      ],
    },
  ],
};
