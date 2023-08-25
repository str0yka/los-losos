'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

import { useTotalCount } from '~hooks';
import { getCart } from '~store';
import { Typography } from '~ui';
import { CartIcon } from '~ui/icons';
import { getClassName } from '~utils/helpers';

import s from './CartButton.module.scss';

export const CartButton = () => {
  const { status } = useSelector(getCart);
  const count = useTotalCount();
  const router = useRouter();
  const isFirstLoading = status === 'loading/all';

  const onClickCartButton = () => router.push('/cart');

  return (
    <button
      className={getClassName({
        [s.cartButton]: true,
        [s.visible]: !isFirstLoading && !!count,
      })}
      onClick={onClickCartButton}
    >
      <div className={s.countWrapper}>
        <Typography
          className={s.count}
          component="span"
          variant="body7"
        >
          {count}
        </Typography>
      </div>
      <CartIcon />
    </button>
  );
};
