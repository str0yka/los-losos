import React from 'react';

import { ProductItem } from '~components';
import { Typography } from '~ui';

import s from './ProductList.module.scss';

interface ProductListProps {
  title: string;
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ title, products }) => (
  <section
    id={title}
    className={s.category}
  >
    <Typography
      className={s.title}
      component="h2"
      variant="h2"
      weight="bold"
    >
      {title}
    </Typography>
    <div className={s.list}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  </section>
);
