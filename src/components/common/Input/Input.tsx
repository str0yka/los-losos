import React from 'react';

import { VisuallyHidden } from '~ui/VisuallyHidden/VisuallyHidden';

import s from './Input.module.scss';

interface InputProps extends React.ComponentProps<'input'> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ // TODO: error
  ...inputProps
}, ref) => (
  <label className={s.label}>
    <input
      {...inputProps}
      ref={ref}
      className={s.input}
    />
    <VisuallyHidden>Поле для ввода</VisuallyHidden>
  </label>
));

export default Input;
