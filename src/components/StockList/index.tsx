import React, { useEffect, useState } from 'react';
import { webSocketService } from '@/hooks/WebSocketService';

interface Stock {
  isin: string;
  price: number;
  bid: number;
  ask: number;
}

const StockList: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const subscription = webSocketService.getWebSocketObservable().subscribe((data: Stock) => {
      // Handle incoming WebSocket data and update the state
      setStocks((prevStocks) => {
        const existingStockIndex = prevStocks.findIndex((s) => s.isin === data.isin);
        if (existingStockIndex !== -1) {
          prevStocks[existingStockIndex] = data;
          return [...prevStocks];
        } else {
          return [...prevStocks, data];
        }
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleUnsubscribe = (isin: string) => {
    webSocketService.unsubscribeFromStock(isin);
    setStocks((prevStocks) => prevStocks.filter((s) => s.isin !== isin));
  };

  return (
    <div>
      <h2>Subscribed Stocks</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.isin}>
            {`${stock.isin} - Price: ${stock.price.toFixed(2)} | Bid: ${stock.bid.toFixed(2)} | Ask: ${stock.ask.toFixed(2)}`}
            <button onClick={() => handleUnsubscribe(stock.isin)}>Unsubscribe</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
