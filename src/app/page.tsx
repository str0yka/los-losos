import { Metadata } from 'next';
import React from 'react';

import { Container, Typography } from '~ui';
import { productApi } from '~utils/api';

import { HomeHeader, HomeSlider, ProductList } from './_sections';

export const metadata: Metadata = {
  title: 'Доставка | Лось-Лосось',
};

const getCategories = async (): Promise<[ProductGetAllResponse, string]> => {
  let categories: ProductGetAllResponse = [];
  let errorMessage = '';
  try {
    categories = await productApi.getAll();
  } catch (error: any) {
    errorMessage = error?.message ?? 'Ошибка при получение продуктов';
  }

  return [categories, errorMessage];
};

const Home = async () => {
  const [categories, errorMessage] = await getCategories();
  return (
    <main>
      <HomeHeader categories={categories} />
      <Container width="wide">
        <HomeSlider />
        {errorMessage && (
          <Typography component="p">
            {errorMessage}
          </Typography>
        )}
        {categories.map((category) => (
          <ProductList
            key={category.title}
            title={category.title}
            products={category.products}
          />
        ))}
      </Container>
    </main>
  );
};
export default Home;
