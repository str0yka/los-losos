'use client';

import React, { useRef } from 'react';

import ArrowButton from '@/components/common/ArrowButton/ArrowButton';
import { getClassNames } from '@/utils';

import s from './Slider.module.scss';

interface SliderProps {
  className?: string
  items: React.ReactNode[]
}

const Slider: React.FC<SliderProps> = ({ className, items }) => {
  const sliderRef = useRef<null | HTMLDivElement>(null);

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
    <div className={getClassNames(s.sliderContainer, className)}>
      <ArrowButton
        direction="left"
        className={getClassNames(s.arrowButton, s.leftButton)}
        onClick={() => slide('back')}
      />
      <ArrowButton
        direction="right"
        className={getClassNames(s.arrowButton, s.rightButton)}
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
    </div>
  );
};

export default Slider;
