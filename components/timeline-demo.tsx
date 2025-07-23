import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Briefcase,
  Users,
  Globe,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";

export default function TimelineDemo() {
  const data = [
    {
      title: "2020-2024",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-slate-800 md:text-base dark:text-neutral-200">
            <strong>Expansão Internacional e Certificações</strong>
          </p>
          <p className="mb-8 text-xs font-normal text-slate-700 md:text-sm dark:text-neutral-300">
            Consolidação da expertise em compras internacionais com expansão
            para novos mercados asiáticos e sul-americanos. Obtenção de
            certificação em Comércio Internacional e pós-graduação em Psicologia
            Organizacional.
          </p>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-slate-800 dark:text-neutral-200">
              Principais Conquistas:
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <Globe className="h-4 w-4 text-blue-700" />
                Estabelecimento de parcerias com 15+ fornecedores internacionais
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <Award className="h-4 w-4 text-slate-700" />
                Certificação em Comércio Internacional (2020)
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <Users className="h-4 w-4 text-blue-700" />
                Pós-graduação em Psicologia Organizacional (2018)
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <TrendingUp className="h-4 w-4 text-slate-700" />
                Redução de 30% nos custos de aquisição internacional
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 w-full rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                alt="Mockup internacional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 w-full rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                alt="Mockup certificação"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2015-2019",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-slate-800 md:text-base dark:text-neutral-200">
            <strong>Consolidação em Gestão Comercial Nacional</strong>
          </p>
          <p className="mb-8 text-xs font-normal text-slate-700 md:text-sm dark:text-neutral-300">
            Período de grande crescimento profissional com foco na
            reestruturação de departamentos comerciais e implementação de
            estratégias de vendas em escala nacional. Desenvolvimento de
            programas de treinamento e liderança de grandes equipes.
          </p>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-slate-800 dark:text-neutral-200">
              Marcos Importantes:
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <Briefcase className="h-4 w-4 text-blue-700" />
                Reestruturação completa de departamento comercial nacional
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <TrendingUp className="h-4 w-4 text-slate-700" />
                Aumento de 35% nas vendas nacionais
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <Users className="h-4 w-4 text-blue-700" />
                Treinamento de 60+ líderes em programa de desenvolvimento
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <Target className="h-4 w-4 text-slate-700" />
                Implementação de 12 novos territórios comerciais
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 w-full rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
                alt="Mockup crescimento"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 w-full rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="Mockup liderança"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "1988-2014",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-slate-800 md:text-base dark:text-neutral-200">
            <strong>Formação e Início da Carreira</strong>
          </p>
          <p className="mb-8 text-xs font-normal text-slate-700 md:text-sm dark:text-neutral-300">
            Graduação em Administração de Empresas e início da trajetória
            profissional em empresas de grande porte. Desenvolvimento gradual de
            expertise em gestão comercial, recursos humanos e operações
            empresariais.
          </p>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-slate-800 dark:text-neutral-200">
              Fundamentos da Carreira:
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <Award className="h-4 w-4 text-blue-700" />
                Graduação em Administração de Empresas (1988)
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <Briefcase className="h-4 w-4 text-slate-700" />
                Primeiras experiências em empresas nacionais
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <Users className="h-4 w-4 text-blue-700" />
                Desenvolvimento em gestão de pessoas
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 md:text-sm dark:text-neutral-300">
                <Target className="h-4 w-4 text-slate-700" />
                Base sólida em estratégias comerciais
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 w-full rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
                alt="Mockup formação"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 w-full rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Mockup início"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
