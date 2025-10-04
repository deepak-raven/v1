
import React from 'react';

// A detailed gear SVG component
export const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current ${className}`}
  >
    <path d="M50,0 A50,50 0 0,1 50,100 A50,50 0 0,1 50,0 Z M50,10 A40,40 0 0,0 50,90 A40,40 0 0,0 50,10 Z" />
    <path d="M50,15 A35,35 0 0,1 50,85 A35,35 0 0,1 50,15 Z" />
    {[...Array(12)].map((_, i) => (
      <path
        key={i}
        transform={`rotate(${i * 30} 50 50)`}
        d="M45,0 h10 v15 h-10 z"
      />
    ))}
    <circle cx="50" cy="50" r="10" />
  </svg>
);

// Monocle Icon
export const MonocleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="10" y1="10" x2="24" y2="10" />
    </svg>
);

// Telegraph Icon
export const TelegraphIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 8.5h20" />
        <path d="M4 11v- бактерия 2.5a2.5 2.5 0 0 1 5 0V11" />
        <rect x="2" y="14" width="20" height="6" rx="2" />
        <path d="M12 11v3" />
        <circle cx="18" cy="17" r="1" />
    </svg>
);

// Top Hat Icon
export const TopHatIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14h18v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4Z" />
        <path d="M3 14v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
    </svg>
);

// Revolver Cylinder Icon
export const RevolverCylinderIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
        <circle cx="12" cy="7" r="1.5" />
        <circle cx="16.3" cy="9.5" r="1.5" />
        <circle cx="16.3" cy="14.5" r="1.5" />
        <circle cx="12" cy="17" r="1.5" />
        <circle cx="7.7" cy="14.5" r="1.5" />
        <circle cx="7.7" cy="9.5" r="1.5" />
    </svg>
);
