'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  const mainLinks = [
    { name: 'Estratégia', href: '#estrategia' },
    { name: 'Marketing', href: '#marketing' },
    { name: 'Tecnologia', href: '#tech' },
    { name: 'Design', href: '#design' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/grifohub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61568579176801', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/grifo-hub/?viewAsMember=true', label: 'LinkedIn' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 border-t border-gray-800/50">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo.svg"
              alt="Grifo Hub"
              width={100}
              height={32}
              className="mb-4"
            />
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all
                    transform hover:scale-110 border border-gray-700/50 group"
                >
                  <social.icon className="h-4 w-4 text-gray-400 group-hover:text-purple-400 
                    transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0 text-purple-400 mt-1" />
                <div>
                  <p>Av. Américo Buaiz, 200</p>
                  <p>Vitória - ES</p>
                </div>
              </div>
              <a 
                href="https://wa.me/5527999818324"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 
                  transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-purple-400" />
                (27) 99981-8324
              </a>
              <a 
                href="mailto:contato@grifohub.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 
                  transition-colors"
              >
                <Mail className="h-4 w-4 text-purple-400" />
                contato@grifohub.com
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Soluções</h4>
            <ul className="space-y-2">
              {mainLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors
                      flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-purple-500/50 rounded-full" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Legal</h4>
            <div className="space-y-2">
              <Link 
                href="/termos"
                className="block text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Termos de Uso
              </Link>
              <Link 
                href="/privacidade"
                className="block text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Privacidade
              </Link>
              <a 
                href="#"
                className="block text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Vagas
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800/50">
          <p className="text-xs text-center text-gray-400">
            © {new Date().getFullYear()} Grifo Hub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;