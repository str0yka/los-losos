import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAccessToken } from '@/hooks/useAccessToken';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchAddToCart, fetchDeleteFromCart } from '@/store/reducers/cartReducer';
import { getCart } from '@/store/selectors/cartSelectors';

export const useHandleCart = (id: number) => {
  const dispatch = useAppDispatch();
  const { status, productsInCart } = useSelector(getCart);
  const isFirstLoading = status === 'loading/all';
  const [isLoading, setIsLoading] = useState(false);
  const candidate = productsInCart.find((item) => item.product.id === id);
  const count = candidate?.count || 0;
  const accessToken = useAccessToken();

  const handleCart = async (action: 'add' | 'delete') => {
    try {
      setIsLoading(true);
      const options = { id, accessToken };

      await dispatch(
        action === 'add'
          ? fetchAddToCart(options)
          : fetchDeleteFromCart(options),
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
    isLoading: isLoading || isFirstLoading,
  };
};
