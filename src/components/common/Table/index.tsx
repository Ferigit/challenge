import React from 'react';
import './Table.scss';

interface DynamicTableProps {
  headers: string[];
  columns: (string | number)[][];
  customActionCell?: React.ComponentType<{ onCustomActionClick: () => void }>;
  onCustomActionClick?: (row: any) => void;
}

const Table: React.FC<DynamicTableProps> = ({
  headers,
  columns,
  customActionCell: CustomActionCell,
  onCustomActionClick,
}: DynamicTableProps) => (
  <div className="table-container">
    <table className="table">
      <thead className="">
        <tr>
          {headers.map((header, index) => (
            <th key={index + header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="tbody">
        {columns.length ? (
          columns.map((row, rowIndex) => (
            <tr key={rowIndex} className="table-row mt-1">
              {row.map((column, colIndex) => (
                <td key={colIndex + +column}>{column}</td>
              ))}
              {CustomActionCell && (
                <td>
                  <CustomActionCell
                    onCustomActionClick={() => onCustomActionClick && onCustomActionClick(row)}
                  />
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td>
              <div className="flex justify-center items-center">
                Table is empty!
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default Table;
