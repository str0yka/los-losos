import React from 'react';

import { useAccessToken, useRequest } from '~hooks';
import { promocodeApi } from '~utils/api';

import s from './DeletePromocode.module.scss';

export const DeletePromocode = () => {
  const accessToken = useAccessToken();
  const [promocodes] = useRequest({
    request: () => promocodeApi.getAll(accessToken),
    defaultValue: [],
  });

  return (
    <ul className={s.list}>
      <li className={s.titleBlock}>
        <span>Код</span>
        <span>Скидка</span>
        <span>Сколько действует</span>
        <span>Количество использований</span>
      </li>
      {promocodes.map((promocode) => (
        <li key={promocode.id}>
          <span>{promocode.code}</span>
          <span>
            {promocode.value} {promocode.discountType === 'fix' ? '₽' : '%'}
          </span>
          <span>
            {promocode.expireType === 'count' && 'количество использований'}
            {promocode.expireType === 'date' && 'до определенной даты'}
            {promocode.expireType === 'infinity' && 'бесконечно'}
          </span>
          <span>
            {promocode.expireType === 'count' && promocode.counter}
            {promocode.expireType !== 'count' && 'неизвестно'}
          </span>
        </li>
      ))}
    </ul>
  );
};
