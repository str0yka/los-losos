import React, { ComponentProps, forwardRef } from 'react';

import VisuallyHidden from '@/components/common/VisuallyHidden/VisuallyHidden';

import s from './Input.module.scss';

interface InputProps extends ComponentProps<'input'> {
  variant?: 'default' | 'phone';
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'default',
  ...otherProps
}, ref) => (
  <label className={s.label}>
    {variant === 'phone' ? (
      <>
        <span>+7 &nbsp;|&nbsp; </span>
        <input
          {...otherProps}
          ref={ref}
          className={s.input}
        />
      </>
    ) : (
      <input
        {...otherProps}
        ref={ref}
        className={s.input}
      />
    )}
    <VisuallyHidden>Поле для ввода</VisuallyHidden>
  </label>
));

export default Input;
