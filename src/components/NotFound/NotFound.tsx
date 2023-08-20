import React from 'react';

import { LinkButton, Typography } from '~ui';

import s from './NotFound.module.scss';

export const NotFound = () => (
  <section className={s.page}>
    <div className={s.info}>
      <span className={s.emoji}>🧐</span>
      <Typography
        component="h1"
        variant="h2"
        weight="bold"
      >
        Ой, а где это мы?
      </Typography>
      <Typography
        className={s.subtitle}
        component="p"
        variant="body2"
      >
        Такой страницы не существует.
      </Typography>
    </div>
    <LinkButton
      className={s.button}
      variant="contained"
      size="large"
      href="/"
    >
      Перейти в меню
    </LinkButton>
  </section>
);
