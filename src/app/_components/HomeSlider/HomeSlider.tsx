import React from 'react';

import Slider from '@/components/common/Slider/Slider';

import s from './HomeSlider.module.scss';

const HomeSlider = () => {
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

export default HomeSlider;
