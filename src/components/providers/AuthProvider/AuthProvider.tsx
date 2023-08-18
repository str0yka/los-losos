'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => (
  <SessionProvider>
    {children}
  </SessionProvider>
);
