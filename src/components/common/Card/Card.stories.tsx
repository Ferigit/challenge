import type { Meta, StoryObj } from '@storybook/react';

import Card from './index';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  render: ({ ...args }) => (
    <Card {...args}>
      Card Content is here
    </Card>
  ),
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

  },
};
