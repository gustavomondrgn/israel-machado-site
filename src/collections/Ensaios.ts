import type { CollectionConfig } from "payload";
import { slugField } from "@/lib/slugField";

export const Ensaios: CollectionConfig = {
  slug: "ensaios",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "status", "publishedAt"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    slugField("title"),
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "ensaio-categories",
      required: true,
    },
    {
      name: "serie",
      type: "relationship",
      relationTo: "ensaio-series",
    },
    {
      name: "orderInSerie",
      type: "number",
      admin: { position: "sidebar" },
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
