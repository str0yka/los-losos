import React from 'react';

import { Container } from '~ui';

import { OrderingProgressLine } from './_sections';

interface OrderingLayoutProps {
  children: React.ReactNode
}

const OrderingLayout: React.FC<OrderingLayoutProps> = ({ children }) => (
  <>
    <Container width="medium">
      <OrderingProgressLine />
    </Container>
    {children}
  </>
);

export default OrderingLayout;
