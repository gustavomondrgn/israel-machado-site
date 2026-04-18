"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ExpandableSection({
  title,
  preview,
  children,
}: {
  title: string;
  preview: React.ReactNode;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-cream border border-border/50 rounded-sm overflow-hidden">
      <div className="p-6 lg:p-8">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-5">
          {title}
        </h2>
        <div className="font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9]">
          {preview}
        </div>

        {expanded && (
          <div className="mt-6 font-body text-base lg:text-[1.1rem] text-foreground/85 leading-[1.9] animate-in fade-in duration-500">
            {children}
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 inline-flex items-center gap-2 py-2 -my-2 font-sans text-sm text-marsala hover:text-marsala-light transition-colors tracking-wide"
        >
          {expanded ? (
            <>
              Recolher
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Leia mais
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
