import Link from 'next/link';
import React from 'react';

import { Container } from '~ui';

import s from './AdminHeader.module.scss';

export const AdminHeader = () => (
  <div className={s.header}>
    <Container width="medium">
      <ul className={s.list}>
        <li>
          <Link href="/admin/category">Категории</Link>
        </li>
        <li>
          <Link href="/admin/product">Продукты</Link>
        </li>
        <li>
          <Link href="/admin/promocode">Промокоды</Link>
        </li>
      </ul>
    </Container>
  </div>
  );
