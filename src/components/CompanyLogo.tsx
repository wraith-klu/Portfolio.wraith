import { useState } from 'react';
import { getCompanyLogo, getInitials } from '../utils/companyLogos';

interface CompanyLogoProps {
  name: string;
  /** Size of the logo container in px. Default: 28 */
  size?: number;
  /** Extra className on the wrapper */
  className?: string;
  /** Whether to show the company name text next to the logo */
  showName?: boolean;
  /** Class for the name text */
  nameClassName?: string;
}

/** Accent color from name hash for initials fallback */
const nameToColor = (name: string): string => {
  const colors = [
    'bg-accent-violet/15 text-accent-violet border-accent-violet/25',
    'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/25',
    'bg-amber-400/15 text-amber-600 border-amber-400/25',
    'bg-accent-rose/15 text-accent-rose border-accent-rose/25',
    'bg-blue-500/15 text-blue-600 border-blue-500/25',
    'bg-emerald-500/15 text-emerald-600 border-emerald-500/25',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
};

export const CompanyLogo = ({
  name,
  size = 28,
  className = '',
  showName = true,
  nameClassName = '',
}: CompanyLogoProps) => {
  const [imgError, setImgError] = useState(false);
  const logoUrl = getCompanyLogo(name);
  const initials = getInitials(name);
  const colorClass = nameToColor(name);

  const logoEl =
    logoUrl && !imgError ? (
      <img
        src={logoUrl}
        alt={`${name} logo`}
        width={size}
        height={size}
        onError={() => setImgError(true)}
        className="object-contain rounded-md"
        style={{ width: size, height: size, minWidth: size }}
        loading="lazy"
      />
    ) : (
      <span
        className={`inline-flex items-center justify-center rounded-md text-[10px] font-black border ${colorClass}`}
        style={{ width: size, height: size, minWidth: size, fontSize: size * 0.32 }}
      >
        {initials}
      </span>
    );

  if (!showName) return <span className={`inline-flex items-center ${className}`}>{logoEl}</span>;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {logoEl}
      <span className={nameClassName || 'text-sm font-bold text-slate-700'}>{name}</span>
    </span>
  );
};
