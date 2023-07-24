'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAccessToken } from '@/hooks/useAccessToken';
import { fetchAllProductsInCart } from '@/store/slices/cartSlices';
import { AppDispatch } from '@/store/store';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AfterAuthorize: React.FC<AuthProviderProps> = ({ children }) => {
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

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => (
  <SessionProvider>
    <AfterAuthorize>{children}</AfterAuthorize>
  </SessionProvider>
);

export default AuthProvider;
