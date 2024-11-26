// src/components/ui/ScrollToTop.tsx
'use client';

import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  show: boolean;
}

export function ScrollToTop({ show }: ScrollToTopProps) {
  return (
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
}