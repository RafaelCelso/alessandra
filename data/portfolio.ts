export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  duration: string;
  results: string[];
  company?: string;
}

export const portfolioData: Project[] = [
  {
    id: 1,
    title: "Reestruturação Comercial Nacional",
    description:
      "Liderou a reestruturação completa do departamento comercial de uma empresa nacional de grande porte, implementando novas diretrizes estratégicas e processos de vendas.",
    category: "Gestão Comercial",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
    technologies: [
      "Análise de Mercado",
      "Balanced Scorecard",
      "Forecasting",
      "CRM",
    ],
    duration: "18 meses",
    results: [
      "Aumento de 35% nas vendas nacionais",
      "Redução de 25% no ciclo de vendas",
      "Implementação de 12 novos territórios comerciais",
      "Treinamento de 45+ vendedores",
    ],
    company: "Empresa Nacional de Grande Porte",
  },
  {
    id: 2,
    title: "Expansão Internacional - Compras Globais",
    description:
      "Desenvolvimento e implementação de estratégia de compras internacionais, estabelecendo parcerias com fornecedores na Ásia e América Latina.",
    category: "Compras Internacionais",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    technologies: [
      "Negociação Internacional",
      "Supply Chain",
      "Import/Export",
      "Sourcing Global",
    ],
    duration: "24 meses",
    results: [
      "Redução de 30% nos custos de aquisição",
      "Estabelecimento de 15+ fornecedores internacionais",
      "Diversificação de mercados: China, Índia, Paquistão, Colômbia",
      "Otimização de 40% no tempo de importação",
    ],
    company: "Setor Automotivo e Ferramentas",
  },
  {
    id: 3,
    title: "Programa de Desenvolvimento de Liderança",
    description:
      "Criação e implementação de programa abrangente de desenvolvimento de liderança focado em gestão de pessoas e resultados comerciais.",
    category: "Gestão de Pessoas",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    technologies: [
      "Psicologia Organizacional",
      "Coaching",
      "Treinamento",
      "Avaliação 360°",
    ],
    duration: "12 meses",
    results: [
      "Treinamento de 60+ líderes",
      "Melhoria de 40% nos indicadores de engajamento",
      "Redução de 50% no turnover da equipe comercial",
      "Implementação de plano de carreira estruturado",
    ],
    company: "Recursos Humanos Corporativo",
  },
  {
    id: 4,
    title: "Campanha de Trade Marketing Integrada",
    description:
      "Desenvolvimento e execução de campanha integrada de trade marketing focada no aumento de market share e fortalecimento da marca.",
    category: "Marketing Comercial",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    technologies: [
      "Trade Marketing",
      "Análise de ROI",
      "Merchandising",
      "Promoção de Vendas",
    ],
    duration: "8 meses",
    results: [
      "Crescimento de 28% no market share",
      "Aumento de 45% na visibilidade da marca",
      "ROI de 320% na campanha",
      "Expansão para 200+ pontos de venda",
    ],
    company: "Setor de Bens de Consumo",
  },
  {
    id: 5,
    title: "Sistema de CRM e Análise de Vendas",
    description:
      "Implementação de sistema integrado de CRM com dashboards analíticos para acompanhamento de KPIs comerciais e previsão de vendas.",
    category: "Tecnologia Comercial",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    technologies: [
      "Business Intelligence",
      "CRM",
      "Analytics",
      "Relatórios Gerenciais",
    ],
    duration: "6 meses",
    results: [
      "Automatização de 80% dos processos comerciais",
      "Melhoria de 60% na precisão do forecast",
      "Redução de 35% no tempo de geração de relatórios",
      "Integração de dados de 5 filiais regionais",
    ],
    company: "Tecnologia e Inovação",
  },
  {
    id: 6,
    title: "Recuperação de Carteira de Clientes",
    description:
      "Estratégia abrangente de recuperação e reativação de clientes inativos, incluindo análise de perfil, segmentação e campanhas personalizadas.",
    category: "Relacionamento com Cliente",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
    technologies: [
      "Customer Success",
      "Análise de Dados",
      "Segmentação",
      "Automação de Marketing",
    ],
    duration: "10 meses",
    results: [
      "Reativação de 42% da carteira inativa",
      "Recuperação de R$ 2,8M em receita perdida",
      "Aumento de 55% na retenção de clientes",
      "Implementação de programa de fidelidade",
    ],
    company: "Gestão Comercial Estratégica",
  },
];

export const skills = [
  "Gestão Comercial",
  "Recursos Humanos",
  "Psicologia Organizacional",
  "Liderança de Equipes",
  "Compras Internacionais",
  "Negociação Estratégica",
  "Trade Marketing",
  "Business Intelligence",
  "Análise de Mercado",
  "Forecasting",
  "Customer Success",
  "Desenvolvimento de Pessoas",
];

export const certifications = [
  {
    title: "Pós-graduação em Psicologia Organizacional",
    institution: "Instituição de Ensino Superior",
    year: "2018",
    focus: "Gestão Estratégica de Recursos Humanos",
  },
  {
    title: "Graduação em Administração de Empresas",
    institution: "Universidade",
    year: "1988",
    focus: "Gestão Empresarial",
  },
  {
    title: "Certificação em Comércio Internacional",
    institution: "Câmara de Comércio",
    year: "2020",
    focus: "Import/Export e Negociações Globais",
  },
];
