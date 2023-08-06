import React from 'react';

import { getOrderStatus } from '@/utils';

import s from './OrderItem.module.scss';

interface OrderItemProps {
  order: Order
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
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
            (product) => (
              <li
                key={product.product.title}
                className={s.productListItem}
              >
                <span>
                  {product.product.title}
                </span>
                <span className={s.productListItemCount}>
                  {product.count}
                </span>
              </li>
        ),
          )}
        </ul>
      </div>
    </article>
  );
};

export default OrderItem;
