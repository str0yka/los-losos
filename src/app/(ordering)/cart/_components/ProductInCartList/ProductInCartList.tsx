'use client';

import React from 'react';
import { useSelector } from 'react-redux';

import ProductItem from '@/app/_components/ProductItem/ProductItem';
import Skeleton from '@/components/common/Skeleton/Skeleton';
import { getCart } from '@/store/selectors/cartSelectors';

import s from './ProductInCartList.module.scss';

const ProductInCartList = () => {
  const { status, productsInCart } = useSelector(getCart);

  return (
    <section className={s.list}>
      {status === 'loading/all' && <Skeleton />}
      {productsInCart.map(({ product }) => (
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
