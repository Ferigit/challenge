// Button.tsx
import React from 'react';
import './Button.scss';
import clsx from 'classnames';

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button: React.FC<IProps> = ({ children, className, onClick }: IProps) => (
  <button onClick={onClick} className={clsx('custom-button', className)}>
    {children}
  </button>
);

export default Button;
