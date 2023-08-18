'use client';

import Link from 'next/link';
import React from 'react';

import { useTotalCount } from '~hooks';
import { Button } from '~ui';

const ToCartButton = () => {
  const totalCount = useTotalCount();

  return (
    <Link href="/cart">
      <Button
        rounded
        variant="contained"
      >
        Корзина | {totalCount}
      </Button>
    </Link>
  );
};

export default ToCartButton;
