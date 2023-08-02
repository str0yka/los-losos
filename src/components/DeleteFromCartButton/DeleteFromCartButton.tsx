'use client';

import React from 'react';

import { useAccessToken } from '@/hooks/useAccessToken';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchDeleteAllFromCart, fetchDeleteOneFromCart } from '@/store/slices/cartSlices';
import { getClassNames } from '@/utils';

import s from './DeleteFromCartButton.module.scss';

interface DeleteFromCartButtonProps {
  id?: number;
  className?: string;
}

const DeleteFromCartButton: React.FC<DeleteFromCartButtonProps> = ({
  id,
  className,
}) => {
  const dispatch = useAppDispatch();
  const accessToken = useAccessToken();

  const onDeleteFromCart = () => {
    if (id) {
      dispatch(fetchDeleteOneFromCart({ accessToken, id }));
    } else {
      const wantDelete = confirm(
        'Вы действительно хотите удалить все товары из корзины?', // TODO: кастомный confirm
      );
      if (!wantDelete) return;
      dispatch(fetchDeleteAllFromCart(accessToken));
    }
  };

  const buttonClassName = getClassNames(s.button, className);

  return (
    <button className={buttonClassName} onClick={onDeleteFromCart} type="button">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_198)">
          <path
            id="Vector"
            d="M2.5 1C2.23478 1 1.98043 1.10536 1.79289 1.29289C1.60536 1.48043 1.5 1.73478 1.5 2V3C1.5 3.26522 1.60536 3.51957 1.79289 3.70711C1.98043 3.89464 2.23478 4 2.5 4H3V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H11C11.5304 15 12.0391 14.7893 12.4142 14.4142C12.7893 14.0391 13 13.5304 13 13V4H13.5C13.7652 4 14.0196 3.89464 14.2071 3.70711C14.3946 3.51957 14.5 3.26522 14.5 3V2C14.5 1.73478 14.3946 1.48043 14.2071 1.29289C14.0196 1.10536 13.7652 1 13.5 1H10C10 0.734784 9.89464 0.48043 9.70711 0.292893C9.51957 0.105357 9.26522 0 9 0L7 0C6.73478 0 6.48043 0.105357 6.29289 0.292893C6.10536 0.48043 6 0.734784 6 1H2.5ZM5.5 5C5.63261 5 5.75979 5.05268 5.85355 5.14645C5.94732 5.24021 6 5.36739 6 5.5V12.5C6 12.6326 5.94732 12.7598 5.85355 12.8536C5.75979 12.9473 5.63261 13 5.5 13C5.36739 13 5.24021 12.9473 5.14645 12.8536C5.05268 12.7598 5 12.6326 5 12.5V5.5C5 5.36739 5.05268 5.24021 5.14645 5.14645C5.24021 5.05268 5.36739 5 5.5 5ZM8 5C8.13261 5 8.25979 5.05268 8.35355 5.14645C8.44732 5.24021 8.5 5.36739 8.5 5.5V12.5C8.5 12.6326 8.44732 12.7598 8.35355 12.8536C8.25979 12.9473 8.13261 13 8 13C7.86739 13 7.74021 12.9473 7.64645 12.8536C7.55268 12.7598 7.5 12.6326 7.5 12.5V5.5C7.5 5.36739 7.55268 5.24021 7.64645 5.14645C7.74021 5.05268 7.86739 5 8 5ZM11 5.5V12.5C11 12.6326 10.9473 12.7598 10.8536 12.8536C10.7598 12.9473 10.6326 13 10.5 13C10.3674 13 10.2402 12.9473 10.1464 12.8536C10.0527 12.7598 10 12.6326 10 12.5V5.5C10 5.36739 10.0527 5.24021 10.1464 5.14645C10.2402 5.05268 10.3674 5 10.5 5C10.6326 5 10.7598 5.05268 10.8536 5.14645C10.9473 5.24021 11 5.36739 11 5.5Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_198">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="visually-hidden">Удалить все товары из корзины</span>
    </button>
  );
};

export default DeleteFromCartButton;
