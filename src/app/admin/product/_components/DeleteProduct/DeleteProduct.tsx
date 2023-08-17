'use client';

import React from 'react';

import { useAccessToken } from '@/hooks/useAccessToken';
import { useRequest } from '@/hooks/useRequest';
import ProductApi from '@/http/ProductApi';

import s from './DeleteProduct.module.scss';

const DeleteProduct = () => {
  const accessToken = useAccessToken();
  const [categories] = useRequest<CategoryItem[]>(() => ProductApi.getAll());

  const onDeleteProduct = async (id: number) => {
    try {
      await ProductApi.delete(id, accessToken);
      alert('Продукт удален');
    } catch (error) {
      alert('Ошибка при удалении продукта');
    }
  };

  return (
    <div>
      <p>Удалить продукт</p>
      <ul className={s.list}>
        <li className={s.titleBlock}>
          <span>Название продукта</span>
          <span>Вес</span>
          <span>Цена</span>
        </li>
        {categories?.map((category) => category.products.map((product) => (
          <li key={product.id}>
            <span>{product.title}</span>
            <span>{product.weight}</span>
            <span>{product.price}</span>
            <button
              className={s.deleteButton}
              onClick={() => onDeleteProduct(product.id)}
            >
              Удалить
            </button>
          </li>
        )))}
      </ul>
    </div>
  );
};

export default DeleteProduct;
