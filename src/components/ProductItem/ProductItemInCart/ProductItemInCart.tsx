import React from 'react';

import { CountButton, Typography } from '~ui';

import { DeleteFromCartButton } from '../../DeleteFromCartButton/DeleteFromCartButton';
import s from './ProductItemInCart.module.scss';

interface ProductItemInCartProps {
  product: Product;
  count: number;
}

export const ProductItemInCart: React.FC<ProductItemInCartProps> = ({ product, count }) => (
  <article className={s.product}>
    <div className={s.infoBlock}>
      <div className={s.info}>
        <div className={s.image}>
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}/../${product.img}`}
            alt={product.title}
          />
        </div>
        <div className={s.titleBlock}>
          <Typography component="p">
            {product.title}
          </Typography>
          <Typography
            className={s.weight}
            component="p"
            variant="body5"
          >
            {product.weight} г
          </Typography>
        </div>
      </div>
      <DeleteFromCartButton
        className={s.trashIcon}
        productId={product.id}
      />
    </div>
    <div className={s.actionBlock}>
      <Typography component="span">
        {Math.round(product.price * count)} ₽
      </Typography>
      <CountButton productId={product.id} />
    </div>
  </article>
);
