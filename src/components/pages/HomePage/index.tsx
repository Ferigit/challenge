import React from 'react';
import AddStockForm from '@/components/shared/AddStockForm';
import StockList from '@/components/shared/StockList';
import { Card } from '@/components/common';
import './HomePage.scss';

const HomePage: React.FC = () => (
  <Card className="container">
    <AddStockForm />
    <StockList />
  </Card>
);

export default HomePage;
