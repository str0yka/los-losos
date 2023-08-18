import React from 'react';

import { getClassName } from '~utils/helpers';

import { ArrowIcon } from '../../icons/ArrowIcon';
import s from './ArrowButton.module.scss';

interface ArrowButtonProps extends React.ComponentProps<'button'> {
  size: 'small' | 'medium' | 'large';
  direction: 'left' | 'right';
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, size, ...otherProps }) => (
  <button
    {...otherProps}
    className={getClassName(
      otherProps.className,
      s.button,
      s[direction],
      s[size],
  )}
  >
    <ArrowIcon />
  </button>
);
