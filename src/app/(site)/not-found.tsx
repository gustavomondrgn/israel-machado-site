import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ivory p-8 text-center">
      <h1 className="font-display text-[8rem] sm:text-[12rem] font-bold text-marsala/15 leading-none select-none">
        404
      </h1>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground -mt-6 mb-4">
        Página não encontrada
      </h2>
      <p className="font-body text-base text-foreground/65 mb-8 max-w-md">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-colors"
      >
        Voltar ao Início
      </Link>
    </div>
  );
}
