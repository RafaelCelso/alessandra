import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "A Alessandra foi fundamental para a transformação da nossa área comercial. Sua liderança e visão estratégica trouxeram resultados concretos.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Mariana Silva",
    role: "Diretora Comercial, Grupo Alpha",
  },
  {
    text: "Profissional extremamente dedicada, com grande capacidade de engajar equipes e entregar projetos de alto impacto.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Carlos Souza",
    role: "CEO, Beta Solutions",
  },
  {
    text: "A consultoria da Alessandra elevou nosso RH a outro patamar. Recomendo fortemente!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Fernanda Lima",
    role: "Gerente de RH, Gamma Corp",
  },
  {
    text: "Sua experiência internacional foi essencial para nossa expansão global.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "João Pereira",
    role: "COO, Delta Export",
  },
  {
    text: "A Alessandra tem uma habilidade única de transformar desafios em oportunidades.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Patrícia Ramos",
    role: "Head de Projetos, Epsilon Ltda",
  },
  {
    text: "O suporte e acompanhamento foram impecáveis do início ao fim do projeto.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Juliana Costa",
    role: "Analista de Processos, Zeta Inc.",
  },
  {
    text: "A expertise da Alessandra em gestão comercial fez toda diferença nos nossos resultados.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Ricardo Martins",
    role: "Gerente de Vendas, Omega S.A.",
  },
  {
    text: "Excelente profissional, sempre atenta às necessidades do cliente.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Ana Paula Dias",
    role: "Supervisora de Atendimento, Sigma Co.",
  },
  {
    text: "A consultoria foi um divisor de águas para nossa empresa.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Eduardo Alves",
    role: "Diretor de Operações, Lambda Group",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-primary font-medium bg-primary/10">
              Testemunhos
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            O que dizem sobre meu trabalho
          </h2>
          <p className="text-center mt-5 opacity-75">
            Veja o que clientes e parceiros falam sobre minha atuação
            profissional.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
