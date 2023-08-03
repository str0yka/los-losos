import React from 'react';

import s from './VisuallyHidden.module.scss';

interface VisuallyHiddenProps {
  children: React.ReactNode
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => (
  <span className={s.visuallyHidden}>{children}</span>
);

export default VisuallyHidden;
