import React from 'react';

import OrderingProgressLine from '@/app/(ordering)/_components/OrderingProgressLine/OrderingProgressLine';
import Container from '@/components/common/Container/Container';

interface OrderingLayoutProps {
  children: React.ReactNode
}

const OrderingLayout: React.FC<OrderingLayoutProps> = ({ children }) => (
  <Container width="medium">
    <OrderingProgressLine />
    {children}
  </Container>
);

export default OrderingLayout;
