import { Metadata } from 'next';
import React from 'react';

import { TitleBlock } from '~components';
import { Container } from '~ui';

export const metadata: Metadata = {
  title: 'Оформление заказа | Лось-Лосось',
};

interface OrderLayoutProps {
  children: React.ReactNode;
}

const OrderLayout: React.FC<OrderLayoutProps> = ({ children }) => (
  <main>
    <Container width="medium">
      <TitleBlock
        title="Оформление заказа"
        backTo="/cart"
      />
      {children}
    </Container>
  </main>
);

export default OrderLayout;
