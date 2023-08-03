import React, { ComponentProps } from 'react';

import VisuallyHidden from '@/components/common/VisuallyHidden/VisuallyHidden';

import s from './Input.module.scss';

interface InputProps extends ComponentProps<'input'> {
  variant?: 'default' | 'phone';
  otherProps?: ComponentProps<'input'>;
}

const Input: React.FC<InputProps> = ({
  variant = 'default',
  ...otherProps
}) => (
  <label className={s.label}>
    {variant === 'phone' ? (
      <>
        <span>+7 &nbsp;|&nbsp; </span>
        <input {...otherProps} className={s.input} />
      </>
    ) : (
      <input {...otherProps} className={s.input} />

    )}
    <VisuallyHidden>Поле для ввода</VisuallyHidden>
  </label>
);

export default Input;
