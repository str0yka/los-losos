'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import Textarea from '@/components/common/Textarea/Textarea';
import { useAccessToken } from '@/hooks/useAccessToken';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchConfirmOrder } from '@/store/reducers/cartReducer';

import s from './OrderForm.module.scss';

type FormValues = {
  name: string;
  phone: string;
  street: string;
  home: string;
  building: string;
  entrance: string;
  floor: string;
  apartment: string;
  addressComment: string;
  orderComment: string;
};

const OrderForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const accessToken = useAccessToken();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({
    defaultValues: {
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
    },
  });

  const onSubmit = async (formData: FormValues) => {
    try {
      await dispatch(fetchConfirmOrder({ formData, accessToken }));
      router.push('/profile');
    } catch (error) {
      // alert('Ошибка при оформление заказа') // TODO: кастомный алерт
    }
  };

  return (
    <div>
      <h2 className={s.title}>Личные данные</h2>
      <form
        className={s.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <ul className={s.formList}>
          <li className={s.formItem}>
            <span>Имя &#128527;</span>
            <Input
              {...register('name', { required: true })}
              placeholder="Как вас зовут?"
            />
          </li>
          <li className={s.formItem}>
            <span>Телефон &#9742;</span>
            <Input
              {...register('phone', { required: true, minLength: 10 })}
              type="tel"
              placeholder="Ваш номер телефона?"
            />
          </li>
          <li className={s.formItem}>
            <span>Адрес доставки &#127969;</span>
            <ul className={s.addressForm}>
              <li className={s.addressMainBlock}>
                <span>Улица *</span>
                <Input
                  {...register('street', { required: true })}
                  placeholder="Обязательно заполните"
                />
              </li>
              <li>
                <span>Дом *</span>
                <Input
                  {...register('home', { required: true })}
                  placeholder="И это тоже"
                />
              </li>
              <li>
                <span>Строение</span>
                <Input
                  {...register('building')}
                />
              </li>
              <li>
                <span>Подъезд</span>
                <Input
                  {...register('entrance')}
                />
              </li>
              <li>
                <span>Этаж</span>
                <Input
                  {...register('floor')}
                />
              </li>
              <li>
                <span>Квартира</span>
                <Input
                  {...register('apartment')}
                />
              </li>
              <li className={s.addressTextareaBlock}>
                <span>Комментарий к адресу</span>
                <Textarea
                  {...register('addressComment')}
                  className={s.textarea}
                  resize="noResize"
                  placeholder="Укажите код домофона или другую, важную для курьера, информацию"
                />
              </li>
            </ul>
          </li>
          <li className={s.formItem}>
            <span>Комментарий к заказу &#129300;</span>
            <Textarea
              {...register('orderComment', { maxLength: 300 })}
              placeholder="Напишите тут то, что считаете важным"
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
          disabled={isSubmitting}
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
