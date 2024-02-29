import React from 'react';

import styles from './Modal.module.scss';

type ModalProps = {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;

  children: React.ReactNode;
};
export const Modal = ({
  modalActive,
  setModalActive,
  children,
}: ModalProps) => {
  return (
    <div
      className={`${styles.modal} ${modalActive ? styles.active : ''}`}
      onClick={() => setModalActive(false)}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
