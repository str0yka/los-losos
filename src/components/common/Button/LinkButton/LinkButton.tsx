import Link from 'next/link';
import React from 'react';

import { Button, ButtonProps } from '../Button/Button';

interface LinkButtonProps extends ButtonProps {
  href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, disabled, ...buttonProps }) => (
  <>
    {!disabled && (
      <Link href={href}>
        <Button {...buttonProps}>{buttonProps.children}</Button>
      </Link>
    )}
    {disabled && (
      <Button
        {...buttonProps}
        disabled
      >
        {buttonProps.children}
      </Button>
    )}
  </>
);
