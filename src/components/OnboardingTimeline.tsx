import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  FileText, 
  CheckCircle, 
  Settings,
  Calendar,
  LucideIcon
} from 'lucide-react';

interface TimelinePoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TimelinePointProps {
  title: string;
  description: string;
  isLast: boolean;
  isActive: boolean;
  onClick: () => void;
  index: number;
  isNext: boolean;
}

const TimelinePoint: React.FC<TimelinePointProps> = ({ 
  title, 
  description, 
  isLast, 
  isActive, 
  onClick, 
  index, 
  isNext 
}) => {
  return (
    <div className="relative flex-1 flex items-center justify-center">
      {/* Linha conectora */}
      {!isLast && (
        <div className="absolute left-1/2 right-0 top-1/2 h-0.5 bg-[#1a1f2e]" />
      )}

      <div className="relative">
        {/* Círculo principal */}
        <div 
          className={`group w-14 h-14 rounded-full transition-all duration-500 
            bg-[#0B1221] 
            flex items-center justify-center cursor-pointer border-2 relative
            ${isActive ? 'border-purple-500 scale-110' : 'border-purple-500/30 hover:border-purple-500/50'}
            ${isNext ? 'animate-pulse-subtle' : ''}`}
          onClick={onClick}
          role="button"
          tabIndex={0}
          aria-label={`Passo ${index + 1}: ${title}`}
          aria-current={isActive ? 'step' : undefined}
        >
          {/* Número */}
          <span className={`font-montserrat text-2xl font-bold transition-all duration-500
            ${isActive ? 'text-purple-500' : 'text-purple-500/50'}`}>
            {index + 1}
          </span>

          {/* Efeito de próximo item */}
          {isNext && (
            <div className="absolute -inset-2 rounded-full bg-purple-500/20 animate-ping-slow" />
          )}

          {/* Efeito de item ativo */}
          {isActive && (
            <div className="absolute -inset-1 rounded-full bg-purple-500/10 animate-pulse" />
          )}
        </div>

        {/* Card de conteúdo */}
        <div className={`absolute left-1/2 -translate-x-1/2 w-48 top-20 pt-4
          transition-all duration-500 ease-out
          ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          aria-hidden={!isActive}
        >
          <div className="text-center">
            <h3 className="font-forum text-lg font-semibold text-white mb-2">
              {title}
            </h3>
            <p className="font-montserrat text-sm text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OnboardingTimeline: React.FC = () => {
  const [activePoint, setActivePoint] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  const timelinePoints: TimelinePoint[] = [
    {
      title: "Briefing Inicial",
      description: "Entendemos suas necessidades e objetivos de forma profunda",
      icon: MessageCircle
    },
    {
      title: "Proposta Personalizada",
      description: "Desenvolvemos uma solução única para seu negócio",
      icon: FileText
    },
    {
      title: "Contratação Simplificada",
      description: "Processo ágil e transparente de contratação",
      icon: CheckCircle
    },
    {
      title: "Desenvolvimento Ágil",
      description: "Execução com atualizações constantes e validações",
      icon: Settings
    },
    {
      title: "Evolução Contínua",
      description: "Acompanhamento e otimização dos resultados",
      icon: Calendar
    }
  ];

  useEffect(() => {
    if (!autoAdvance) return;

    const timer = setInterval(() => {
      setActivePoint((prev) => prev >= timelinePoints.length - 1 ? 0 : prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [autoAdvance, timelinePoints.length]); // Adicionado timelinePoints.length como dependência

  const handlePointClick = (index: number): void => {
    setAutoAdvance(false);
    setActivePoint(index);
  };

  return (
    <section className="relative py-32 bg-[#0B1221]">
      {/* Background com Grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Cabeçalho */}
        <div className="text-center mb-24">
          <h2 className="font-forum text-5xl md:text-6xl font-normal mb-6 text-white">
            Processo de Transformação
          </h2>
          <p className="font-montserrat text-gray-400 text-lg max-w-2xl mx-auto">
            Um método estruturado para entregar resultados excepcionais
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pt-8" role="region" aria-label="Linha do tempo do processo">
          <div className="relative h-36 flex items-start">
            {/* Linha base */}
            <div className="absolute inset-0 h-0.5 top-7 -translate-y-px bg-[#1a1f2e]" />
            
            {/* Pontos da timeline */}
            <div className="relative w-full flex">
              {timelinePoints.map((point, index) => (
                <TimelinePoint
                  key={index}
                  {...point}
                  index={index}
                  isLast={index === timelinePoints.length - 1}
                  isActive={index === activePoint}
                  isNext={!autoAdvance && index === activePoint + 1}
                  onClick={() => handlePointClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingTimeline;