import React from 'react';

import ProgressLine from '@/components/common/ProgressLine/ProgressLine';

import s from './OrderingProgressLine.module.scss';

const OrderingProgressLine = () => {
  const progress = [
    { path: '/cart', name: 'Корзина' },
    { path: '/order', name: 'Оформление заказа' },
    { path: '/confirm', name: 'Заказ принят' },
  ];

  return <ProgressLine progress={progress} className={s.progressLine} />;
};

export default OrderingProgressLine;
