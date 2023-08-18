'use client';

import React from 'react';

import { getClassName } from '~utils/helpers';

import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import s from './CountButton.module.scss';
import { useHandleCart } from './hooks';

interface CountButtonProps {
  productId: number;
}

export const CountButton: React.FC<CountButtonProps> = ({ productId }) => {
  const {
    count,
    addToCart,
    deleteFromCart,
    isLoading,
  } = useHandleCart(productId);

  return (
    <div
      className={getClassName({
        [s.countButton]: true,
        [s.active]: count > 0,
        [s.disabled]: isLoading,
      })}
      onClick={() => count <= 0 && addToCart()}
      onKeyDown={(event) => event.key === 'Enter' && count <= 0 && addToCart()}
      role="button"
      tabIndex={0}
    >
      <div
        onClick={deleteFromCart}
        onKeyDown={(event) => event.key === 'Enter' && deleteFromCart()}
        role="button"
        tabIndex={0}
      >
        <VisuallyHidden>добавить в корзину</VisuallyHidden>
      </div>
      <div
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
        role="button"
        tabIndex={0}
      >
        {count}
      </div>
      <div
        onClick={addToCart}
        onKeyDown={(event) => event.key === 'Enter' && addToCart()}
        role="button"
        tabIndex={0}
      >
        <VisuallyHidden>добавить в корзину</VisuallyHidden>
      </div>
    </div>
  );
};
