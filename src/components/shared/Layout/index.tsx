import React, { ReactNode } from 'react';
import { Header, Footer } from '@/components';
import './Layout.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <div className="layout-container">
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

export default Layout;
