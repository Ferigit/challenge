import {
  render, screen, fireEvent,
} from '@testing-library/react';
import {
  describe, it, expect, assert,
} from 'vitest';
import Table from './index';

describe('Table Component', () => {
  it('renders table with headers and rows', () => {
    const headers = ['Header1', 'Header2'];
    const columns = [['Data1', 'Data2'], ['Data3', 'Data4']];

    render(<Table headers={headers} columns={columns} />);

    // Check if headers are rendered
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });

    // Check if data rows are rendered
    columns.flat().forEach((data) => {
      expect(screen.getByText(data.toString())).toBeInTheDocument();
    });
  });

  it('renders custom action cell when provided', () => {
    const headers = ['Header1', 'Header2', 'Actions'];
    const columns = [['Data1', 'Data2', 'ActionData']];
    const CustomActionCell = ({ onCustomActionClick }: { onCustomActionClick: () => void }) => (
      <button onClick={onCustomActionClick}>Custom Action</button>
    );

    let clicked = false;
    const onClick = () => {
      clicked = true;
    };
    render(
      <Table
        headers={headers}
        columns={columns}
        customActionCell={CustomActionCell}
        onCustomActionClick={onClick}
      />,
    );

    // Check if custom action cell is rendered
    expect(screen.getByText('Custom Action')).toBeInTheDocument();

    // Simulate a click on the custom action cell
    const Element = screen.getByText('Custom Action');

    // Check if the custom action function is called
    fireEvent.click(Element);
    assert.ok(clicked);
  });

  it('renders empty table message when columns are empty', () => {
    const headers = ['Header1', 'Header2'];
    const columns: (string | number)[][] = [];

    render(<Table headers={headers} columns={columns} />);

    // Check if the empty table message is rendered
    expect(screen.getByText('Table is empty!')).toBeInTheDocument();
  });
});
