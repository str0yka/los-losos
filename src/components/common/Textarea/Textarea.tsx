'use client';

import React, { useState } from 'react';

import { Typography } from '~ui/Typography/Typography';
import { getClassName } from '~utils/helpers';

import s from './Textarea.module.scss';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  maxLength?: number
  resize: 'noResize' | 'x' | 'y'
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
     className, maxLength, resize, onChange, ...otherProps
   }, ref) => {
    const [value, setValue] = useState<string>('');
    const labelClassName = getClassName(s.label, className);
    const textareaClassName = getClassName(s.textarea, s[resize]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(event);
      }
      setValue(event.target.value);
    };

    return (
      <label className={labelClassName}>
        {maxLength && (
          <Typography
            className={s.textareaLength}
            component="span"
          >
            {value.length} / {maxLength}
          </Typography>
        )}
        <textarea
          {...otherProps}
          ref={ref}
          className={textareaClassName}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  },
);
