'use client';

import React, { useState } from 'react';

import ProductItem from '@/app/_components/ProductItem/ProductItem';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { useAccessToken } from '@/hooks/useAccessToken';
import { useControllerForm } from '@/hooks/useControllerForm';
import { useRequest } from '@/hooks/useRequest';
import CategoryApi from '@/http/CategoryApi';
import ProductApi from '@/http/ProductApi';

import s from './CreateProduct.module.scss';

interface CreateProductValues extends Omit<Product, 'id' | 'foods' | 'img'> {}

const CreateProduct = () => {
  const accessToken = useAccessToken();
  const [newFood, setNewFood] = useState<string>('');
  const [foods, setFoods] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const onSubmit = async (formData: CreateProductValues) => {
    try {
      if (!image || !foods.length) {
        return alert('Нету изображения или отсутствует состав продукта');
      }

      const newProduct = await ProductApi.create({
        ...formData,
        img: image,
        foods: JSON.stringify(foods),
      }, accessToken);
      alert('Продукт создан');
    } catch (error) {
      alert('Ошибка при создании продукта');
      console.log(error);
    }
  };
  const {
    values,
    getFieldProps,
    handleSubmit,
  } = useControllerForm<CreateProductValues>({
    defaultValues: {
      title: '',
      price: 0,
      weight: 0,
      categoryId: 0,
    },
    onSubmit,
  });

  const [categories] = useRequest<CategoryItemWithoutProducts[]>(() => CategoryApi.getAll());

  const handleAddFood = () => {
    const candidate = foods.find((food) => food === newFood);

    if (candidate) {
      alert('Такой продукт уже существует');
      return;
    }

    setFoods((prev) => [...prev, newFood]);
    setNewFood('');
  };

  const handleDeleteFood = (removableFood: string) => {
    setFoods((prev) => prev.filter((food) => food !== removableFood));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.preview}>
        <ProductItem
          product={{
            ...values,
            id: 0,
            foods: foods.join(', '),
            img: '',
        }}
          size="large"
          countButton={false}
        />
      </div>
      <form
        className={s.form}
        onSubmit={handleSubmit}
      >
        <ul className={s.formList}>
          <li className={s.titleBlock}>
            <span>Название продукта</span>
            <Input
              {...getFieldProps(
                'title',
                {
                  required: true,
                },
              )}
              placeholder="тут название..."
            />
          </li>
          <li className={s.priceBlock}>
            <span>Цена</span>
            <Input
              {...getFieldProps(
                'price',
                {
                  required: true,
                },
              )}
              placeholder="тут цена..."
            />
          </li>
          <li className={s.weightBlock}>
            <span>Вес</span>
            <Input
              {...getFieldProps(
                'weight',
                {
                  required: true,
                },
              )}
              placeholder="в граммах"
            />
          </li>
          <li className={s.foodsBlock}>
            <span>Состав</span>
            <div>
              <Input
                value={newFood}
                onChange={(event) => setNewFood(event.target.value)}
                placeholder="один продукт"
              />
              <Button
                type="button"
                variant="contained"
                onClick={handleAddFood}
              >
                Добавить
              </Button>
            </div>
            <div className={s.foodList}>
              {foods.map((food) => (
                <button
                  key={food}
                  type="button"
                  className={s.foodButton}
                  onClick={() => handleDeleteFood(food)}
                >
                  <div className={s.crossIcon} />
                  <span>{food}</span>
                </button>
              ))}
            </div>
          </li>
          <li className={s.categoryBlock}>
            <span>Категория</span>
            <select
              {...getFieldProps('categoryId')}
            >
              {categories?.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.title}
                </option>
              ))}
            </select>
          </li>
          <li className={s.imageBlock}>
            <span>Изображение</span>
            <label
              className={s.labelImageUpload}
              htmlFor="image_upload"
            >
              {image
              ? 'Выбрать другое изображение'
              : 'Загрузить изображение'}
            </label>
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              id="image_upload"
              className={s.inputImageUpload}
              onChange={(event) => {
                if (event.target.files?.length) {
                  setImage(event.target.files[0]);
                }
              }}
            />
          </li>
        </ul>
        <Button
          type="submit"
          variant="contained"
        >
          Создать
        </Button>
      </form>
    </div>
  );
};

export default CreateProduct;
