'use client';

import React from 'react';

import { getClassName } from '~utils/helpers';

import { ProgressLineItem, ProgressLineSkeleton } from './components';
import { useProgressLine } from './hooks';
import s from './ProgressLine.module.scss';

interface ProgressLineProps {
  progress: { path: string; name: string }[];
  className?: string
}

export const ProgressLine: React.FC<ProgressLineProps> = ({ progress, className }) => {
  const progressItems = useProgressLine(progress);

  if (!progressItems) return <ProgressLineSkeleton length={progress.length} />;

  return (
    <div className={getClassName(s.progressLine, className)}>
      {progressItems?.map((progressItem, index) => (
        <React.Fragment key={progressItem.path}>
          {!!index && (
            <div className={getClassName({
                [s.line]: true,
                [s.previous]: progressItem.currentOrPrevious,
              })}
            />
          )}
          <ProgressLineItem progress={progressItem} />
        </React.Fragment>
      ))}
    </div>
  );
};
