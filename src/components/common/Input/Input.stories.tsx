import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    label: 'ISIN',
    placeholder: 'Enter string value ..',
    control: {
      type: 'text',
    },
  },
};
export const NumberInput: Story = {
  args: {
    label: 'ISIN',
    placeholder: 'Enter number value ..',
    control: {
      type: 'number',
    },
  },
};
export const DisabledInput: Story = {
  args: {
    label: 'ISIN',
    placeholder: 'Enter value ..',
    disabled: true,
  },
};
export const PasswordInput: Story = {
  args: {
    label: 'ISIN',
    placeholder: 'Enter value ..',
    control: {
      type: 'password',
    },
  },
};

// export const Primary: Story = {
//   args: {
//     size: 'primary',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//   },
// };
