import React from 'react';

import { ProgressLine } from '~ui';

import s from './OrderingProgressLine.module.scss';

export const OrderingProgressLine = () => {
  const orderingProgress = [
    { path: '/cart', name: 'Корзина' },
    { path: '/order', name: 'Оформление заказа' },
    { path: '/confirm', name: 'Заказ принят' },
  ];

  return (
    <section className={s.progressLine}>
      <ProgressLine progress={orderingProgress} />
    </section>
  );
};
