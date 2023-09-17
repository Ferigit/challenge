import React, { useState } from 'react';
import { webSocketService } from '@/services/WebSocketService';
import { Input, Button } from '@/components/common';
import validateISIN from '@/utils/validateISIN';
import './AddStock.scss';

const AddStock: React.FC = () => {
  const [isin, setIsin] = useState('');
  const [error, setError] = useState('');

  const handleAddStock = (e: any) => {
    e.preventDefault();
    setError('');
    const validate = validateISIN(isin.trim());

    // validate isin
    if (validate) {
      setError(validate);
      return;
    }

    // check isin already subscribed or not
    if (!webSocketService.isSubscribed(isin)) {
      webSocketService.subscribeToStock(isin);
      setIsin('');
      setError('');
    } else {
      setError('You are already subscribed to this ISIN');
    }
  };

  return (
    <form
      className="add-stock-container flex items-start justify-between"
      onSubmit={handleAddStock}
    >
      <h2 className="m-0">Stock Management</h2>
      <div className=" flex add-stock-form justify-start items-center gap-x-1 items-start">
        <Input
          placeholder="Enter ISIN"
          control={{ value: isin, onChange: (e) => setIsin(e.target.value) }}
          error={error}
          aria-label="ISIN Input"
        />
        <Button className="subscribe-button">Subscribe</Button>
      </div>
    </form>
  );
};

export default AddStock;
