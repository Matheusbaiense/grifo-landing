// src/components/ui/PrimaryButton.tsx
'use client';

import { ChevronRight } from 'lucide-react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ children, className = '', ...props }: PrimaryButtonProps) {
  return (
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
}