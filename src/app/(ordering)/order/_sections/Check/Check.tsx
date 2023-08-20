'use client';

import React from 'react';
import { useSelector } from 'react-redux';

import { useTotalPrice } from '~hooks';
import { getCart } from '~store';
import { Skeleton } from '~ui';
import { DELIVERY_PRICE } from '~utils/consts';
import { getClassName } from '~utils/helpers';

import s from './Check.module.scss';

interface CheckProps {
  className?: string
}

export const Check: React.FC<CheckProps> = ({ className }) => {
  const { productsInCart, promocode, status } = useSelector(getCart);
  const {
    promocodeDiscount,
    totalPriceWithDelivery,
    isDeliveryFree,
  } = useTotalPrice();

  if (status === 'loading/all') return <Skeleton className={getClassName(s.skeleton, className)} />;

  return (
    <section className={getClassName(s.check, className)}>
      <h5 className={s.title}>Состав заказа</h5>
      <ul className={s.list}>
        {productsInCart.map(({ product, count }) => (
          <li key={product.id} className={s.item}>
            <div className={s.itemInfo}>
              <h6 className={s.itemTitle}>{product.title}</h6>
              <div className={s.itemDescription}>
                <span>
                  {product.weight} г
                </span>
                <span>
                  {count}x
                </span>
              </div>
            </div>
            <div className={s.line} />
            <span className={s.itemPrice}>
              {product.price * count} ₽
            </span>
          </li>
        ))}
      </ul>
      <ul className={s.list}>
        {promocode && (
          <li className={s.item}>
            <h6 className={s.itemTitle}>{promocode.code}</h6>
            <div className={s.line} />
            <span className={s.itemPrice}>
              -{promocodeDiscount} ₽
            </span>
          </li>
        )}
        <li className={s.item}>
          <h6 className={s.itemTitle}>Доставка</h6>
          <div className={s.line} />
          <span className={s.itemPrice}>
            {isDeliveryFree ? 'бесплатно' : `${DELIVERY_PRICE} Р`}
          </span>
        </li>
      </ul>
      <div className={s.totalPriceBlock}>
        <h6 className={s.totalPriceTitle}>Сумма</h6>
        <div className={s.line} />
        <span className={s.totalPrice}>
          {totalPriceWithDelivery} ₽
        </span>
      </div>
    </section>
  );
};
