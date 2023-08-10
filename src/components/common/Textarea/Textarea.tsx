'use client';

import React, { ComponentProps, forwardRef, useState } from 'react';

import { getClassNames } from '@/utils';

import s from './Textarea.module.scss';

interface TextareaProps extends ComponentProps<'textarea'> {
  className?: string
  maxLength?: number
  resize: 'noResize' | 'x' | 'y'
  otherProps?: ComponentProps<'textarea'>
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
     className, maxLength, resize, onChange, ...otherProps
   }, ref) => {
    const [value, setValue] = useState<string>('');
    const labelClassName = getClassNames(s.label, className);
    const textareaClassName = getClassNames(s.textarea, s[resize]);

    return (
      <label className={labelClassName}>
        {maxLength && <span className={s.textareaLength}>{value.length} / {maxLength}</span>}
        <textarea
          {...otherProps}
          ref={ref}
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
  },
);

export default Textarea;
