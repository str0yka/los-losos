'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

const Page = () => {
  const { data, status } = useSession();
  console.log(data);

  return <div />;
};

export default Page;
