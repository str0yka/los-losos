import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import React from 'react';

import { options } from '~pages/api/auth/[...nextauth]/options';

interface AdminProviderProps {
  children: React.ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = async ({ children }) => {
  const session = await getServerSession(options);

  if (session?.user.role !== 'admin') {
    return redirect('/');
  }

  return children as JSX.Element;
};
