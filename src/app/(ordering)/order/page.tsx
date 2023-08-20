import React from 'react';

import { Check, OrderForm } from './_sections';
import s from './page.module.scss';

const Order = () => (
  <div className={s.page}>
    <OrderForm />
    <Check className={s.check} />
  </div>
);

export default Order;
