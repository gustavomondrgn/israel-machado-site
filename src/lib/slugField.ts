import type { Field, FieldHook } from "payload";
import slugifyLib from "slugify";

const toSlug = (value: string): string =>
  slugifyLib(value, { lower: true, strict: true, locale: "pt", trim: true });

const makeBeforeValidate =
  (sourceField: string): FieldHook =>
  ({ data, originalDoc, value }) => {
    const incomingSlug = typeof value === "string" ? value : "";
    const previousSlug = (originalDoc?.slug as string | undefined) ?? "";
    const incomingTitle = (data?.[sourceField] as string | undefined) ?? "";
    const previousTitle = (originalDoc?.[sourceField] as string | undefined) ?? "";

    if (incomingSlug && incomingSlug !== previousSlug) {
      return toSlug(incomingSlug);
    }

    if (incomingTitle && incomingTitle !== previousTitle) {
      return toSlug(incomingTitle);
    }

    if (!incomingSlug && incomingTitle) {
      return toSlug(incomingTitle);
    }

    return incomingSlug || previousSlug;
  };

export const slugField = (sourceField: "title" | "name" = "title"): Field => ({
  name: "slug",
  type: "text",
  unique: true,
  index: true,
  admin: {
    position: "sidebar",
    description: "Gerado automaticamente a partir do título. Edite para personalizar.",
  },
  hooks: {
    beforeValidate: [makeBeforeValidate(sourceField)],
  },
});
