'use client';

import React from 'react';

import { useAppDispatch } from '~hooks';
import { open } from '~store';
import { VisuallyHidden } from '~ui';
import { getClassName } from '~utils/helpers';

import s from './OpenMenuButton.module.scss';

interface OpenMenuButtonProps extends Omit<React.ComponentProps<'button'>, 'onClick'> {}

export const OpenMenuButton: React.FC<OpenMenuButtonProps> = ({ ...buttonProps }) => {
  const dispatch = useAppDispatch();

  const onOpenMenu = () => dispatch(open());

  return (
    <button
      {...buttonProps}
      className={getClassName(s.openMenuButton, buttonProps?.className)}
      onClick={onOpenMenu}
    >
      <div />
      <VisuallyHidden>открыть меню</VisuallyHidden>
    </button>
  );
};
