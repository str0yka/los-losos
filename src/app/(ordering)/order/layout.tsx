import { Metadata } from 'next';
import React from 'react';

import TitleBlock from '@/components/TitleBlock/TitleBlock';

export const metadata: Metadata = {
  title: 'Оформление заказа | Лось-Лосось',
};

interface OrderLayoutProps {
  children: React.ReactNode;
}

const OrderLayout: React.FC<OrderLayoutProps> = ({ children }) => (
  <>
    <TitleBlock
      title="Оформление заказа"
      backTo="/cart"
    />
    {children}
  </>
);

export default OrderLayout;
