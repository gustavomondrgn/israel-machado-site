import type { CollectionConfig } from "payload";
import { slugField } from "@/lib/slugField";

export const Artigos: CollectionConfig = {
  slug: "artigos",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedAt"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    slugField("title"),
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "serie",
      type: "relationship",
      relationTo: "artigo-series",
    },
    {
      name: "orderInSerie",
      type: "number",
      admin: { position: "sidebar" },
    },
    {
      name: "cycleNumber",
      type: "number",
      admin: {
        position: "sidebar",
        description:
          "Número do ciclo ao qual o artigo pertence (1, 2, 3...). O nome de cada ciclo é definido na série.",
      },
    },
    {
      name: "orderInCycle",
      type: "number",
      admin: {
        position: "sidebar",
        description: "Posição do artigo dentro do ciclo (a1=1, a2=2, etc).",
      },
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "notes",
      type: "richText",
    },
    {
      name: "references",
      type: "richText",
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Rascunho", value: "draft" },
        { label: "Em breve", value: "coming_soon" },
        { label: "Briefing", value: "briefing" },
        { label: "Esboço", value: "esboco" },
        { label: "Redigido", value: "redigido" },
        { label: "A fazer", value: "a_fazer" },
        { label: "Bônus", value: "bonus" },
        { label: "Publicado", value: "published" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: { position: "sidebar" },
    },
  ],
};
