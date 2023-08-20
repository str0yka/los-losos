import React from 'react';

import { getOrderStatus } from '~utils/helpers';

import s from './OrderItem.module.scss';

interface OrderItemProps {
  order: OrderGetAllResponse[number]
}

export const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const status = getOrderStatus(order.status);

  return (
    <article className={s.orderItem}>
      <div className={s.titleBlock}>
        <span>
          Ваш заказ: №{order.cart.id}
        </span>
        {status}
      </div>
      <div className={s.orderItemList}>
        <div className={s.productListTitle}>
          <span>Наименование</span>
          <span>Кол-во</span>
        </div>
        <ul className={s.productList}>
          {order.cart.productsInCart.map(
            (productInCart) => (
              <li
                key={productInCart.product.title}
                className={s.productListItem}
              >
                <span>
                  {productInCart.product.title}
                </span>
                <span className={s.productListItemCount}>
                  {productInCart.count}
                </span>
              </li>
        ),
          )}
        </ul>
      </div>
    </article>
  );
};
