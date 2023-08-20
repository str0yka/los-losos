import React from 'react';

import { LinkButton } from '~ui/Button';

interface ProgressLineItemProps {
  progress: ProgressProps;
}

export const ProgressLineItem: React.FC<ProgressLineItemProps> = ({
  progress: { path, name, currentOrPrevious },
}) => (
  <LinkButton
    href={path}
    variant="contained"
    disabled={!currentOrPrevious}
  >
    {name}
  </LinkButton>
);
