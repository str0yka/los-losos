import React from 'react';

import Check from '@/app/order/_components/Check/Check';
import Skeleton from '@/components/common/Skeleton/Skeleton';

import s from './page.module.scss';

const Order = () => (
  <div className={s.page}>
    <div>
      <Skeleton />
    </div>
    <Check />
  </div>
);

export default Order;
