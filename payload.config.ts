import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Ensaios } from "@/collections/Ensaios";
import { EnsaioCategories } from "@/collections/EnsaioCategories";
import { EnsaioSeries } from "@/collections/EnsaioSeries";
import { Artigos } from "@/collections/Artigos";
import { ArtigoSeries } from "@/collections/ArtigoSeries";

import { SiteConfig } from "@/globals/SiteConfig";
import { HomeContent } from "@/globals/HomeContent";
import { DepoimentosGlobal } from "@/globals/Depoimentos";
import { ServicosContent } from "@/globals/ServicosContent";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Ensaios,
    EnsaioCategories,
    EnsaioSeries,
    Artigos,
    ArtigoSeries,
  ],
  globals: [SiteConfig, HomeContent, DepoimentosGlobal, ServicosContent],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [],
});
