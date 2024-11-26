'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Shield, Lock, Users } from 'lucide-react';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const PrivacyPage = () => {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Coleta e Utilização de Dados",
      subsections: [
        {
          title: "Dados Fornecidos Diretamente",
          content: [
            "Solicitação de propostas ou orçamentos",
            "Download de materiais e conteúdos",
            "Inscrição em newsletter",
            "Participação em eventos ou webinars",
            "Contato através de nossos canais"
          ]
        },
        {
          title: "Dados Coletados Automaticamente",
          content: [
            "Cookies essenciais e analíticos",
            "Dados técnicos (IP, navegador, dispositivo)",
            "Comportamento de navegação",
            "Interações com conteúdo"
          ]
        }
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Armazenamento e Segurança",
      subsections: [
        {
          title: "Medidas de Segurança",
          content: [
            "Criptografia de dados em trânsito e repouso",
            "Controles de acesso rigorosos",
            "Monitoramento contínuo",
            "Atualizações regulares de segurança"
          ]
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Seus Direitos",
      subsections: [
        {
          title: "Direitos do Titular",
          content: [
            "Acessar seus dados",
            "Solicitar correções",
            "Pedir exclusão",
            "Revogar consentimentos",
            "Solicitar portabilidade",
            "Obter informações sobre uso"
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      
      {/* Privacy Content */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-purple-500 font-bold tracking-wider mb-3 uppercase text-sm">
              Privacidade
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Política de Privacidade
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A Grifo Hub está comprometida com a proteção e privacidade dos seus dados pessoais. 
              Esta política descreve como coletamos, usamos e protegemos suas informações.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm 
                  border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-700/50">
                  <div className="text-purple-400">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-purple-400 to-pink-400">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-8">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="ml-4">
                      <h3 className="text-lg font-semibold mb-4 text-purple-400">
                        {subsection.title}
                      </h3>
                      <ul className="space-y-3">
                        {subsection.content.map((item, itemIndex) => (
                          <li 
                            key={itemIndex}
                            className="text-gray-400 leading-relaxed flex items-start gap-3"
                          >
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/50 
                              flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact Information */}
            <div className="text-center p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm 
              border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-4 text-white">Contato DPO</h3>
              <p className="text-gray-400">
                Para exercer seus direitos ou esclarecer dúvidas, entre em contato com nosso 
                Encarregado de Proteção de Dados:
              </p>
              <div className="mt-4 space-y-2 text-gray-400">
                <p>DPO: Clériton Sávio Santos Silva</p>
                <p>
                  E-mail:{' '}
                  <a 
                    href="mailto:contato@grifohub.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    contato@grifohub.com
                  </a>
                </p>
                <p>Endereço: Av. Américo Buaiz, 200 – Enseada do Suá, Vitória – ES</p>
              </div>
            </div>

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

export default PrivacyPage;