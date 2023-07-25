import React from 'react';

import Check from '@/app/order/_components/Check/Check';
import OrderForm from '@/app/order/_components/OrderForm/OrderForm';

import s from './page.module.scss';

const Order = () => (
  <div className={s.page}>
    <OrderForm />
    <Check className={s.check} />
  </div>
);

export default Order;
