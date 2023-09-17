import React from 'react';
import './Button.scss';
import clsx from 'classnames';

export interface IProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: 'small' | 'primary' | 'large'
}
const Button: React.FC<IProps> = ({
  children, size = 'primary', className, onClick,
}: IProps) => (
  <button onClick={onClick} className={clsx('button', className, size)}>
    {children}
  </button>
);

export default Button;
