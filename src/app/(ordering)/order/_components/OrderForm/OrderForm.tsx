'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import AddressForm from '@/app/(ordering)/order/_components/AddressForm/AddressForm';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import Textarea from '@/components/common/Textarea/Textarea';
import { useAccessToken } from '@/hooks/useAccessToken';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useForm } from '@/hooks/useForm';
import { fetchConfirmOrder } from '@/store/reducers/cartReducer';

import s from './OrderForm.module.scss';

const OrderForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const accessToken = useAccessToken();
  const { handleInputChange, handleSubmit } = useForm({
    name: '',
    phone: '',
    street: '',
    home: '',
    building: '',
    entrance: '',
    floor: '',
    apartment: '',
    addressComment: '',
    orderComment: '',
  }, async (formData) => {
    try {
      await dispatch(fetchConfirmOrder({ formData, accessToken }));
      router.push('/profile');
    } catch (error) {
      // alert('Ошибка при оформление заказа') // TODO: кастомный алерт
    }
  });

  return (
    <div>
      <h2 className={s.title}>Личные данные</h2>
      <form
        className={s.form}
        onSubmit={handleSubmit}
      >
        <ul className={s.formList}>
          <li className={s.formItem}>
            <span>Имя &#128527;</span>
            <Input
              name="name"
              onChange={handleInputChange}
              placeholder="Как вас зовут?"
              required
            />
          </li>
          <li className={s.formItem}>
            <span>Телефон &#9742;</span>
            <Input
              type="tel"
              name="phone"
              onChange={handleInputChange}
              placeholder="Ваш номер телефона?"
              required
            />
          </li>
          <li className={s.formItem}>
            <span>Адрес доставки &#127969;</span>
            <AddressForm handleInputChange={handleInputChange} />
          </li>
          <li className={s.formItem}>
            <span>Время доставки &#9200;</span>
            <Input type="time" />
          </li>
          <li className={s.formItem}>
            <span>Комментарий к заказу &#129300;</span>
            <Textarea
              name="comment"
              onChange={handleInputChange}
              placeholder="Напишите тут то, что считаете важным"
              maxLength={300}
              resize="noResize"
              className={s.textarea}
            />
          </li>
        </ul>
        <Button
          className={s.confirmButton}
          variant="contained"
          size="large"
          textVariant="capitalize-first-latter"
          type="submit"
        >
          Оформить заказ
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.991455 4C0.715313 4 0.491455 4.22386 0.491455 4.5C0.491455 4.77614 0.715313 5 0.991455 5V4ZM11.345 4.85355C11.5403 4.65829 11.5403 4.34171 11.345 4.14645L8.16303 0.964466C7.96777 0.769204 7.65118 0.769204 7.45592 0.964466C7.26066 1.15973 7.26066 1.47631 7.45592 1.67157L10.2843 4.5L7.45592 7.32843C7.26066 7.52369 7.26066 7.84027 7.45592 8.03553C7.65118 8.2308 7.96777 8.2308 8.16303 8.03553L11.345 4.85355ZM0.991455 5H10.9915V4H0.991455V5Z"
              fill="black"
            />
          </svg>
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;
