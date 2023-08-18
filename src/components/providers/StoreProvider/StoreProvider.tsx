'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { useAccessToken, useAppDispatch } from '~hooks';
import { fetchGetCart, store } from '~store';

interface StoreProviderProps {
  children: React.ReactNode;
}

const DispatchProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const { status } = useSession();
  const dispatch = useAppDispatch();
  const accessToken = useAccessToken();

  useEffect(() => {
    if (status !== 'loading') {
      dispatch(fetchGetCart(accessToken));
    }
  }, [status]);

  return children;
};

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => (
  <Provider store={store}>
    <DispatchProvider>
      {children}
    </DispatchProvider>
  </Provider>
);
