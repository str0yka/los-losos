import React from 'react';

import { getClassNames } from '@/utils';

import s from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  const skeletonClassName = getClassNames(s.skeleton, className);

  return <div className={skeletonClassName} />;
};

export default Skeleton;
