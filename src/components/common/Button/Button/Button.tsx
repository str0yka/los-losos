import React from 'react';

import { Skeleton } from '~ui';
import { getClassName } from '~utils/helpers';

import s from './Button.module.scss';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'contained' | 'outlined';
  textVariant?:
    | 'uppercase'
    | 'lowercase'
    | 'capitalize';
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  loading?: {
    status: boolean;
    className?: string;
  };
}

export const Button: React.FC<ButtonProps> = ({ // TODO: в этой папке сделать Skeleton Button
  variant = 'outlined',
  textVariant,
  size = 'small',
  disabled = false,
  rounded = false,
  className,
  loading,
  children,
  ...buttonProps
}) => {
  if (loading?.status) return <Skeleton className={loading.className} />;

  return (
    <button
      {...buttonProps}
      className={getClassName(
        s.button,
        className,
        s[variant],
        s[size],
        textVariant && s[textVariant],
        {
          [s.disabled]: disabled,
          [s.rounded]: rounded,
          [s.square]: !rounded,
        },
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
