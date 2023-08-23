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
      {product.img && <img src={`${process.env.NEXT_PUBLIC_API_URL}/../${product.img}`} alt="" />}
    </div>
    <div className={s.infoBlock}>
      <div className={s.info}>
        <div className={s.titleBlock}>
          <Typography
            component="h3"
            variant="body3"
          >
            {product.title ? product.title : 'Название отсутствует'}
          </Typography>
          <Typography
            className={s.weight}
            component="span"
            variant="body7"
          >
            {product.weight ? product.weight : 0} г
          </Typography>
        </div>
        <Typography
          className={s.foods}
          component="span"
          variant="body7"
        >
          {product.foods ? product.foods : 'состав отсутствует'}
        </Typography>
      </div>
      <div className={s.priceBlock}>
        <Typography
          component="span"
          variant="body2"
        >
          {product.price ? product.price : '0'} ₽
        </Typography>
        {countButton && <CountButton productId={product.id} />}
      </div>
    </div>
  </article>
);
