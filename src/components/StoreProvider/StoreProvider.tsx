'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

import { useAccessToken } from '@/hooks/useAccessToken';
import { fetchAllProductsInCart } from '@/store/slices/cartSlices';
import store, { AppDispatch } from '@/store/store';

interface StoreProviderProps {
  children: React.ReactNode;
}

const DispatchProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const { status } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const accessToken = useAccessToken();

  useEffect(() => {
    if (status !== 'loading') {
      dispatch(fetchAllProductsInCart(accessToken));
    }
  }, [status]);

  return children;
};

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => (
  <Provider store={store}>
    <DispatchProvider>
      {children}
    </DispatchProvider>
  </Provider>
);

export default StoreProvider;
