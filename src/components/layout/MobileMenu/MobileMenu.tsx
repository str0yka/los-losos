'use client';

import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '~hooks';
import { close, getMenu } from '~store';
import { Container, VisuallyHidden } from '~ui';
import { getClassName } from '~utils/helpers';

import s from './MobileMenu.module.scss';

export const MobileMenu = () => {
  const dispatch = useAppDispatch();
  const onCloseMenu = () => dispatch(close());
  const { isOpen } = useSelector(getMenu);

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
              <Link
                className={s.listItemLink}
                href="/cart"
              >
                Корзина
              </Link>
            </li>
            <li className={s.listItem}>
              <Link
                className={s.listItemLink}
                href="/orders"
              >
                Мои заказы
              </Link>
            </li>
            <li className={s.listItem}>
              <Link
                className={s.listItemLink}
                href="/" // TODO: /about/delivery
              >
                Доставка и оплата
              </Link>
            </li>
            <li className={s.listItem}>
              <a
                className={s.listItemLink}
                href="tel:88005553535"
              >
                Связаться с нами
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
