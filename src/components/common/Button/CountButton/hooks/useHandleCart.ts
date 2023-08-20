import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAccessToken, useAppDispatch } from '~hooks';
import { fetchAddItemToCart, fetchRemoveItemFromCart, getCart } from '~store';

export const useHandleCart = (productId: number) => {
  const dispatch = useAppDispatch();
  const { status, productsInCart } = useSelector(getCart);
  const [isLoading, setIsLoading] = useState(false);
  const count = productsInCart.find((productInCart) => (
    productInCart.product.id === productId
  ))?.count ?? 0;
  const accessToken = useAccessToken();
  const handleCart = async (action: 'add' | 'delete') => {
    try {
      setIsLoading(true);
      await dispatch(
        action === 'add'
          ? fetchAddItemToCart({ productId, accessToken })
          : fetchRemoveItemFromCart({ productId, accessToken }),
      );
    } catch (err) {
      // console.log(err);
      // alert('Упс! Что-то пошло не так'); // TODO: кастомный alert
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = () => handleCart('add');
  const deleteFromCart = () => handleCart('delete');

  return {
    addToCart,
    deleteFromCart,
    count,
    isLoading: isLoading || status === 'loading/all',
  };
};
