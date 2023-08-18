import { Metadata } from 'next';
import React from 'react';

import { Container } from '~ui';
import { productApi } from '~utils/api';

import { CategoryList, HomeHeader, HomeSlider } from './_components';

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
  const [categories] = await getCategories();
  if (!Array.isArray(categories)) return <h1>error</h1>;
  return (
    <>
      <HomeHeader categories={categories} />
      <Container width="wide">
        <HomeSlider />
        {categories.map((category) => (
          <CategoryList key={category.title} category={category} />
        ))}
      </Container>
    </>
  );
};
export default Home;
