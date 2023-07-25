import classes from 'classnames';
import React from 'react';

import s from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  const skeletonClassName = classes(s.skeleton, className);

  return <div className={skeletonClassName} />;
};

export default Skeleton;
