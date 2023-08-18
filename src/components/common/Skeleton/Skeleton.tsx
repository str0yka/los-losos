import React from 'react';

import { getClassName } from '~utils/helpers';

import s from './Skeleton.module.scss';

interface SkeletonProps extends React.ComponentProps<'div'> {}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => (
  <div className={getClassName(s.skeleton, className)} />
);
