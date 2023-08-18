'use client';

import React from 'react';

import { getClassName } from '~utils/helpers';

import { useProgressLine } from './hooks';
import s from './ProgressLine.module.scss';
import ProgressLineButton from './ProgressLineItem/ProgressLineItem';
import ProgressLineSkeleton from './ProgressLineSkeleton/ProgressLineSkeleton';

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
  const progressLineClassName = getClassName(s.header, className);
  const lineClassName = (currentOrPrevious: boolean) => getClassName({
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
