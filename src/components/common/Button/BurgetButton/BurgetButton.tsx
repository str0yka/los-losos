import React from 'react';

import { getClassName } from '~utils/helpers';

import s from './BurgetButton.module.scss';

interface BurgetButtonProps extends React.ComponentProps<'button'> {}

export const BurgetButton: React.FC<BurgetButtonProps> = ({ ...butonProps }) => (
  <button className={getClassName(s.burger, butonProps?.className)}>
    <div />
  </button>
);

export default BurgetButton;
