'use client';

import classNames from 'classnames';
import React, { ComponentProps, useState } from 'react';

import s from './Textarea.module.scss';

interface TextareaProps extends ComponentProps<'textarea'> {
  className?: string
  maxLength?: number
  resize: 'none' | 'x' | 'y'
  otherProps?: ComponentProps<'textarea'>
}

const Textarea: React.FC<TextareaProps> = ({
 className, maxLength, resize, onChange, ...otherProps
}) => {
  const [value, setValue] = useState<string>('');
  const labelClassName = classNames(s.label, className);
  const textareaClassName = classNames({
    [s.textarea]: true,
    [s.x]: resize === 'x',
    [s.y]: resize === 'y',
    [s.noResize]: resize === 'none',
  });

  return (
    <label className={labelClassName}>
      {maxLength && <span className={s.textareaLength}>{value.length} / {maxLength}</span>}
      <textarea
        {...otherProps}
        className={textareaClassName}
        maxLength={maxLength}
        value={value}
        onChange={(event) => {
          if (onChange) {
            onChange(event);
          }
          setValue(event.target.value);
        }}
      />
    </label>
  );
};

export default Textarea;
