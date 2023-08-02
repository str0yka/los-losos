import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAccessToken } from '@/hooks/useAccessToken';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchAddToCart, fetchDeleteFromCart } from '@/store/slices/cartSlices';
import { RootState } from '@/store/store';

export const useHandleCart = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const count: number = useSelector((state: RootState) => {
    const candidate = state.cart.data.find(({ product }) => product?.id === id);
    if (!candidate) return 0;
    return candidate.count;
  });
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
    isLoading,
  };
};
