# Portfólio Profissional - Alessandra

Uma página de apresentação profissional moderna e responsiva desenvolvida com Next.js, TypeScript e Tailwind CSS, utilizando o sistema de design shadcn/ui.

## 🚀 Características

- **Design Moderno**: Interface elegante e profissional
- **Totalmente Responsiva**: Adaptada para todos os tamanhos de tela
- **Performance Otimizada**: Construída com Next.js 14
- **Acessibilidade**: Componentes acessíveis do Radix UI
- **Animações Suaves**: Transições e animações elegantes
- **SEO Otimizado**: Meta tags e estrutura otimizada para mecanismos de busca

## 🛠️ Tecnologias

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: shadcn/ui (Radix UI)
- **Ícones**: Lucide React
- **Fontes**: Google Fonts (Inter)

## 📱 Seções da Página

1. **Header Responsivo**: Navegação fixa com menu mobile
2. **Hero Section**: Apresentação principal com call-to-action
3. **Sobre**: Descrição detalhada do perfil profissional
4. **Habilidades**: Grid de competências e expertise
5. **Experiência**: Formação acadêmica e certificações
6. **Portfólio**: Projetos profissionais com filtros por categoria
7. **Contato**: Informações de contato e áreas de interesse

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos para execução

1. **Clone o repositório**:

   ```bash
   git clone <url-do-repositorio>
   cd alessandra-portfolio
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra no navegador**:
   ```
   http://localhost:3000
   ```

## 📦 Scripts Disponíveis

- `npm run dev`: Executa em modo de desenvolvimento
- `npm run build`: Cria a build de produção
- `npm run start`: Executa a build de produção
- `npm run lint`: Executa o linter

## 📁 Estrutura do Projeto

```
alessandra-portfolio/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx          # Layout raiz
│   └── page.tsx            # Página principal
├── components/
│   └── ui/                 # Componentes shadcn/ui
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── separator.tsx
├── data/
│   └── portfolio.ts        # Dados do portfólio
├── lib/
│   └── utils.ts           # Utilitários
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Personalização

### Cores e Tema

As cores podem ser personalizadas no arquivo `app/globals.css` através das variáveis CSS:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... outras variáveis */
}
```

### Dados do Portfólio

Os dados dos projetos e informações profissionais estão no arquivo `data/portfolio.ts` e podem ser facilmente modificados.

## 📱 Responsividade

A página foi desenvolvida com abordagem mobile-first e é totalmente responsiva:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Funcionalidades

- Navegação suave entre seções
- Menu mobile responsivo
- Filtros interativos no portfólio
- Animações CSS personalizadas
- Gradientes e efeitos visuais
- Cards interativos com hover effects
- Layout adaptativo para diferentes telas

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido com ❤️ para destacar a excelência profissional de Alessandra.
