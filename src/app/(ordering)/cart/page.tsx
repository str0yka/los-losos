'use client';

import React from 'react';
import { useSelector } from 'react-redux';

import { ProductItemInCart } from '~components';
import { useTotalPrice } from '~hooks';
import { getCart } from '~store';
import {
  ArrowIcon,
  LinkButton,
  Skeleton,
  Typography,
} from '~ui';

import { EmptyCart, Promocode } from './_sections';
import s from './page.module.scss';

const CartPage = () => {
  const { totalPriceWithDiscount, isDeliveryFree, priceToFreeDelivery } = useTotalPrice();
  const { status, productsInCart } = useSelector(getCart);
  const isFirstLoading = status === 'loading/all';

  if (!productsInCart.length && !isFirstLoading) return <EmptyCart />;

  return (
    <div className={s.cart}>
      {status === 'loading/all' && <Skeleton h="50px" />}
      {status !== 'loading/all' && (
        <section className={s.banner}>
          <Typography
            className={s.text}
            component="span"
            variant="body4"
          >
            {isDeliveryFree
              ? 'Ура! Бесплатная доставка 🎉'
              : `До бесплатной доставки осталось ${priceToFreeDelivery} ₽`}
          </Typography>
        </section>
      )}
      <section className={s.list}>
        {status === 'loading/all' && <Skeleton />}
        {productsInCart.map((productInCart) => (
          <ProductItemInCart
            key={productInCart.product.id}
            product={productInCart.product}
            count={productInCart.count}
          />
        ))}
      </section>
      <Promocode />
      <div className={s.totalPriceBlock}>
        <span>Сумма заказа</span>
        <div className={s.line} />
        <span>
          {totalPriceWithDiscount} ₽
        </span>
      </div>
      <LinkButton
        className={s.confirmButton}
        variant="contained"
        size="large"
        href="/order"
        loading={{
          status: status === 'loading/all',
          className: s.skeletonButton,
        }}
      >
        Перейти к оформлению
        <ArrowIcon />
      </LinkButton>
    </div>
  );
};

export default CartPage;
