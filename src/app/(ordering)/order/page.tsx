import React from 'react';

import { Check, OrderForm } from './_sections';
import s from './page.module.scss';

const OrderPage = () => (
  <div className={s.page}>
    <OrderForm />
    <Check className={s.check} />
  </div>
);

export default OrderPage;
