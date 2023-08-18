'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import { Container } from '~ui';

import s from './HomeHeader.module.scss';
import { useSlider } from './hooks/useSlider';
import ToCartButton from './ToCartButton/ToCartButton';

interface HomeHeaderProps {
  categories: ProductGetAllResponse;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ categories }) => {
  const list = useSlider();
  const logo = useRef<null | HTMLImageElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!list.current || !logo.current) return;

      if (list.current.getBoundingClientRect().top > 5) {
        logo.current.classList.remove(s.pinned);
      } else {
        logo.current.classList.add(s.pinned);
      }
    });
  }, []);

  return (
    <div className={s.headerWrapper}>
      <Container width="wide">
        <div className={s.header}>
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              ref={logo}
              className={s.logo}
              src="./images/mini-logo.png"
              alt="mini-logo"
            />
          </Link>
          <ul ref={list} className={s.categoryList}>
            {categories.map((category) => (
              <li // TODO: ul -> li -> button
                key={category.title}
              >
                <button
                  className={s.categoryItem}
                  onClick={() => window.scrollTo({
                    top: document.getElementById(category.title)?.offsetTop,
                    behavior: 'smooth',
                  })}
                >
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
          <div className={s.info}>
            <Link href="/">Доставка и оплата</Link>
            <ToCartButton />
          </div>
        </div>
      </Container>
    </div>
  );
};
