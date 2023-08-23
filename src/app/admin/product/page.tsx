import React from 'react';

import { CreateProduct, DeleteProduct } from './_sections';
import s from './page.module.scss';

const AdminProductPage = () => (
  <section className={s.page}>
    <CreateProduct />
    <DeleteProduct />
  </section>
  );

export default AdminProductPage;
