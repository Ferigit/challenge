import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  render: ({ ...args }) => (
    <Button {...args}>
      Click me
    </Button>
  ),
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Primary: Story = {
  args: {
    size: 'primary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
