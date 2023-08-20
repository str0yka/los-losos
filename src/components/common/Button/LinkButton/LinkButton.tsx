import Link from 'next/link';
import React from 'react';

import { Button, ButtonProps } from '..';

interface LinkButtonProps extends ButtonProps {
  href: string
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, ...buttonProps }) => (
  <Link
    href={!buttonProps.disabled ? href : ''}
  >
    <Button {...buttonProps}>{buttonProps.children}</Button>
  </Link>
);
