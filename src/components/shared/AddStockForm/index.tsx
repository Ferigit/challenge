import React, { useState } from 'react';
import { webSocketService } from '@/hooks/WebSocketService';
import { Input, Button } from '@/components/common';

const AddStock: React.FC = () => {
  const [isin, setIsin] = useState('');
  const [error, setError] = useState('');

  const handleAddStock = (e: any) => {
    e.preventDefault();
    if (!isin || isin.trim() === '') {
      setError('ISIN cannot be empty');
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
  console.log('error: ', error);
  return (
    <form className="add-stock-form" onSubmit={handleAddStock}>
      <Input
        placeholder="Enter ISIN"
        control={{ value: isin, onChange: (e) => setIsin(e.target.value) }}
        error={error}
        aria-label="ISIN Input"
      />
      <Button>Subscribe</Button>
    </form>
  );
};

export default AddStock;
