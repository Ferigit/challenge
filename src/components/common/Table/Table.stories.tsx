import type { Meta, StoryObj } from '@storybook/react';

import Table from './index';

const headers = ['Header1', 'Header2', 'Header3'];
const columns = [['Data1', 'Data2', 'Data3']];

const headersWithAction = ['Header1', 'Header2', 'Actions'];
const columnsWithAction = [['Data1', 'Data2']];

const CustomActionCell = ({
  onCustomActionClick,
}: {
  onCustomActionClick: () => void;
}) => <button onClick={onCustomActionClick}>Custom Action</button>;

const onClick = () => {};
const meta = {
  title: 'Example/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  render: ({ ...args }) => (
    <Table
      {...args}
    />
  ),
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { headers, columns },
};
export const ActionCell: Story = {
  args: {
    headers: headersWithAction, columns: columnsWithAction, customActionCell: CustomActionCell, onCustomActionClick: onClick,
  },
};
