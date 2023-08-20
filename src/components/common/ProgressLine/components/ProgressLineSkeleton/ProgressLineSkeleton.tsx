import React from 'react';

import { Skeleton } from '~ui/Skeleton/Skeleton';

import s from './ProgressLineSkeleton.module.scss';

interface ProgressLineSkeletonProps {
  length: number;
}

export const ProgressLineSkeleton: React.FC<ProgressLineSkeletonProps> = ({ length }) => {
  const skeletonArray = new Array(length).fill(null);

  return (
    <div className={s.header}>
      {skeletonArray.map((_, index) => (
        <React.Fragment key={index}>
          {!!index && <div className={s.progressLine} />}
          <Skeleton className={s.skeleton} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressLineSkeleton;
