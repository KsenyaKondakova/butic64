import React from 'react';

import styles from './Modal.module.scss';

type ModalProps = {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;

  children: React.ReactNode;
  setModalIndexImages?: React.Dispatch<React.SetStateAction<number>>;
};
export const Modal = ({
  modalActive,
  setModalActive,
  setModalIndexImages,
  children,
}: ModalProps) => {
  const closeModal = () => {
    setModalIndexImages && setModalIndexImages(1);
    setModalActive(false);
  };
  return (
    <div
      className={`${styles.modal} ${modalActive ? styles.active : ''}`}
      onClick={() => closeModal()}
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
