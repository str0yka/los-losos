import React from 'react';

import CountButton from '@/components/common/CountButton/CountButton';
import DeleteFromCartButton from '@/components/DeleteFromCartButton/DeleteFromCartButton';
import { API_URL, getClassNames } from '@/utils';

import s from './ProductItem.module.scss';

interface ProductItemProps {
  product: Product;
  size: 'small' | 'medium' | 'large';
  removeButton?: boolean;
  countButton?: boolean
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  size,
  removeButton = false,
  countButton = true,
}) => {
  const productClassName = getClassNames(s.product, s[size]);

  return (
    <article className={productClassName}>
      <div className={s.image}>
        {product.img && <img src={`${API_URL}/../${product.img}`} alt={product.title} />}
      </div>
      <div className={s.nonImage}>
        <div className={s.info}>
          <h3 className={s.title}>
            {product.title || 'Без названия'}
            <span>
              {product.weight || 0} г
            </span>
          </h3>
          <p className={s.foods}>
            {product.foods || 'состав отсутствует'}
          </p>
        </div>
        <div className={s.priceBlock}>
          <span className={s.price}>{product.price || 0} Р</span>
          {countButton && <CountButton id={product.id} />}
          {removeButton && (
            <DeleteFromCartButton className={s.delete} id={product.id} />
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
