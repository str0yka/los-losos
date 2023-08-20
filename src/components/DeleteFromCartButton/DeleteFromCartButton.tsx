'use client';

import React from 'react';

import { useAccessToken, useAppDispatch } from '~hooks';
import { fetchRemoveAllProductsFromCart, fetchRemoveProductFromCart } from '~store';
import { TrashIcon, VisuallyHidden } from '~ui';
import { getClassName } from '~utils/helpers';

import s from './DeleteFromCartButton.module.scss';

interface DeleteFromCartButtonProps {
  productId?: number;
  className?: string;
}

export const DeleteFromCartButton: React.FC<DeleteFromCartButtonProps> = ({
  productId,
  className,
}) => {
  const dispatch = useAppDispatch();
  const accessToken = useAccessToken();

  const onDeleteFromCart = () => {
    if (productId) {
      dispatch(fetchRemoveProductFromCart({ accessToken, productId }));
    } else {
      const wantDelete = confirm(
        'Вы действительно хотите удалить все товары из корзины?', // TODO: кастомный confirm
      );
      if (!wantDelete) return;
      dispatch(fetchRemoveAllProductsFromCart(accessToken));
    }
  };

  return (
    <button
      className={getClassName(s.button, className)}
      onClick={onDeleteFromCart}
      type="button"
    >
      <TrashIcon />
      <VisuallyHidden>Удалить {productId ? 'все товары' : 'товар'} из корзины</VisuallyHidden>
    </button>
  );
};
