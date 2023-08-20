import React from 'react';

import { LinkButton, Typography } from '~ui';
import { PRICE_FOR_FREE_DELIVERY } from '~utils/consts';

import s from './EmptyCart.module.scss';

export const EmptyCart = () => (
  <section className={s.page}>
    <div className={s.info}>
      <span className={s.emoji}>😞</span>
      <Typography
        component="h1"
        variant="h2"
        weight="bold"
      >
        Тут же пусто!
      </Typography>
      <Typography
        className={s.subtitle}
        component="p"
        variant="body2"
      >
        Добавьте что-нибудь в корзину.
      </Typography>
      <Typography
        className={s.subtitle}
        component="p"
        variant="body2"
      >
        Бесплатная доставка от {PRICE_FOR_FREE_DELIVERY}.
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
