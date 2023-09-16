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

    webSocketService.subscribeToStock(isin);
    setIsin('');
    setError('');
  };
  return (
    <form className="custom-form" onSubmit={handleAddStock}>
      <Input
        placeholder="Enter ISIN"
        control={{ value: isin, onChange: (e) => setIsin(e.target.value) }}
      />
      <Button>Subscribe</Button>
    </form>
  );
  return (
    <div>
      <h2>Add Stock</h2>
      <div>
        <input
          type="text"
          placeholder="Enter ISIN"
          value={isin}
          onChange={(e) => setIsin(e.target.value)}
        />
        <button onClick={handleAddStock}>Subscribe</button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddStock;
