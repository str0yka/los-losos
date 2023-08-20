'use client';

import React from 'react';

import { useTotalCount } from '~hooks';
import { LinkButton } from '~ui';

export const ToCartButton = () => {
  const totalCount = useTotalCount();

  return (
    <LinkButton
      href="/cart"
      rounded
      variant="contained"
    >
      КОРЗИНА | {totalCount}
    </LinkButton>
  );
};
