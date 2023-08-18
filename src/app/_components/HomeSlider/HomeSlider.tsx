import React from 'react';

import { Slider } from '~ui';

import s from './HomeSlider.module.scss';

export const HomeSlider = () => {
  const items = [
    <h2 className={s.item}>
      чтобы
    </h2>,
    <h2 className={s.item}>
      е<span>лось</span>
    </h2>,
    <h2 className={s.item}>
      пи<span>лось</span>
    </h2>,
    <h2 className={s.item}>
      весели<span>лось</span>
    </h2>,
  ];

  return (
    <Slider items={items} />
  );
};
