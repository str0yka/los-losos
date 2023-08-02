'use client';

import * as React from 'react';

import { getClassNames } from '@/utils';

import s from './CountButton.module.scss';
import { useHandleCart } from './hooks';

interface CountButtonProps {
  id: number;
}

const CountButton: React.FC<CountButtonProps> = ({ id }) => {
  const {
    count,
    addToCart,
    deleteFromCart,
    isLoading,
  } = useHandleCart(id);

  return (
    <div
      className={getClassNames({
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
        <span className="visually-hidden">добавить в корзину</span>
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
        <span className="visually-hidden">добавить в корзину</span>
      </div>
    </div>
  );
};

export default CountButton;
