import React from 'react';

import { Button } from '~ui';

import s from './NotFound.module.scss';

const EmptyCart = () => (
  <section className={s.page}>
    <div className={s.info}>
      <span className={s.emoji}>🧐</span>
      <h1 className={s.title}>Ой, а где это мы?</h1>
      <p className={s.subtitle}>Такой страницы не существует.</p>
    </div>
    <Button
      className={s.button}
      variant="contained"
      size="large"
    >
      Перейти в меню
    </Button>
  </section>
);

export default EmptyCart;
