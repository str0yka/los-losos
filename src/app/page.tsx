import { Metadata } from 'next';
import React from 'react';

import CategoryList from '@/app/_components/CategoryList/CategoryList';
import HomeHeader from '@/app/_components/HomeHeader/HomeHeader';
import Container from '@/components/common/Container/Container';
import { API_URL } from '@/utils/consts';

import { CategoryItem } from '../..';

export const metadata: Metadata = {
  title: 'Доставка | Лось-Лосось',
};

const getCategories = async () => {
  const response = await fetch(`${API_URL}/product`, {
    method: 'GET',
    next: {
      revalidate: 60,
    },
  });

  return response.json();
};

const Home = async () => {
  const categories: CategoryItem[] | unknown = await getCategories();

  if (!Array.isArray(categories)) return <h1>error</h1>;

  return (
    <>
      <HomeHeader categories={categories} />
      <Container>
        {categories.map((category) => (
          <CategoryList key={category.title} category={category} />
        ))}
      </Container>
    </>
  );
};

export default Home;
