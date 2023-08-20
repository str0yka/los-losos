import React from 'react';

import { getClassName } from '~utils/helpers';

import s from './Typography.module.scss';

type TypographyComponents =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'p'
  | 'a';

interface TypographyProps<T extends TypographyComponents> {
  component: T;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'body6'
    | 'body7',
  weight?: 'light' | 'normal' | 'bold';
}

export const Typography = <T extends TypographyComponents>({
  component,
  variant = 'body4',
  weight = 'normal',
  children,
  ...componentProps
}: TypographyProps<T> & React.ComponentProps<T>) => (
  React.createElement(
    component,
    {
      ...componentProps,
      className: getClassName(
        s[variant],
        s[weight],
        componentProps.className,
      ),
    },
    children,
));
