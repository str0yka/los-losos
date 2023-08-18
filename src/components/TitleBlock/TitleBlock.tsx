import Link from 'next/link';
import React from 'react';

import { ArrowButton } from '~ui';

import s from './TitleBlock.module.scss';

interface TitleBlockProps {
  title: string;
  backTo: string; // TODO: string || () => navigate.push(-1)
  rightSide?: React.ReactNode;
}

export const TitleBlock: React.FC<TitleBlockProps> = ({
  title,
  backTo,
  rightSide,
}) => (
  <div className={s.titleBlock}>
    <div className={s.title}>
      <Link href={backTo}>
        <ArrowButton
          direction="left"
          size="large"
        />
      </Link>
      <h1>{title}</h1>
    </div>
    {rightSide}
  </div>
);
