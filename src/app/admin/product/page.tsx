import React from 'react';

import CreateProduct from './_components/CreateProduct/CreateProduct';
import DeleteProduct from './_components/DeleteProduct/DeleteProduct';
import s from './page.module.scss';

const AdminProductPage = () => (
  <section className={s.page}>
    <CreateProduct />
    <DeleteProduct />
  </section>
  );

export default AdminProductPage;
