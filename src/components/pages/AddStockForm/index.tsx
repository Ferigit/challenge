import React, { useState } from 'react';
import { webSocketService } from '@/hooks/WebSocketService';
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

    if (validate) {
      setError(validate);
      return;
    }

    // if (webSocketService.isSubscribed(isin)) {
    //   setError('You are already subscribed to this ISIN');
    //   return;
    // }

    webSocketService.subscribeToStock(isin);
    setIsin('');
    setError('');
  };

  return (
    <form
      className="add-stock-container flex items-start justify-between"
      onSubmit={handleAddStock}
    >
      <h2 className="m-0">Stock </h2>
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
