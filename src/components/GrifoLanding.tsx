'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { TypeAnimation } from 'react-type-animation';
import { ChevronRight, ArrowUp } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

// Dynamic Imports
const ServicesSection = dynamic(() => import('./ServicesSection'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });
const About = dynamic(() => import('./About'), { ssr: false });
const Header = dynamic(() => import('./Header'), { ssr: false });
const ContactForm = dynamic(() => import('./ContactForm'), { ssr: false });
const OnboardingTimeline = dynamic(() => import('./OnboardingTimeline'), { ssr: false });
const TeamSection = dynamic(() => import('./TeamSection'), { ssr: false });

// Types
interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

// Reusable Components
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className = '', ...props }) => (
  <button 
    className={`group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 
    text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 
    flex items-center gap-2 shadow-lg ${className}`}
    {...props}
  >
    {children}
    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
);

// Hero Section Component
const Hero: React.FC = () => (
  <section className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1
      }}
    />
    
    <div className="container mx-auto px-6 flex-1 flex items-center">
      <div className="relative z-10 mt-32">
        <h1 className="font-forum text-5xl md:text-7xl leading-tight mb-8">
          <TypeAnimation
            sequence={[
              'ANALISA',
              1000,
              'DESENVOLVE',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            TRANSFORMA.
          </span>
        </h1>

        <p className="font-montserrat text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
          Não somos uma agência.<br />
          Somos um Hub de inovação 360º onde tecnologia, marketing e estratégia transformam desafios em resultados extraordinários que geram impacto.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <PrimaryButton 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-montserrat"
          >
            TRANSFORME SEU NEGÓCIO AGORA
          </PrimaryButton>
        </div>
      </div>
    </div>

    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <span className="font-montserrat text-sm text-gray-400 mb-2 opacity-60">Scroll</span>
      <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-purple-500/50 rounded-full animate-scroll-bounce" />
      </div>
    </div>
  </section>
);

// Scroll to Top Component
interface ScrollToTopProps {
  show: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ show }) => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className={`fixed bottom-8 right-8 p-4 bg-purple-600 rounded-full shadow-lg 
    transition-all transform hover:scale-110 hover:bg-purple-700
    ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    aria-label="Voltar ao topo"
  >
    <ArrowUp className="w-6 h-6" />
  </button>
);

// Main Component
const InstitutionalSite: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      
      {/* Main Sections */}
      <Hero />
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="timeline">
        <OnboardingTimeline />
      </section>
      
      <section id="team">
        <TeamSection />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>

      <WhatsAppButton />

      {/* Utility Components */}
      <ScrollToTop show={showScrollTop} />
      <Footer />
    </div>
  );
};

export default InstitutionalSite;