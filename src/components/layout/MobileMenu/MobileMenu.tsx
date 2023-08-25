'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '~hooks';
import { close, getMenu } from '~store';
import { Container, VisuallyHidden } from '~ui';
import { getClassName } from '~utils/helpers';

import s from './MobileMenu.module.scss';

export const MobileMenu = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const onCloseMenu = () => dispatch(close());
  const { isOpen } = useSelector(getMenu);

  const handleNavigate = (route: string) => {
    router.push(route);
    dispatch(close());
  };

  return (
    <div className={getClassName(s.wrapper, isOpen && s.open)}>
      <Container width="wide">
        <div className={s.menu}>
          <button
            className={s.closeMenuButton}
            onClick={onCloseMenu}
          >
            <div />
            <VisuallyHidden>закрыть меню</VisuallyHidden>
          </button>
          <ul className={s.list}>
            <li className={s.listItem}>
              <button
                className={s.listItemButton}
                onClick={() => handleNavigate('/cart')}
              >
                Корзина
              </button>
            </li>
            <li className={s.listItem}>
              <button
                className={s.listItemButton}
                onClick={() => handleNavigate('/profile')}
              >
                Мои заказы
              </button>
            </li>
            <li className={s.listItem}>
              <button
                className={s.listItemButton}
                onClick={() => handleNavigate('/')} // TODO: /about/delivery
              >
                Доставка и оплата
              </button>
            </li>
            <li className={s.listItem}>
              <a href="tel:88005553535">
                <button className={s.listItemButton}>
                  Связаться с нами
                </button>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
