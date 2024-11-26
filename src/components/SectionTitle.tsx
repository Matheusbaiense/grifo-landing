// src/components/ui/SectionTitle.tsx
interface SectionTitleProps {
    subtitle: string;
    title: string;
    description?: string;
    alignment?: 'center' | 'left' | 'right';
    className?: string;
  }
  
  export function SectionTitle({ 
    subtitle, 
    title, 
    description, 
    alignment = 'center', 
    className = '' 
  }: SectionTitleProps) {
    return (
      <div className={`max-w-3xl ${alignment === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
        <span className="inline-block text-purple-500 font-bold tracking-wider mb-3 uppercase text-sm">
          {subtitle}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-gray-400 text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }