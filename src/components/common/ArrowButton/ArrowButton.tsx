import Link from 'next/link';
import React, { ComponentProps } from 'react';

import { getClassNames } from '@/utils';

import s from './ArrowButton.module.scss';

interface ArrowButtonProps extends ComponentProps<'button'> {
  direction: 'left' | 'right';
  href?: string; // TODO: href у кнопки со стрелочкой?
  className?: string // TODO: classNames не обязательный, можно не указывать явно
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ // TODO: ArrowButton должна быть в components/common/Button
 direction, href, className, ...buttonProps
}) => {
  const arrow = ( // TODO: у иконок должна быть своя директория в components/common
    <svg
      className={direction === 'right' ? s.rightDirection : undefined}
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 9C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7V9ZM0.292893 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM13 7L1 7V9L13 9V7Z"
        fill="#CCCCCC"
      />
    </svg>
  );

  return href ? (
    <Link href={href} className={className}>
      <button
        {...buttonProps}
        className={s.button}
      >
        {arrow}
      </button>
    </Link>
  ) : (
    <button
      {...buttonProps}
      className={getClassNames(s.button, className)}
    >
      {arrow}
    </button>
  );
};

export default ArrowButton;
