// ShadowCard.tsx
import React from 'react';
import './Card.scss';

interface ShadowCardProps {
  children: React.ReactNode;
  className?: string;
}

const ShadowCard: React.FC<ShadowCardProps> = ({ children, className }: ShadowCardProps) => (
  <div className={`shadow-card ${className}`}>
    {children}
  </div>
);

export default ShadowCard;
