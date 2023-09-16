import React from 'react';
import AddStockForm from '@/components/pages/AddStockForm';
import StockList from '@/components/pages/StockList';
import { Card } from '@/components/common';
import './HomePage.scss';

const HomePage: React.FC = () => (
  <section className="container">
    <Card>
      <AddStockForm />
      <StockList />
    </Card>
  </section>
);

export default HomePage;
