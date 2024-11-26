'use client'
import React from 'react';
import Image from 'next/image';
import { 
  Linkedin,
  Github
} from 'lucide-react';

interface TeamMember {
  image: string;
  name: string;
  role: string;
  badges: string[];
  description: string;
  social: {
    linkedin: string;
    github: string;
  };
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      image: "/deivid.jpg",
      name: "Deivid Abreu",
      role: "Security Specialist",
      badges: ["Bug Hunter", "Python", "IA", "Pentest"],
      description: "Especialista em segurança digital com reconhecimento internacional pela descoberta de vulnerabilidade crítica (CVE-2019-19616).",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      image: "/matheus.jpeg", 
      name: "Matheus Baiense",
      role: "AI & Innovation Manager",
      badges: ["IA Generativa", "Marketing", "Gestão de Projetos"],
      description: "Consultor em Inteligência Artificial generativa para negócios, especialista em gestão de projetos e estratégias de automação.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      image: "/leonam.jpeg",
      name: "Leonam Severo",
      role: "Marketing & Design Lead",
      badges: ["Branding", "UX/UI", "Content"],
      description: "Profissional especializado em marketing, publicidade e experiência do usuário (UX), com expertise em projetos estratégicos e inovadores.",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="pt-8 pb-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block font-montserrat text-purple-500 font-bold text-sm tracking-wider uppercase mb-3">
            Time de Especialistas
          </span>
          <h2 className="font-forum text-3xl md:text-4xl font-bold mb-3 text-white">
            Conheça Nossos Talentos
          </h2>
          <p className="font-montserrat text-gray-400 text-base">
            Profissionais excepcionais unidos pela paixão em criar soluções inovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="bg-gray-800/50 rounded-xl p-5 flex flex-col items-center text-center group hover:bg-gray-800/70 transition-colors duration-300"
            >
              {/* Foto de Perfil Circular */}
              <div className="mb-3 relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/50 transition-colors duration-300">
                  <Image 
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    width={80}
                    height={80}
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
              </div>

              {/* Informações do Membro */}
              <h3 className="font-forum text-lg font-bold text-white mb-1">
                {member.name}
              </h3>
              
              <p className="font-montserrat text-purple-400 text-sm mb-3">
                {member.role}
              </p>
              
              <div className="flex gap-1.5 flex-wrap justify-center mb-3">
                {member.badges.map((badge) => (
                  <span 
                    key={badge}
                    className="font-montserrat px-2.5 py-0.5 text-xs bg-purple-500/10 text-purple-400 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="font-montserrat text-gray-400 mb-4 text-sm">
                {member.description}
              </p>

              {/* Links Sociais */}
              <div className="flex gap-3 mt-auto">
                <a 
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={`GitHub de ${member.name}`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;