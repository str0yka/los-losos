import React from 'react';

import { TelegramIcon, VkIcon } from '~ui';

import s from './Footer.module.scss';

export const Footer = () => (
  <footer className={s.footer}>
    <img
      className={s.logo}
      src="/images/logo.png"
      alt="Лось-Лосось логотип"
    />
    <div className={s.socials}>
      <a
        className={s.social}
        href="/"
      >
        <TelegramIcon />
      </a>
      <a
        className={s.social}
        href="/"
      >
        <VkIcon />
      </a>
    </div>
  </footer>
);
