import FadeIn from "@/components/FadeIn";

export default function Depoimentos() {
  return (
    <section className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="container max-w-3xl">
        <FadeIn direction="up" duration={0.7}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-bronze" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-warm-500">
              Depoimentos
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Depoimentos
          </h1>
          <div className="w-16 h-[2px] bg-marsala/50 mb-8" />
          <p className="font-body text-lg text-foreground/70 leading-relaxed">
            Em breve, esta seção reunirá relatos de pessoas que passaram pelo processo terapêutico.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
