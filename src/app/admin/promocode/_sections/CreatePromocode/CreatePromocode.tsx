'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { useAccessToken } from '~hooks';
import { Button, Input } from '~ui';
import { promocodeApi } from '~utils/api';

import s from './CreatePromocode.module.scss';

export const CreatePromocode = () => {
  const { register, watch, handleSubmit } = useForm<PromocodeCreateRequest>({
    defaultValues: {
      code: '',
      discountType: 'fix',
      value: 0,
      name: '',
      text: '',
      expireType: 'infinity',
      count: 0,
      date: new Date(Date.now()),
    },
  });
  const [expireType, discountType] = watch(['expireType', 'discountType']);
  const accessToken = useAccessToken();

  const onCreatePromocode = async (promocode: PromocodeCreateRequest) => {
    try {
      await promocodeApi.create(promocode, accessToken);
      alert('Промокод создан');
    } catch (error) {
      alert('Ошибка при создании промокода');
    }
  };

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit(onCreatePromocode)}
    >
      <p>Создать промокод</p>
      <ul className={s.list}>
        <li>
          <span>Код *</span>
          <Input {...register('code', { required: true })} />
        </li>
        <li>
          <span>Название</span>
          <Input {...register('name')} />
        </li>
        <li>
          <span>Описание</span>
          <Input {...register('text')} />
        </li>
        <li>
          <span>Сколько действует?</span>
          <div className={s.radioList}>
            <label>
              <input
                {...register('expireType')}
                type="radio"
                value="infinity"
              />
              <span>Бесконечно</span>
            </label>
            <label>
              <input
                {...register('expireType')}
                type="radio"
                value="count"
              />
              <span>Количество использований</span>
            </label>
            <label>
              <input
                {...register('expireType')}
                type="radio"
                value="date"
              />
              <span>До определенного времени</span>
            </label>
          </div>
          <div>
            {expireType === 'count' && (
              <label>
                <span>Количество использование</span>
                <Input
                  {...register('count', { valueAsNumber: true })}
                  type="tel"
                />
              </label>
            )}
            {expireType === 'date' && (
              <label>
                <span>До определенного времени</span>
                <Input
                  {...register('date', { valueAsDate: true })}
                  type="date"
                />
              </label>
            )}
          </div>
        </li>
        <li>
          <span>Тип скидки</span>
          <div className={s.radioList}>
            <label>
              <input
                {...register('discountType')}
                type="radio"
                value="fix"
              />
              <span>Фиксированная</span>
            </label>
            <label>
              <input
                {...register('discountType')}
                type="radio"
                value="percentage"
              />
              <span>В процентах</span>
            </label>
          </div>
          {discountType === 'fix' && (
            <label>
              <span>Фиксированное значение</span>
              <Input
                {...register('value', { valueAsNumber: true })}
                type="tel"
              />
            </label>
          )}
          {discountType === 'percentage' && (
            <label>
              <span>В процентах</span>
              <Input
                {...register('value', {
                    max: 100,
                    valueAsNumber: true,
                })}
                type="tel"
              />
            </label>
          )}
        </li>
      </ul>
      <Button
        type="submit"
        variant="contained"
      >
        Создать
      </Button>
    </form>
  );
};
