import { Metadata } from 'next';
import React from 'react';

import AppProgressLine from '@/components/AppProgressLine/AppProgressLine';
import Container from '@/components/common/Container/Container';
import DeleteFromCartButton from '@/components/DeleteFromCartButton/DeleteFromCartButton';
import TitleBlock from '@/components/TitleBlock/TitleBlock';

export const metadata: Metadata = {
  title: 'Корзина | Лось-Лосось',
};

interface CartLayoutProps {
  children: React.ReactNode;
}

const CartLayout: React.FC<CartLayoutProps> = ({ children }) => (
  <Container width="narrow">
    <AppProgressLine />
    <TitleBlock
      title="Корзина"
      backTo="/"
      rightSide={<DeleteFromCartButton />}
    />
    {children}
  </Container>
);

export default CartLayout;
