'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

import OrderItem from '@/app/profile/_components/OrderItem/OrderItem';
import Skeleton from '@/components/common/Skeleton/Skeleton';
import { useAccessToken } from '@/hooks/useAccessToken';
import { useRequest } from '@/hooks/useRequest';
import CartApi from '@/http/CartApi';

import s from './page.module.scss';

const ProfilePage = () => {
  const { status } = useSession();
  const accessToken = useAccessToken();
  const [
    orders,
    isLoading,
    isError,
  ] = useRequest<Order[]>(
    () => CartApi.getOrders(accessToken),
    {
      dependencies: [status],
      verification: status === 'authenticated',
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
