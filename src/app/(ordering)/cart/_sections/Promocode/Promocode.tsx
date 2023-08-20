'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAccessToken, useAppDispatch } from '~hooks';
import { fetchApplyPromocode, fetchCancelPromocode, getCart } from '~store';
import { Button, Input } from '~ui';

import s from './Promocode.module.scss';

export const Promocode = () => {
  const dispatch = useAppDispatch();
  const { promocode, status } = useSelector(getCart);
  const [code, setCode] = useState(promocode?.code || '');
  const accessToken = useAccessToken();

  useEffect(() => {
    if (promocode) {
      setCode(promocode.code);
    } else {
      setCode('');
    }
  }, [promocode]);

  const onApplyPromocode = async () => {
    try {
      await dispatch(fetchApplyPromocode({ code, accessToken }));
    } catch (error) {
      // alert('Такого промокода не существует'); // TODO: сделать свой алерт
    }
  };

  const onCancelPromocode = async () => {
    try {
      await dispatch(fetchCancelPromocode(accessToken));
    } catch (error) {
      // alert('Такого промокода не существует'); // TODO: сделать свой алерт
    }
  };

  return (
    <div className={s.promocode}>
      <h4 className={s.title}>Промокод</h4>
      {promocode && (
        <div className={s.promocodeInfo}>
          {!promocode?.name && (
            <p className={s.promocodeSubtitle}>
              Ура! Вы активировали промкод
              {promocode.code}
              😊
            </p>
          )}
          {promocode?.name && (
            <h5 className={s.promocodeTitle}>{promocode.name}</h5>
          )}
          {promocode?.text && (
            <p className={s.promocodeSubtitle}>{promocode.text}</p>
          )}
        </div>
      )}
      <div className={s.promocodeAction}>
        <Input
          placeholder="Введите ваш промокод..."
          value={code}
          disabled={status === 'loading/all' || status === 'loading/promocode'}
          onChange={(event) => setCode(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && !promocode && onApplyPromocode()}
        />
        <Button
          variant="contained"
          onClick={promocode ? onCancelPromocode : onApplyPromocode}
          disabled={status === 'loading/all' || status === 'loading/promocode'}
        >
          {promocode ? 'Отменить' : 'Применить'}
        </Button>
      </div>
    </div>
  );
};
