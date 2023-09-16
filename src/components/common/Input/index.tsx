import React from 'react';
import clsx from 'classnames';
import './Input.scss'; // Import the SCSS file

interface InputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  control: {
    onChange?: (value: any) => void;
    onBlur?: () => void;
    value?: any;
    type?: string;
  };
  defaultValue?: string;
  error?: any;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  className,
  placeholder,
  name,
  control,
  defaultValue = '',
  error,
}) => (
  <div className={clsx('input-container', className)}>
    <label htmlFor={name} className="label">
      {label}
    </label>
    <input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      className={clsx('input', !error && 'mb-2', { error })}
      defaultValue={defaultValue}
      {...control}
    />
    {error && <p className="error-message m-0 mt-1">{error}</p>}
  </div>
);

export default Input;
