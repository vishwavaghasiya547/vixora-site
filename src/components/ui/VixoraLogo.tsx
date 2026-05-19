'use client';

interface VixoraLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const VixoraLogo = ({ size = 'md', showText = true }: VixoraLogoProps) => {
  const sizes = {
    sm: { icon: 30, text: 'text-lg', gap: 'gap-2' },
    md: { icon: 36, text: 'text-xl', gap: 'gap-2.5' },
    lg: { icon: 52, text: 'text-3xl', gap: 'gap-3' },
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap} group`}>
      {/* Geometric V mark */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 48 48"
        fill="none"
        className="flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg]"
      >
        {/* Background circle */}
        <circle cx="24" cy="24" r="24" fill="hsl(var(--accent))" />
        {/* V letterform — sharp geometric */}
        <path
          d="M15 14L24 36L33 14"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Decorative dot */}
        <circle cx="24" cy="12" r="2" fill="white" opacity="0.5" />
      </svg>

      {showText && (
        <span
          className={`font-serif font-semibold ${s.text} tracking-tight transition-colors duration-300`}
          style={{ color: 'hsl(var(--ink))' }}
        >
          Vixora
        </span>
      )}
    </div>
  );
};

export default VixoraLogo;
