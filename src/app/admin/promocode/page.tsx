'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { useAccessToken } from '@/hooks/useAccessToken';
import PromocodeApi from '@/http/PromocodeApi';

import s from './page.module.scss';

interface CreatePromocodeForm {
  code: string
  discountType: 'percentage' | 'fix'
  value: number
  name?: string
  text?: string
  expireType: 'count' | 'infinity' | 'date'
  count?: number
  date?: Date
}

const AdminPromocodePage = () => {
  const { register, watch, handleSubmit } = useForm<CreatePromocodeForm>({
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

  const onCreatePromocode = async (promocode: CreatePromocodeForm) => {
    try {
      await PromocodeApi.create(promocode, accessToken);
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
                type="tel"
                {...register(
                  'value',
                  {
                    valueAsNumber: true,
                  },
                )}
              />
            </label>
          )}
          {discountType === 'percentage' && (
            <label>
              <span>В процентах</span>
              <Input
                type="tel"
                {...register(
                  'value',
                  {
                    max: 100,
                    valueAsNumber: true,
                  },
                )}
              />
            </label>
          )}
        </li>
      </ul>
      <Button
        type="submit"
        variant="contained"
        textVariant="capitalize-first-latter"
      >
        Создать
      </Button>
    </form>
  );
};

export default AdminPromocodePage;
