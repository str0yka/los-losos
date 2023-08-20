import React from 'react';

import s from './Loading.module.scss';

export const Loading = () => (
  <img
    className={s.loading}
    src="./images/mini-logo.png"
    alt="mini-logo"
  />
);
