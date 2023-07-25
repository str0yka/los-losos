import React from 'react';

import s from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children }) => (
  <div className={s.wrapper}>
    <div className={s.modal}>
      {children}
    </div>
  </div>
  );

export default Modal;
