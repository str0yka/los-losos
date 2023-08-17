import React from 'react';

import ProductItem from '@/app/_components/ProductItem/ProductItem';

import s from './CategoryList.module.scss';

interface CategoryListProps {
  category: CategoryItem;
}

const CategoryList: React.FC<CategoryListProps> = ({ category }) => (
  <section
    id={category.title}
    className={s.category}
  >
    <h2 className={s.title}>{category.title}</h2>
    <div className={s.list}>
      {category.products.map((product: Product) => (
        <ProductItem
          key={product.id}
          product={product}
          size="large"
        />
      ))}
    </div>
  </section>
);

export default CategoryList;
