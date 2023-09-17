import React from 'react';
import clsx from 'classnames';
import './Card.scss';

interface ShadowCardProps {
  children?: React.ReactNode;
  className?: string;
}

const ShadowCard: React.FC<ShadowCardProps> = ({ children, className }: ShadowCardProps) => (
  <div className={clsx('shadow-card', className)}>
    {children}
  </div>
);

export default ShadowCard;
