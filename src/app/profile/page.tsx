'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

import { useAccessToken, useRequest } from '~hooks';
import { Skeleton } from '~ui';
import { orderApi } from '~utils/api';

import { OrderItem } from './_sections';
import s from './page.module.scss';

const ProfilePage = () => {
  const { status } = useSession();
  const accessToken = useAccessToken();
  const [
    orders,
    isLoading,
    isError,
  ] = useRequest<OrderGetAllResponse>(
    () => orderApi.getAll(accessToken),
    {
      dependencies: [status],
      verification: status === 'authenticated',
      defaultValue: [],
    },
  );

  if (isLoading) {
    return (
      <section className={s.orderList}>
        {Array(4)
          .fill(null)
          .map((_, index) => <Skeleton key={index} />)}
      </section>
    );
  }
  if (isError) return <span>error</span>;

  return (
    <section className={s.orderList}>
      {orders?.reverse()
        .map((order) => (
          <OrderItem
            key={order.cart.id}
            order={order}
          />
      ))}
    </section>
);
};

export default ProfilePage;
