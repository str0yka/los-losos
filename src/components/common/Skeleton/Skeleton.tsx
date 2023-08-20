import React from 'react';

import { getClassName } from '~utils/helpers';

import s from './Skeleton.module.scss';

interface SkeletonProps extends React.ComponentProps<'div'> {
  w?: string;
  h?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, w, h }) => {
  const style: React.CSSProperties = {};
  if (w) style.width = w;
  if (h) style.height = h;

  return (
    <div
      className={getClassName(s.skeleton, className)}
      style={style}
    />
  );
};
