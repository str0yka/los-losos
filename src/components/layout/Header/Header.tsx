import Link from 'next/link';
import React from 'react';

import BurgerMenu from '../../common/BurgerMenu/BurgerMenu';
import { Container, Button } from '~ui';

import s from './Header.module.scss';

export const Header = () => (
  <Container width="wide">
    <header className={s.header}>
      <div className={s.leftSide}>
        <Link href="/">
          <img
            src="/images/logo.png"
            alt=""
            className={s.logo}
          />
        </Link>
        <div className={s.contact}>
          <p>Связаться с нами</p>
          <a href="tel:78005553535">+7 800 555 35 35</a>
        </div>
      </div>
      <div className={s.rightSide}>
        <Button
          className={s.button}
          rounded
          href="/profile"
        >
          профиль
        </Button>
        <Button
          className={s.contactButton}
          rounded
          variant="contained"
        >
          позвони нам
        </Button>
        <BurgerMenu />
      </div>
    </header>
  </Container>
);
