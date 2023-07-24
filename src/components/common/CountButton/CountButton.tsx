'use client';

import * as React from 'react';

import classes from './CountButton.module.scss';
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
      className={`${classes.CountButton} 
      ${count > 0 ? classes.Active : ''} 
      ${isLoading && classes.disabled}`}
      onClick={() => count <= 0 && addToCart()}
      onKeyDown={(event) => event.key === 'Enter' && count <= 0 && addToCart()}
      role="button"
      tabIndex={0}
    >
      <div
        className="count countMinus"
        onClick={deleteFromCart}
        onKeyDown={(event) => event.key === 'Enter' && deleteFromCart()}
        role="button"
        tabIndex={0}
      >
        <span className="visually-hidden">добавить в корзину</span>
      </div>
      <div
        className="count countValue"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
        role="button"
        tabIndex={0}
      >
        {count}
      </div>
      <div
        className="count countPlus"
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
