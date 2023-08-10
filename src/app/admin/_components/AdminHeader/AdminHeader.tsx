import Link from 'next/link';
import React from 'react';

import Container from '@/components/common/Container/Container';

import s from './AdminHeader.module.scss';

const AdminHeader = () => (
  <div className={s.header}>
    <Container>
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

export default AdminHeader;
