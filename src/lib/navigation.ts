interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubItem[];
}

export const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  {
    label: "Principais Áreas",
    href: "/#areas",
    children: [
      { label: "Depressão", href: "/area/depressao" },
      { label: "Ansiedade", href: "/area/ansiedade" },
      { label: "Luto Prolongado e Perdas", href: "/area/luto" },
      { label: "Quando a dor não tem nome", href: "/area/dor-sem-nome" },
    ],
  },
  { label: "Serviços", href: "/servicos" },
  { label: "Psicologia Científica", href: "/psicologia-cientifica" },
  { label: "Ensaios", href: "/ensaios" },
  { label: "Depoimentos", href: "/depoimentos" },
];

export const WHATSAPP_LINK =
  "https://wa.me/5554999141101?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
