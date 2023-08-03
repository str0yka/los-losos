'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { useAccessToken } from '@/hooks/useAccessToken';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import store from '@/store';
import { fetchAllProductsInCart } from '@/store/reducers/cartReducer';

interface StoreProviderProps {
  children: React.ReactNode;
}

const DispatchProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const { status } = useSession();
  const dispatch = useAppDispatch();
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
