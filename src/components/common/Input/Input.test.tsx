import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Input component', () => {
  it('renders correctly', () => {
    render(
      <Input
        label="Test"
        name="testInput"
        control={{ onChange: () => {}, value: '' }}
      />,
    );

    const inputElement = screen.getByLabelText('Test');
    expect(inputElement).toBeInTheDocument();
  });
  it('handles onChange event', async () => {
    let value = '';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      value = event.target.value;
    };

    render(
      <Input
        label="Test"
        name="testInput" // Add a unique name
        control={{ onChange, value }}
      />,
    );

    const inputElement = screen.getByLabelText('Test');
    expect(inputElement).toBeInTheDocument();

    // Simulate a change event
    const newValue = 'New Value';
    await fireEvent.change(inputElement, { target: { value: newValue } });

    // Check if the value has been updated
    expect(value).toBe(newValue);
  });

  it('displays an error message when error prop is provided', () => {
    const error = 'Input is invalid';

    render(
      <Input
        label="Test"
        name="testInput"
        control={{ onChange: () => {}, value: '' }}
        error={error}
      />,
    );

    const errorMessage = screen.getByText('Input is invalid');
    expect(errorMessage).toBeInTheDocument();
  });

  it('applies custom class name', () => {
    const customClass = 'custom-class';
    const { container } = render(
      <Input
        label="Test"
        name="testInput"
        control={{ onChange: () => {}, value: '' }}
        className={customClass}
      />,
    );
    const Element = container.querySelector('.custom-class');

    expect(Element).toHaveClass(customClass);
  });
});
