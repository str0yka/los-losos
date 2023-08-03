import { Metadata } from 'next';
import React from 'react';

import DeleteFromCartButton from '@/components/DeleteFromCartButton/DeleteFromCartButton';
import TitleBlock from '@/components/TitleBlock/TitleBlock';

export const metadata: Metadata = {
  title: 'Корзина | Лось-Лосось',
};

interface CartLayoutProps {
  children: React.ReactNode;
}

const CartLayout: React.FC<CartLayoutProps> = ({ children }) => (
  <>
    <TitleBlock
      title="Корзина"
      backTo="/"
      rightSide={<DeleteFromCartButton />}
    />
    {children}
  </>
);

export default CartLayout;
