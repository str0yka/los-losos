import React from 'react';

import { getClassName } from '~utils/helpers';

import s from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  width: 'narrow' | 'medium' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({ children, width = 'wide' }) => (
  <div className={getClassName(s.container, s[width])}>
    {children}
  </div>
);
