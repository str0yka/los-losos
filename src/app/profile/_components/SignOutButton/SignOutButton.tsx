'use client';

import { signOut, useSession } from 'next-auth/react';
import React from 'react';

import { Button } from '~ui';

export const SignOutButton = () => {
  const { status } = useSession();

  return (
    <Button
      variant="outlined"
      rounded
      disabled={status === 'loading'}
      onClick={() => signOut()}
    >
      Выйти
    </Button>
  );
};
