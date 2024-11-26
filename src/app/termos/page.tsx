'use client';

import React from 'react';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

const TermsPage = () => {
  const sections = [
    {
      title: "Definições e Escopo",
      content: [
        {
          subtitle: "1.1 Partes Envolvidas",
          text: "A Grifo Hub, empresa especializada em transformação digital e soluções estratégicas, estabelecida em Av. Américo Buaiz, 200 – Enseada do Suá, Vitória – ES, CEP 29050-902, CNPJ: 52.033.415/0001-65, doravante denominada 'Empresa', e o usuário dos serviços, doravante denominado 'Cliente'."
        },
        {
          subtitle: "1.2 Aplicabilidade",
          text: "Estes termos se aplicam a todos os serviços, produtos e interações oferecidos pela Grifo Hub, incluindo mas não se limitando a consultoria, desenvolvimento, marketing digital e soluções tecnológicas."
        }
      ]
    },
    {
      title: "Serviços e Responsabilidades",
      content: [
        {
          subtitle: "2.1 Prestação de Serviços",
          text: "A Empresa se compromete a fornecer os serviços conforme especificados em proposta comercial, mantendo os padrões de qualidade e prazos acordados."
        },
        {
          subtitle: "2.2 Obrigações do Cliente",
          text: "O Cliente se compromete a fornecer informações precisas e necessárias para a execução dos serviços, além de cumprir com os prazos e condições financeiras estabelecidas."
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      
      {/* Terms Content */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-purple-500 font-bold tracking-wider mb-3 uppercase text-sm">
              Documentação Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Termos e Condições
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Este documento estabelece as regras e diretrizes para utilização dos serviços 
              e produtos oferecidos pela Grifo Hub.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm 
                  border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-700/50
                  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {section.title}
                </h2>
                
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="ml-4">
                      <h3 className="text-lg font-semibold mb-3 text-purple-400">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Last Update */}
            <div className="text-center text-gray-400 mt-12">
              <p>Última atualização: 24 de outubro de 2024</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;