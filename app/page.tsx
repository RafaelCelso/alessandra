"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { portfolioData, skills, certifications } from "@/data/portfolio";
import TimelineDemo from "@/components/timeline-demo";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Target,
  TrendingUp,
  Users,
  Globe,
  ChevronRight,
  ExternalLink,
  Brain,
  Crown,
  BarChart3,
  LineChart,
  Heart,
} from "lucide-react";
import dynamic from "next/dynamic";
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section"),
  { ssr: false }
);

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Mapeamento de ícones para habilidades
  const skillIcons: { [key: string]: any } = {
    "Gestão Comercial": Briefcase,
    "Recursos Humanos": Users,
    "Psicologia Organizacional": Brain,
    "Liderança de Equipes": Crown,
    "Compras Internacionais": Globe,
    // "Negociação Estratégica": Handshake, // removido pois não está em uso
    "Trade Marketing": TrendingUp,
    "Business Intelligence": BarChart3,
    "Análise de Mercado": Target,
    Forecasting: LineChart,
    "Customer Success": Heart,
    "Desenvolvimento de Pessoas": GraduationCap,
  };

  const categories = [
    "Todos",
    ...Array.from(new Set(portfolioData.map((project) => project.category))),
  ];
  const filteredProjects =
    selectedCategory === "Todos"
      ? portfolioData
      : portfolioData.filter(
          (project) => project.category === selectedCategory
        );

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold gradient-text">
              Alessandra Fregnan
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Trajetória
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                "home",
                "about",
                "experience",
                "timeline",
                "portfolio",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors w-full text-left"
                >
                  {section === "home"
                    ? "Início"
                    : section === "about"
                    ? "Sobre"
                    : section === "experience"
                    ? "Experiência"
                    : section === "timeline"
                    ? "Trajetória"
                    : section === "portfolio"
                    ? "Portfólio"
                    : "Contato"}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center gradient-bg text-white overflow-hidden pb-24 lg:pb-0"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4 mt-6 md:mt-0">
                  ✨ Transformando organizações há 35+ anos
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Alessandra Fregnan
                </h1>
                <div className="h-1 w-20 bg-white/60 rounded-full"></div>
                <p className="text-2xl md:text-3xl font-light opacity-90">
                  Especialista em Gestão Comercial & Recursos Humanos
                </p>
              </div>

              {/* Avatar e cards flutuantes - MOBILE */}
              <div className="block lg:hidden w-full mx-auto my-8">
                <div className="flex flex-col items-center relative">
                  <Avatar className="h-48 w-48 mx-auto float-animation border-4 border-white/20">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Alessandra Fregnan"
                    />
                    <AvatarFallback className="text-6xl bg-white/10 text-white">
                      AL
                    </AvatarFallback>
                  </Avatar>
                  {/* Cards flutuantes mobile */}
                  <div className="flex justify-between w-full mt-4 px-2 gap-2">
                    <div className="glass-card p-3 rounded-2xl flex-1 flex flex-col items-center">
                      <Target className="h-6 w-6 text-white/80 mb-1" />
                      <div className="text-white font-semibold text-xs text-center">
                        Gestão Estratégica
                      </div>
                      <div className="text-white/60 text-xs text-center">
                        Liderança & Resultados
                      </div>
                    </div>
                    <div className="glass-card p-3 rounded-2xl flex-1 flex flex-col items-center">
                      <Globe className="h-6 w-6 text-white/80 mb-1" />
                      <div className="text-white font-semibold text-xs text-center">
                        Visão Global
                      </div>
                      <div className="text-white/60 text-xs text-center">
                        Negócios Internacionais
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl leading-relaxed opacity-80 max-w-lg">
                Profissional pós-graduada com mais de três décadas de
                experiência em transformar estratégias empresariais em
                resultados excepcionais.
              </p>

              {/* Avatar e cards flutuantes - DESKTOP */}
              <div className="hidden lg:block"></div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollToSection("timeline")}
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  Ver Trajetória
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-blue-400/50 text-white bg-blue-500/20 hover:bg-blue-500/30 hover:border-blue-300/70 backdrop-blur-sm transition-all duration-300"
                >
                  Vamos Conversar
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">35+</div>
                  <div className="text-sm opacity-70">Anos Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm opacity-70">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-70">Países Parceiros</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-0">
                <Avatar className="h-80 w-80 mx-auto float-animation border-4 border-white/20">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Alessandra Fregnan"
                  />
                  <AvatarFallback className="text-6xl bg-white/10 text-white">
                    AL
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Floating elements desktop */}
              <div className="absolute top-10 right-10 glass-card p-4 rounded-2xl z-10">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-white/80" />
                  <div>
                    <div className="text-white font-semibold">
                      Gestão Estratégica
                    </div>
                    <div className="text-white/60 text-sm">
                      Liderança & Resultados
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 glass-card p-4 rounded-2xl z-10">
                <div className="flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-white/80" />
                  <div>
                    <div className="text-white font-semibold">Visão Global</div>
                    <div className="text-white/60 text-sm">
                      Negócios Internacionais
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronRight className="h-6 w-6 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="section-divider max-w-xs mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Profissional dedicada com expertise em transformar desafios
              complexos em oportunidades estratégicas de crescimento sustentável
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Profissional pós-graduada em{" "}
                <strong>Psicologia Organizacional</strong> com ênfase em Gestão
                Estratégica de Recursos Humanos, graduada em{" "}
                <strong>Administração de Empresas</strong>, com mais de{" "}
                <strong>35 anos de experiência</strong> na área comercial.
              </p>
              <p className="text-lg leading-relaxed">
                Atuei em empresas nacionais de grande porte com expertise em
                planejar estratégias e gerenciar diretrizes para comercialização
                de novos negócios, sempre focada em
                <strong> atingir objetivos</strong> e{" "}
                <strong>aumentar participação no mercado</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Tenho experiência consolidada em{" "}
                <strong>gestão de processos de vendas a nível Brasil</strong>,
                elaboração de forecast, balanced score e negociações
                estratégicas. Também possuo forte atuação em{" "}
                <strong>compras internacionais</strong> com contato direto com
                fornecedores da China, Índia, Paquistão e Colômbia.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Principais Competências
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Gestão de Equipes Comerciais
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Desenvolvimento de Pessoas
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Compras Internacionais
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Trade Marketing
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      Business Intelligence
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Resultados Alcançados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">35+</div>
                      <div className="text-sm text-muted-foreground">
                        Anos de Experiência
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        100+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Projetos Executados
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">
                        Equipes Lideradas
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">
                        Países Parceiros
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              EXPERTISE
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Habilidades & Competências
            </h2>
            <div className="section-divider max-w-xs mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Arsenal completo de competências desenvolvidas ao longo de uma
              carreira excepcional
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skillIcons[skill] || Target;
              return (
                <Card
                  key={index}
                  className="modern-hover border-0 shadow-lg bg-gradient-to-br from-white to-slate-50"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-gray-900">{skill}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Formação & Certificações
            </h2>
            <p className="text-xl text-muted-foreground">
              Base acadêmica sólida para excelência profissional
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-primary mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <CardDescription className="text-base">
                        {cert.institution} • {cert.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Foco:</strong> {cert.focus}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-32 bg-slate-200">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              TRAJETÓRIA
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Linha do Tempo Profissional
            </h2>
            <div className="section-divider max-w-xs mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mais de 35 anos de experiência construindo carreiras de sucesso e
              transformando organizações através de liderança estratégica e
              excelência em gestão
            </p>
          </div>
        </div>
        <TimelineDemo />
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-32 bg-gradient-to-br from-gray-50 to-slate-100"
      >
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Projetos & Conquistas
            </h2>
            <div className="section-divider max-w-xs mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma seleção dos principais projetos que demonstram excelência em
              gestão e resultados transformadores
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="aspect-video rounded-md mb-4 overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    {project.company} • {project.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Tecnologias/Métodos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Principais Resultados:
                    </h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 3).map((result, index) => (
                        <li
                          key={index}
                          className="text-sm flex items-start gap-2"
                        >
                          <ChevronRight className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos Conversar
            </h2>
            <p className="text-xl text-muted-foreground">
              Estou sempre aberta a novas oportunidades e desafios
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-6">
                      Informações de Contato
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-muted-foreground">
                            alessandra@exemplo.com
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Telefone</div>
                          <div className="text-muted-foreground">
                            +55 11 99999-9999
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">LinkedIn</div>
                          <div className="text-muted-foreground">
                            linkedin.com/in/alessandra
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Localização</div>
                          <div className="text-muted-foreground">
                            São Paulo, SP - Brasil
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-6">
                      Áreas de Interesse
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>Consultoria em Gestão de Pessoas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>Estratégia Comercial</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        <span>Negócios Internacionais</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span>Treinamento e Desenvolvimento</span>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <p className="text-muted-foreground">
                      Disponível para projetos de consultoria, palestras,
                      treinamentos e oportunidades de liderança em organizações
                      que valorizam a excelência e o desenvolvimento humano.
                    </p>
                  </div>
                </div>
                {/* Formulário de Contato ocupa toda a largura do card */}
                <div className="w-full mt-12">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 justify-center">
                    <Mail className="h-6 w-6 text-primary" /> Envie uma mensagem
                  </h3>
                  <form className="space-y-6 max-w-2xl mx-auto">
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="nome"
                          className="block text-sm font-medium text-muted-foreground mb-1"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          className="w-full rounded-md border border-input bg-background px-4 py-2 text-base shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-muted-foreground mb-1"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-md border border-input bg-background px-4 py-2 text-base shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="telefone"
                          className="block text-sm font-medium text-muted-foreground mb-1"
                        >
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          pattern="[0-9\-\(\)\s]+"
                          className="w-full rounded-md border border-input bg-background px-4 py-2 text-base shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                          placeholder="(99) 99999-9999"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="mensagem"
                          className="block text-sm font-medium text-muted-foreground mb-1"
                        >
                          Mensagem
                        </label>
                        <textarea
                          id="mensagem"
                          name="mensagem"
                          rows={5}
                          required
                          className="w-full rounded-md border border-input bg-background px-4 py-2 text-base shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                          placeholder="Digite sua mensagem..."
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground font-semibold rounded-md py-3 px-6 hover:bg-primary/90 transition-colors shadow-sm"
                      >
                        Enviar Mensagem
                      </button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-xl font-bold gradient-text">
                Alessandra Fregnan
              </span>
              <span className="text-muted-foreground">
                • Especialista em Gestão Comercial & RH
              </span>
            </div>
            <div className="text-center md:text-right text-muted-foreground">
              <p>&copy; 2024 Alessandra. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">
                Desenvolvido com paixão por excelência profissional
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
