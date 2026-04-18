"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ivory p-8 text-center">
      <AlertTriangle className="w-12 h-12 text-marsala mb-4" />
      <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
        Algo deu errado
      </h2>
      <p className="font-body text-sm text-foreground/60 mb-6 max-w-md">
        {error.message || "Ocorreu um erro inesperado."}
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-colors"
      >
        <RotateCcw className="w-4 h-4" />
        Tentar novamente
      </button>
    </div>
  );
}
