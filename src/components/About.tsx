'use client'
import React from 'react';
import Image from 'next/image';

const About = () => {
  const features = [
    {
      title: 'Missão',
      description: 'Impulsionar a transformação digital das empresas através de soluções inovadoras e resultados mensuráveis.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Visão',
      description: 'Ser reconhecida como a principal parceira em inovação e transformação digital na América Latina.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Valores',
      description: 'Excelência, Inovação, Transparência, Compromisso com resultados e Desenvolvimento contínuo.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const metrics = [
    { value: '10+', label: 'Anos de Experiência' },
    { value: '300+', label: 'Projetos Entregues' },
    { value: '98%', label: 'Clientes Satisfeitos' },
    { value: '50+', label: 'Especialistas' },
    { value: '10+', label: 'Setores Atendidos' },
    { value: '85%', label: 'Redução em Processos Manuais' }
  ];

  return (
    <section id="sobre" className="pt-8 pb-20 relative bg-gray-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-montserrat text-purple-500 font-semibold text-sm uppercase tracking-wider">
            Nossa História
          </span>
          <h2 className="font-forum text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
            Mais que uma empresa,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              um parceiro estratégico
            </span>
          </h2>
          <p className="font-montserrat text-gray-400 text-base leading-relaxed">
            Com mais de 15 anos de experiência, nos especializamos em transformar desafios 
            complexos em soluções inovadoras que impulsionam o crescimento dos nossos clientes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
                hover:bg-gray-800/80 transition-all duration-300 group"
            >
              <h3 className={`font-forum text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                {feature.title}
              </h3>
              <p className="font-montserrat text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image and Metrics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[350px] rounded-xl overflow-hidden">
              <Image
                src="/quem-somos.jpg"
                alt="Nossa equipe em ação"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-600/80 to-indigo-600/80 
              rounded-xl transform rotate-6 opacity-60 blur-xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-600/80 to-purple-600/80 
              rounded-xl transform -rotate-12 opacity-60 blur-xl" />
          </div>

          {/* Metrics Side - Atualizado para grid 3x2 */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50
                  hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="font-forum text-2xl md:text-3xl font-bold mb-1
                  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {metric.value}
                </div>
                <div className="font-montserrat text-gray-400 text-xs uppercase tracking-wider
                  group-hover:text-gray-300 transition-colors">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;