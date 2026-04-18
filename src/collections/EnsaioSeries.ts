import type { CollectionConfig } from "payload";
import { slugField } from "@/lib/slugField";

export const EnsaioSeries: CollectionConfig = {
  slug: "ensaio-series",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    slugField("name"),
    {
      name: "category",
      type: "relationship",
      relationTo: "ensaio-categories",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
};
