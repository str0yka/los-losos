'use client';

import React, { useRef } from 'react';

import { getClassName } from '~utils/helpers';

import { ArrowButton } from '../Button/ArrowButton/ArrowButton';
import s from './Slider.module.scss';

interface SliderProps {
  className?: string
  items: React.ReactNode[]
}

export const Slider: React.FC<SliderProps> = ({ className, items }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (direction: 'back' | 'forward') => {
    if (!sliderRef.current) throw new Error('sliderRef unannounced');

    const {
      offsetWidth,
      scrollWidth,
      scrollLeft,
    } = sliderRef.current;
    const nextPos = scrollLeft + (direction === 'forward' ? offsetWidth : -offsetWidth);

    sliderRef.current.scrollLeft = Math.min(scrollWidth, Math.max(0, nextPos));
  };

  return (
    <section className={getClassName(s.sliderContainer, className)}>
      <ArrowButton
        size="large"
        direction="left"
        className={getClassName(s.arrowButton, s.leftButton)}
        onClick={() => slide('back')}
      />
      <ArrowButton
        size="large"
        direction="right"
        className={getClassName(s.arrowButton, s.rightButton)}
        onClick={() => slide('forward')}
      />
      <div
        ref={sliderRef}
        className={s.slider}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={s.sliderItem}
          >
            {item}
          </div>
          ))}
      </div>
    </section>
  );
};
