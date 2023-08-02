'use client';

import React from 'react';
import { useSelector } from 'react-redux';

import ProductItem from '@/app/_components/ProductItem/ProductItem';
import Skeleton from '@/components/common/Skeleton/Skeleton';
import { RootState } from '@/store/store';

import s from './ProductInCartList.module.scss';

const getCart = (state: RootState) => state.cart;

const ProductInCartList = () => {
  const { status, data } = useSelector(getCart);

  return (
    <section className={s.list}>
      {status === 'loading/all' && <Skeleton />}
      {data.map(({ product }) => (
        <ProductItem
          key={product.id}
          product={product}
          size="medium"
          removeButton
        />
      ))}
    </section>
  );
};

export default ProductInCartList;
