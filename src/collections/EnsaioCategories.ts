import type { CollectionConfig } from "payload";
import { slugField } from "@/lib/slugField";

export const EnsaioCategories: CollectionConfig = {
  slug: "ensaio-categories",
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
  ],
};
