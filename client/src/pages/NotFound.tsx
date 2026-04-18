import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <p className="font-display text-8xl font-semibold text-marsala/20 mb-4">404</p>
            <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
              Página não encontrada
            </h1>
            <p className="font-body text-base text-foreground/65 leading-relaxed mb-8">
              A página que você procura não existe ou foi movida.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-marsala text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-marsala-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
