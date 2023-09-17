import { render, fireEvent, screen } from '@testing-library/react';
import {
  describe, it, expect, assert,
} from 'vitest';
import Button from './index';

describe('Button', () => {
  it('calls the onClick function when clicked', () => {
    test('Button calls the onClick function when clicked', async () => {
      let clicked = false;
      const onClick = () => {
        clicked = true;
      };

      render(<Button onClick={onClick}>Click Me</Button>);

      const buttonElement = screen.getByText('Click Me');
      fireEvent.click(buttonElement);

      assert.ok(clicked);
    });
  });

  it('renders the button with custom className', () => {
    render(<Button className="custom-class">Test Button</Button>);

    const buttonElement = screen.getByText('Test Button');

    expect(buttonElement).toHaveClass('custom-class');
  });

  it('renders children content correctly', () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByText('Click Me');

    expect(buttonElement).toBeInTheDocument();
  });
});
