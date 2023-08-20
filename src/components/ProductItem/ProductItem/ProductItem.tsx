import React from 'react';

import { CountButton, Typography } from '~ui';

import s from './ProductItem.module.scss';

interface ProductItemProps {
  product: Product;
  countButton?: boolean
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  countButton = true,
}) => (
  <article className={s.product}>
    <div className={s.image}>
      <img src={`${process.env.NEXT_PUBLIC_API_URL}/../${product.img}`} alt="" />
    </div>
    <div className={s.infoBlock}>
      <div className={s.info}>
        <div className={s.titleBlock}>
          <Typography
            component="h3"
            variant="body3"
          >
            {product.title}
          </Typography>
          <Typography
            className={s.weight}
            component="span"
            variant="body7"
          >
            {product.weight} г
          </Typography>
        </div>
        <Typography
          className={s.foods}
          component="span"
          variant="body7"
        >
          {product.foods}
        </Typography>
      </div>
      <div className={s.priceBlock}>
        <Typography
          component="span"
          variant="body2"
        >
          {product.price} ₽
        </Typography>
        {countButton && <CountButton productId={product.id} />}
      </div>
    </div>
  </article>
);
