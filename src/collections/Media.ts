import path from "path";
import { fileURLToPath } from "url";
import type { CollectionConfig } from "payload";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "alt",
    defaultColumns: ["filename", "alt", "mimeType", "filesize"],
  },
  upload: {
    staticDir: path.resolve(dirname, "../../public/media"),
    mimeTypes: [
      "image/png",
      "image/jpeg",
      "image/webp",
      "image/gif",
      "image/svg+xml",
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description: "Texto alternativo para acessibilidade e SEO.",
      },
    },
  ],
};
