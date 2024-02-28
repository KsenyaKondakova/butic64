import Link from 'next/link';
import React from 'react';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__link}>
        <Link href={'/stars'}>Звезды</Link>
        <Link href={'/lifestyle'}>Стиль жизни</Link>
        <Link href={'/beauty'}>Beauty</Link>
        <Link href={'/fashion'}>Fashion</Link>
        <Link href={'/contacts'}>Контакты</Link>
      </div>
      <span className={styles.footer__copy}>&copy; Butic64, 2024</span>
    </footer>
  );
};
