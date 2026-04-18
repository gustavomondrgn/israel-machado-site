import "dotenv/config";
import { getPayload } from "payload";
import config from "../../payload.config";

async function seed() {
  const payload = await getPayload({ config });

  console.log("Seeding database...");

  // 1. Create ensaio categories
  const categories = [
    { name: "Mitos e Símbolos", slug: "mitos-e-simbolos" },
    { name: "Psicologia e Realidade", slug: "psicologia-e-realidade" },
    { name: "Psicologia e Literatura", slug: "psicologia-e-literatura" },
  ];

  for (const cat of categories) {
    const existing = await payload.find({
      collection: "ensaio-categories",
      where: { slug: { equals: cat.slug } },
    });
    if (existing.docs.length > 0) {
      console.log(`  Category "${cat.name}" already exists.`);
    } else {
      await payload.create({
        collection: "ensaio-categories",
        data: cat,
      });
      console.log(`  Created category "${cat.name}"`);
    }
  }

  // 2. Seed SiteConfig
  await payload.updateGlobal({
    slug: "site-config",
    data: {
      whatsappNumber: "5554999141101",
      whatsappMessage: "Olá, gostaria de agendar uma consulta.",
      instagramUrl: "https://www.instagram.com/israelkmachado",
      doctoraliaUrl:
        "https://www.doctoralia.com.br/israel-machado/psicologo/passo-fundo",
      crp: "CRP 07/43950",
      address: "Rua Uruguai, 1969 — Passo Fundo, RS",
    },
  });
  console.log("  Updated SiteConfig");

  // 3. Seed Depoimentos
  await payload.updateGlobal({
    slug: "depoimentos",
    data: {
      testimonials: [
        {
          initials: "E.M.",
          name: "E.M.",
          text: "Estou fazendo meu acompanhamento terapêutico há 3 meses em uma jornada de tratamento para depressão e após passar com outros psicólogos sem obter melhora, encontrei no Israel o profissional que eu precisava: muito competente, atencioso, humano e acolhedor. De alguma forma me sinto melhor a cada consulta. Indico para quem quer uma terapia realmente eficaz.",
          date: "15 de janeiro de 2026",
          location: "Clinical Center",
          verified: true,
          category: "Consultas",
        },
        {
          initials: "M.J.",
          name: "María José Brito",
          text: "Um excelente profissional, que oferece atendimento de alta qualidade. Suas intervenções são totalmente precisas, e o consultório e o prédio são muito privativos e inspiram muita confiança.",
          date: "8 de janeiro de 2026",
          location: "Clinical Center",
          verified: true,
          category: "Consultas",
        },
        {
          initials: "L.O.",
          name: "L. O. P. F.",
          text: "O doutor Israel é um fantástico profissional, muito atencioso, dedicado e um poço de conhecimento. Posso garantir que quem for se consultar/ser atendido por ele terá uma experiência positiva.",
          date: "12 de fevereiro de 2026",
          location: "Atendimento online",
          verified: true,
          category: "Consultas",
        },
        {
          initials: "M.A.",
          name: "Marcelo Amaral",
          text: "Ótimo profissional! Tem um conhecimento enorme sobre saúde mental.",
          date: "",
          location: "",
          verified: true,
          category: "Aulas, Palestras e Seminários",
        },
        {
          initials: "A.P.",
          name: "Artur Pazinatto",
          text: "O Israel é uma pessoa incrível quanto a sua humanidade, generosidade e humildade. Nas experiências de como maestro do coral Santa Teresinha ele sempre foi muito disposto a ensinar particularmente, a entender as capacidades únicas de cada um de nós. Uma pessoa humana!",
          date: "",
          location: "",
          verified: true,
          category: "Coral",
        },
      ],
    },
  });
  console.log("  Updated Depoimentos (5 sample entries)");

  console.log("Seed complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
