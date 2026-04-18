import type { CollectionConfig } from "payload";
import { slugField } from "@/lib/slugField";

export const ArtigoSeries: CollectionConfig = {
  slug: "artigo-series",
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
      name: "description",
      type: "textarea",
    },
    {
      name: "cycles",
      type: "array",
      fields: [
        {
          name: "cycleNumber",
          type: "number",
          required: true,
        },
        {
          name: "cycleName",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
