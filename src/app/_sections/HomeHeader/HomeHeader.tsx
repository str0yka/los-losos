'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import { Container, Typography } from '~ui';

import { ToCartButton } from './components';
import s from './HomeHeader.module.scss';
import { useSlider } from './hooks';

interface HomeHeaderProps {
  categories: ProductGetAllResponse;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ categories }) => {
  const listRef = useSlider();
  const logoRef = useRef<null | HTMLImageElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const logo = logoRef.current;

    if (list && logo) {
      const toggleLogo = () => {
        if (list.getBoundingClientRect().top > 5) {
          logo.classList.remove(s.pinned);
        } else {
          logo.classList.add(s.pinned);
        }
      };

      toggleLogo();
      window.addEventListener('scroll', toggleLogo);

      return () => {
        window.removeEventListener('scroll', toggleLogo);
      };
    }
  }, []);

  return (
    <section className={s.headerWrapper}>
      <Container width="wide">
        <div className={s.header}>
          <Link
            href="/"
            scroll={false}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              ref={logoRef}
              className={s.logo}
              src="./images/mini-logo.png"
              alt="mini-logo"
            />
          </Link>
          <ul
            ref={listRef}
            className={s.categoryList}
          >
            {categories.map((category) => (
              <li key={category.title}>
                <button
                  className={s.categoryItem}
                  onClick={() => window.scrollTo({
                    top: document.getElementById(category.title)?.offsetTop,
                    behavior: 'smooth',
                  })}
                >
                  <Typography
                    component="span"
                    variant="body3"
                  >
                    {category.title}
                  </Typography>
                </button>
              </li>
            ))}
          </ul>
          <div className={s.info}>
            <Link
              className={s.infoLink}
              href="/"
            >
              Доставка и оплата
            </Link>
            <ToCartButton />
          </div>
        </div>
      </Container>
    </section>
  );
};
