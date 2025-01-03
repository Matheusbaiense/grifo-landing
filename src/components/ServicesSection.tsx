'use client';

import React from 'react';
import { 
  Lightbulb,
  BarChart,
  Brain,
  Code,
  PenTool,
  LayoutGrid,
  ArrowRight,
  LucideIcon
} from 'lucide-react';

// Types
interface Service {
  icon: LucideIcon;
  category: string;
  title: string;
  subtitle: string;
  services: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const handleClick = () => {
    const message = `Olá! Gostaria de saber mais sobre ${service.title}.`;
    const url = `https://wa.me/5527999818324?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const Icon = service.icon;

  return (
    <div 
      className="group bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300 h-full"
      role="article"
    >
      <div className="flex flex-col h-full">
        {/* Icon & Category Tag */}
        <div className="flex items-start justify-between mb-6">
          <div 
            className="flex items-center justify-center w-14 h-14 rounded-lg bg-purple-500/10 group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          >
            <Icon className="w-7 h-7 text-purple-500" />
          </div>
          <span className="font-montserrat text-purple-500 text-sm font-semibold tracking-wider uppercase">
            {service.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h3 className="font-forum text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
            {service.title}
          </h3>
          <p className="font-montserrat text-gray-400 text-lg font-medium">
            {service.subtitle}
          </p>
        </div>

        {/* Services List */}
        <ul className="space-y-3 mb-8 flex-grow" role="list">
          {service.services.map((item) => (
            <li 
              key={item} 
              className="flex items-start gap-3 text-gray-400 font-montserrat"
            >
              <span 
                className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5" 
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button 
          onClick={handleClick}
          className="font-montserrat w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700 
            hover:from-purple-500 hover:to-purple-600 text-white rounded-lg 
            transition-all duration-300 flex items-center justify-center gap-2 
            group/btn transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label={`Solicitar proposta para ${service.title}`}
        >
          Solicitar Proposta
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

const services: Service[] = [

  {
    icon: BarChart,
    category: "Marketing",
    title: "MARKETING & PERFORMANCE",
    subtitle: "Resultados Mensuráveis e Escaláveis",
    services: [
      "Tráfego Pago",
      "Marketing Digital",
      "SEO & Conteúdo Estratégico",
      "Mídia Paga & Performance",
      "Growth Hacking"      
    ]
  },
  {
    icon: Brain,
    category: "IA",
    title: "INTELIGÊNCIA ARTIFICIAL",
    subtitle: "Soluções com IA",
    services: [
      "Desenvolvimento de IAs Customizadas",
      "Chatbots & Assistentes Virtuais",
      "Automação Inteligente de Processos",
      "Machine Learning & Data Science",
      "IA Generativa para Negócios"
    ]
  },
  {
    icon: PenTool,
    category: "Design e Social Media",
    title: "DESIGN & CRIAÇÃO",
    subtitle: "Design Estratégico & Conversivo",
    services: [
      "Criativos para Redes Sociais",
      "Social Media",
      "Branding & Identidade Visual",
      "Coppywriter",
      "Storytelling",
      
    ]
  },
  {
    icon: LayoutGrid,
    category: "Consultoria de Processos ",
    title: "PROCESSOS",
    subtitle: "Analise de processos",
    services: [
      "Processo Comercial",
      "Processo Administrativo ",
      "Processos de Onboarding",
      "Processos de Gestão",
      "Processo Estratégico"
    ]
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section 
      className="py-24 bg-gray-900"
      id="services"
      aria-label="Nossas Soluções"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-montserrat text-purple-500 font-semibold text-sm uppercase tracking-wide mb-4 block">
            Nossas Soluções
          </span>

          <h2 className="font-forum text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Transformamos Ideias em Resultados
          </h2>

          <p className="font-montserrat text-gray-400 text-lg max-w-3xl mx-auto">
            Combinamos estratégia, tecnologia e criatividade para acelerar a evolução digital do seu negócio
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          role="list"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
