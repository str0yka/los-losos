import React from 'react';

import ArrowButton from '@/components/common/ArrowButton/ArrowButton';

import s from './TitleBlock.module.scss';

interface TitleBlockProps {
  title: string;
  backTo: string; // TODO: string || () => navigate.push(-1)
  rightSide?: React.ReactNode;
}

const TitleBlock: React.FC<TitleBlockProps> = ({
  title,
  backTo,
  rightSide,
}) => (
  <div className={s.titleBlock}>
    <div className={s.title}>
      <ArrowButton
        direction="left"
        href={backTo}
      />
      <h1>{title}</h1>
    </div>
    {rightSide}
  </div>
);

TitleBlock.defaultProps = { rightSide: undefined };

export default TitleBlock;
