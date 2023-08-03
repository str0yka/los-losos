'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchCheckPromocode } from '@/store/reducers/promocodeReducer';
import { getPromocode } from '@/store/selectors/promocodeSelectors';

import s from './Promocode.module.scss';

const Promocode = () => {
  const dispatch = useAppDispatch();
  const { promocode, status } = useSelector(getPromocode);
  const [code, setCode] = useState(promocode?.code || '');

  const onConfirmPromocode = async () => {
    try {
      await dispatch(fetchCheckPromocode(code));
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
          onChange={(event) => setCode(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && onConfirmPromocode()}
        />
        <Button
          variant="contained"
          onClick={onConfirmPromocode}
          disabled={status === 'loading'}
        >
          Применить
        </Button>
      </div>
    </div>
  );
};

export default Promocode;
