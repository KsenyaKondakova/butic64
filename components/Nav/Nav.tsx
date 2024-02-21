import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';

import styles from './Nav.module.scss';

function Nav() {
  const router: NextRouter = useRouter();
  const pathname: string = router.pathname || '';

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href={'/'}>
          <h1 className={styles.header__title}>БУТИК64</h1>
        </Link>
        <nav className={styles.nav}>
          <Link href={'/stars'}>Звезды</Link>
          <Link href={'/lifestyle'}>Стиль жизни</Link>
          <Link href={'/beauty'}>Beauty</Link>
          <Link href={'/fashion'}>Fashion</Link>
          <Link href={'/contacts'}>Контакты</Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
