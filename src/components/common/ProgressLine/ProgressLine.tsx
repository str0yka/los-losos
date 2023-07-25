'use client';

import classes from 'classnames';
import React from 'react';

import ProgressLineButton from '@/components/common/ProgressLine/ProgressLineItem/ProgressLineItem';
import ProgressLineSkeleton from '@/components/common/ProgressLine/ProgressLineSkeleton/ProgressLineSkeleton';

import { useProgressLine } from './hooks';
import s from './ProgressLine.module.scss';

export interface ProgressProps {
  path: string;
  name: string;
  currentOrPrevious: boolean;
}

interface ProgressLineProps {
  progress: { path: string; name: string }[];
  className?: string
}

const ProgressLine: React.FC<ProgressLineProps> = ({ progress, className }) => {
  const progressItems = useProgressLine(progress);
  const progressLineClassName = classes(s.header, className);
  const lineClassName = (currentOrPrevious: boolean) => classes({
    [s.line]: true,
    [s.previous]: currentOrPrevious,
  });

  if (!progressItems) return <ProgressLineSkeleton length={progress.length} />;

  return (
    <div className={progressLineClassName}>
      {progressItems?.map((progressItem, index) => (
        <React.Fragment key={progressItem.path}>
          {!!index && (
            <div
              className={lineClassName(progressItem.currentOrPrevious)}
            />
          )}
          <ProgressLineButton progress={progressItem} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressLine;
