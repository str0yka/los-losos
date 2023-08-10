'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import TitleBlock from '@/components/TitleBlock/TitleBlock';
import { useAccessToken } from '@/hooks/useAccessToken';
import { useRequest } from '@/hooks/useRequest';
import CategoryApi from '@/http/CategoryApi';
import { getClassNames } from '@/utils';

import s from './page.module.scss';

interface CategoryCreateForm {
  title: string
}

const AdminCategoryPage = () => {
  const [
    categories,
    isLoading,
    error,
    setCategories,
  ] = useRequest<CategoryItemWithoutProducts[]>(() => CategoryApi.getAll());
  const { register, handleSubmit, reset } = useForm<CategoryCreateForm>({
    defaultValues: {
      title: '',
    },
  });
  const accessToken = useAccessToken();

  const onCreateCategory = async (value: CategoryCreateForm) => {
    try {
      const category = await CategoryApi.create(value.title, accessToken);
      reset();
      setCategories((prev) => {
        if (prev) {
          return [...prev, category];
        }
        return null;
      });
      alert('Категория создана');
    } catch (err) {
      alert('Не удалось создать категорию'); // TODO: кастомный alert
    }
  };

  const onDeleteCategory = async (id: number) => {
    try {
      await CategoryApi.delete(id, accessToken);
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
            textVariant="capitalize-first-latter"
          >
            Создать
          </Button>
        </div>
      </form>
      <div className={s.categoryDeleteBlock}>
        <p>Удалить категорию</p>
        <ul className={s.categoryList}>
          <li className={getClassNames(s.categoryListItem, s.categoryListTitleBlock)}>
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
