import { Metadata } from 'next';
import React from 'react';

import { DeleteFromCartButton, TitleBlock } from '~components';
import { Container } from '~ui';

export const metadata: Metadata = {
  title: 'Корзина | Лось-Лосось',
};

interface CartLayoutProps {
  children: React.ReactNode;
}

const CartLayout: React.FC<CartLayoutProps> = ({ children }) => (
  <main>
    <Container width="narrow">
      <TitleBlock
        title="Корзина"
        backTo="/"
        rightSide={<DeleteFromCartButton />}
      />
      {children}
    </Container>
  </main>
);

export default CartLayout;
