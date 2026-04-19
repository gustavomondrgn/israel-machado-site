import { RichText, type JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Variant = "body" | "notes" | "references";

// Mapeia relationTo → prefixo da rota pública. Quando o editor liga a
// outro artigo via o dialog "Link → Internal", o Lexical salva
// `linkType: "internal"` + `doc.{relationTo, value}`. Sem esta função o
// href caía em "#" e o link voltava para a própria página.
const COLLECTION_ROUTES: Record<string, string> = {
  artigos: "/psicologia-cientifica",
  ensaios: "/ensaios",
};

function resolveLinkHref(fields: {
  url?: string;
  linkType?: string;
  doc?: {
    relationTo?: string;
    value?: string | number | { id?: string | number; slug?: string };
  };
}): string {
  if (fields.linkType === "internal" && fields.doc) {
    const prefix = fields.doc.relationTo
      ? COLLECTION_ROUTES[fields.doc.relationTo]
      : undefined;
    const value = fields.doc.value;
    const slug =
      value && typeof value === "object" && typeof value.slug === "string"
        ? value.slug
        : undefined;
    if (prefix && slug) return `${prefix}/${slug}`;
  }
  if (fields.url) return fields.url;
  return "#";
}

const BODY_PARAGRAPH = "font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6";
const BODY_PARAGRAPH_FIRST = `drop-cap ${BODY_PARAGRAPH}`;
const NOTES_PARAGRAPH = "font-body text-sm text-foreground/65 leading-relaxed";
const REFERENCES_PARAGRAPH = "font-body text-sm text-foreground/65 leading-relaxed";

const SMALL_LIST = "list-disc pl-5 space-y-2 font-body text-sm text-foreground/65 leading-relaxed mb-4";
const BODY_LIST = "list-disc pl-6 space-y-2 font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6";
const BODY_LIST_OL = "list-decimal pl-6 space-y-2 font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] mb-6";

const buildConverters = (variant: Variant): JSXConvertersFunction =>
  ({ defaultConverters }) => {
    const paragraphClass =
      variant === "body" ? BODY_PARAGRAPH : variant === "notes" ? NOTES_PARAGRAPH : REFERENCES_PARAGRAPH;
    const firstParagraphClass = variant === "body" ? BODY_PARAGRAPH_FIRST : paragraphClass;
    const listClass = variant === "body" ? BODY_LIST : SMALL_LIST;
    const listOlClass = variant === "body" ? BODY_LIST_OL : SMALL_LIST.replace("list-disc", "list-decimal");

    return {
      ...defaultConverters,
      paragraph: ({ node, nodesToJSX, parent, childIndex }) => {
        const children = nodesToJSX({ nodes: node.children });
        const isFirstInRoot =
          (parent as { type?: string } | undefined)?.type === "root" && childIndex === 0;
        if (!children || (Array.isArray(children) && children.length === 0)) {
          return <p className={paragraphClass}>&nbsp;</p>;
        }
        return (
          <p className={isFirstInRoot ? firstParagraphClass : paragraphClass}>
            {children}
          </p>
        );
      },
      heading: ({ node, nodesToJSX }) => {
        const children = nodesToJSX({ nodes: node.children });
        const tag = (node as { tag: string }).tag;
        if (tag === "h1") {
          return (
            <h1 className="font-body text-3xl sm:text-4xl font-semibold text-foreground mt-12 mb-6 leading-tight">
              {children}
            </h1>
          );
        }
        if (tag === "h2") {
          return (
            <h2 className="font-body text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-5 leading-tight">
              {children}
            </h2>
          );
        }
        if (tag === "h3") {
          return (
            <h3 className="font-body text-xl font-semibold text-foreground mt-8 mb-4">
              {children}
            </h3>
          );
        }
        if (tag === "h4") {
          return (
            <h4 className="font-body text-lg font-semibold text-foreground mt-6 mb-3">
              {children}
            </h4>
          );
        }
        if (tag === "h5") {
          return (
            <h5 className="font-sans text-sm tracking-[0.2em] uppercase text-bronze mt-6 mb-3">
              {children}
            </h5>
          );
        }
        return (
          <h6 className="font-sans text-xs tracking-[0.25em] uppercase text-bronze mt-6 mb-3">
            {children}
          </h6>
        );
      },
      quote: ({ node, nodesToJSX }) => {
        const children = nodesToJSX({ nodes: node.children });
        return (
          <blockquote className="my-8 pl-6 border-l-2 border-marsala/40 [&>p]:font-display [&>p]:text-lg [&>p]:lg:text-xl [&>p]:text-foreground/90 [&>p]:italic [&>p]:leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
            {children}
          </blockquote>
        );
      },
      horizontalrule: () => (
        <div className="my-10 text-center" aria-hidden="true">
          <span className="font-display text-2xl text-bronze">* * *</span>
        </div>
      ),
      list: ({ node, nodesToJSX }) => {
        const children = nodesToJSX({ nodes: node.children });
        const listType = (node as { listType?: string }).listType;
        if (listType === "number") {
          return <ol className={listOlClass}>{children}</ol>;
        }
        return <ul className={listClass}>{children}</ul>;
      },
      link: ({ node, nodesToJSX }) => {
        const children = nodesToJSX({ nodes: node.children });
        const fields = (node as {
          fields?: {
            url?: string;
            newTab?: boolean;
            linkType?: string;
            doc?: {
              relationTo?: string;
              value?: string | number | { id?: string | number; slug?: string };
            };
          };
        }).fields ?? {};
        const href = resolveLinkHref(fields);
        const newTab = fields.newTab;
        return (
          <a
            href={href}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
            className="text-marsala underline decoration-marsala/30 underline-offset-2 hover:text-marsala-light hover:decoration-marsala transition-colors"
          >
            {children}
          </a>
        );
      },
      autolink: ({ node, nodesToJSX }) => {
        const children = nodesToJSX({ nodes: node.children });
        const fields = (node as {
          fields?: {
            url?: string;
            newTab?: boolean;
            linkType?: string;
            doc?: {
              relationTo?: string;
              value?: string | number | { id?: string | number; slug?: string };
            };
          };
        }).fields ?? {};
        const href = resolveLinkHref(fields);
        const newTab = fields.newTab;
        return (
          <a
            href={href}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
            className="text-marsala underline decoration-marsala/30 underline-offset-2 hover:text-marsala-light hover:decoration-marsala transition-colors"
          >
            {children}
          </a>
        );
      },
    };
  };

export default function LexicalContent({
  data,
  variant = "body",
  className,
}: {
  data: unknown;
  variant?: Variant;
  className?: string;
}) {
  if (!data || typeof data !== "object") return null;
  const editorState = data as SerializedEditorState;
  if (!editorState.root) return null;

  const wrapperClass =
    variant === "notes" || variant === "references" ? "space-y-4" : undefined;

  return (
    <div className={className ?? wrapperClass}>
      <RichText data={editorState} converters={buildConverters(variant)} disableContainer />
    </div>
  );
}
