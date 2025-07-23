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
} from "lucide-react";

export default function FullHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

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
            <span className="text-xl font-bold gradient-text">Alessandra</span>
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
              {["home", "about", "experience", "portfolio", "contact"].map(
                (section) => (
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
                      : section === "portfolio"
                      ? "Portfólio"
                      : "Contato"}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 gradient-bg text-white">
        <div className="container text-center">
          <div className="mx-auto max-w-4xl">
            <Avatar className="h-32 w-32 mx-auto mb-8">
              <AvatarImage src="/api/placeholder/200/200" alt="Alessandra" />
              <AvatarFallback className="text-2xl">AL</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Alessandra</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Especialista em Gestão Comercial & Recursos Humanos
            </p>
            <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
              Mais de 35 anos de experiência em gestão comercial,
              desenvolvimento de pessoas e estratégias empresariais.
              Pós-graduada em Psicologia Organizacional com foco em resultados e
              inovação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection("portfolio")}
              >
                Ver Portfólio
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Entrar em Contato
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissional dedicada com expertise em transformar desafios em
              oportunidades de crescimento
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
                  </div>
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
                Alessandra
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
