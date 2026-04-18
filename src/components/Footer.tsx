import Link from "next/link";
import { Phone, Instagram } from "lucide-react";
import { navItems, WHATSAPP_LINK } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-night text-warm-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-warm-100 mb-3">
              Israel Machado
            </h3>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-warm-400 mb-4">
              Psicólogo Clínico &middot; CRP 07/43950
            </p>
            <p className="font-body text-sm text-warm-300 leading-relaxed">
              Psicoterapia psicanalítica. Atendimento presencial e online.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-bronze mb-4">
              Navegação
            </h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm text-warm-300 hover:text-warm-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-bronze mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-warm-300">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                (54) 99914-1101
              </a>
              <a
                href="https://www.instagram.com/israelkmachado"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-100 transition-colors flex items-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5" />
                @israelkmachado
              </a>
              <p className="text-warm-400 text-xs mt-2">Passo Fundo, RS</p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-warm-500">
            &copy; {new Date().getFullYear()} Israel Machado. Todos os direitos
            reservados.
          </p>
          <p className="font-sans text-xs text-warm-600">CRP 07/43950</p>
        </div>
      </div>
    </footer>
  );
}
