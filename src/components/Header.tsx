import React, { useState, useEffect, ReactNode } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Types
interface NavLinkProps {
  href: string;
  children: ReactNode;
}

interface PrimaryButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

interface NavItem {
  href: string;
  text: string;
}

// Components
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsActive(rect.top >= 0 && rect.top <= 400);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={scrollToSection}
      className={`relative text-sm font-medium tracking-wider uppercase transition-colors
        ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
        group py-2`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300
        ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </a>
  );
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 
      hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-all 
      transform hover:scale-105 flex items-center gap-2 shadow-lg ${className}`}
    type="button"
  >
    {children}
    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </button>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { href: '#services', text: 'Serviços' },
    { href: '#timeline', text: 'Processo' },
    { href: '#team', text: 'Time' },
    { href: '#about', text: 'Sobre' },
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-10">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="relative w-40 h-16 md:w-48 md:h-20 transition-all duration-300">
            <Image
              src="/logo.svg"
              alt="GrifoHub Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href}>
                {link.text}
              </NavLink>
            ))}
            <PrimaryButton onClick={scrollToContact}>
              Fale Conosco
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden
            ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href}>
                {link.text}
              </NavLink>
            ))}
            <PrimaryButton 
              onClick={() => {
                scrollToContact();
                setIsMobileMenuOpen(false);
              }}
              className="w-full justify-center"
            >
              Fale Conosco
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;