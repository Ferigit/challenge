import React, { useEffect, useState } from 'react';
import { webSocketService } from '@/hooks/WebSocketService';
import { Table, Button } from '@/components/common';
import './StockList.scss';

interface Stock {
  isin: string;
  price: number;
  bid: number;
  ask: number;
}

const StockList: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const subscription = webSocketService
      .getWebSocketObservable()
      .subscribe((data: Stock) => {
        // Handle incoming WebSocket data and update the state
        setStocks((prevStocks) => {
          const existingStockIndex = prevStocks.findIndex(
            (s) => s.isin === data.isin,
          );
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

  const tableHeaders = ['ISIN', 'Price', 'Bid', 'Ask', 'Action'];

  const tableData = stocks.map(({
    isin, price, bid, ask,
  }: any) => [
    isin,
    parseFloat(price.toFixed(4)),
    parseFloat(bid.toFixed(4)),
    parseFloat(ask.toFixed(4)),
  ]);

  // const CustomActionCell = () =>
  // <Button onClick={() => handleUnsubscribe(stock.isin)}>Unsubscribe</Button>;
  console.log('tableData: ', stocks, tableData);
  return (
    <div>
      <h2>Subscribed Stocks</h2>
      <Table
        headers={tableHeaders}
        columns={tableData}
        customActionCell={() => (
          <Button onClick={(stock: any) => handleUnsubscribe(stock.isin)} className="unsubscribe-button ">
            Unsubscribe
          </Button>
        )}
        onCustomActionClick={handleUnsubscribe}
      />

      {/* <ul>
        {stocks.map((stock) => (
          <li key={stock.isin}>
            <div className="stock-info">
              <h3>{stock.isin}</h3>
              <p>
                Price: ${stock.price.toFixed(2)} | Bid: ${stock.bid.toFixed(2)}{' '}
                | Ask: ${stock.ask.toFixed(2)}
              </p>
            </div>
            <button onClick={() => handleUnsubscribe(stock.isin)}>
              Unsubscribe
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default StockList;
