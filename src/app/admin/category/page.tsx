'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { TitleBlock } from '~components';
import { useAccessToken, useRequest } from '~hooks';
import { Button, Input } from '~ui';
import { categoryApi } from '~utils/api';
import { getClassName } from '~utils/helpers';

import s from './page.module.scss';

const AdminCategoryPage = () => {
  const [
    categories,
    isLoading,
    error,
    setCategories,
  ] = useRequest({
    request: () => categoryApi.getAll(),
    defaultValue: [],
  });
  const { register, handleSubmit, reset } = useForm<CategoryCreateRequest>({
    defaultValues: {
      title: '',
    },
  });
  const accessToken = useAccessToken();

  const onCreateCategory = async (value: CategoryCreateRequest) => {
    try {
      const category = await categoryApi.create({ title: value.title }, accessToken);
      reset();
      setCategories((prev) => {
        if (prev) {
          return [...prev, category];
        }
        return [category];
      });
      alert('Категория создана');
    } catch (err) {
      alert('Не удалось создать категорию'); // TODO: кастомный alert
    }
  };

  const onDeleteCategory = async (id: number) => {
    try {
      await categoryApi.delete({ id }, accessToken);
      setCategories((prev) => prev?.filter((category) => category.id !== id) || null);
      alert('Категория удалена');
    } catch (err) {
      alert('Не удалось удалить категорию'); // TODO: кастомный alert
    }
  };

  return (
    <>
      <TitleBlock
        backTo="/admin"
        title="Категории"
      />
      <form
        className={s.form}
        onSubmit={handleSubmit(onCreateCategory)}
      >
        <p>Создать категорию</p>
        <div className={s.formInputBlock}>
          <Input
            {...register('title')}
            placeholder="Название категории"
          />
          <Button
            variant="contained"
          >
            Создать
          </Button>
        </div>
      </form>
      <div className={s.categoryDeleteBlock}>
        <p>Удалить категорию</p>
        <ul className={s.categoryList}>
          <li className={getClassName(s.categoryListItem, s.categoryListTitleBlock)}>
            <span>Наименование категории</span>
          </li>
          {isLoading && (
            <li className={s.categoryListItem}>
              <span>loading...</span>
            </li>
          )}
          {!!error && (
          <li>
            <span>{error}</span>
          </li>
)}
          {categories?.map((category) => (
            <li
              key={category.id}
              className={s.categoryListItem}
            >
              <span>{category.title}</span>
              <div />
              <button
                onClick={() => onDeleteCategory(category.id)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminCategoryPage;
