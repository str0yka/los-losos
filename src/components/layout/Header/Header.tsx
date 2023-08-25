import Link from 'next/link';
import React from 'react';

import { Container, LinkButton, Typography } from '~ui';

import { OpenMenuButton } from './components';
import s from './Header.module.scss';

export const Header = () => (
  <header>
    <Container width="wide">
      <div className={s.header}>
        <div className={s.leftSide}>
          <Link href="/">
            <img
              className={s.logo}
              src="/images/logo.png"
              alt=""
            />
          </Link>
          <div className={s.contact}>
            <Typography
              component="p"
              variant="body2"
            >
              Связаться с нами
            </Typography>
            <Typography
              component="a"
              variant="body2"
              className={s.telephone}
              href="tel:78005553535"
            >
              +7 800 555 35 35
            </Typography>
          </div>
        </div>
        <LinkButton
          className={s.profileButton}
          href="/profile"
          rounded
        >
          МОИ ЗАКАЗЫ
        </LinkButton>
        <OpenMenuButton className={s.openMenuButton} />
      </div>
    </Container>
  </header>
);
