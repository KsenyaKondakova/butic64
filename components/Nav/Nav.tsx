import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { useState } from 'react';

import styles from './Nav.module.scss';

function Nav() {
  const router: NextRouter = useRouter();
  const pathname: string = router.pathname || '';
  const [menuActive, setMenuActive] = useState<boolean>(false);
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
      <div className={styles.header__container__mobile}>
        <div
          className={styles.menu__mobile__btn__container}
          onClick={() => setMenuActive(!menuActive)}
        >
          <div className={styles.menu__mobile__btn}>
            <span></span>
          </div>
        </div>

        <Link href={'/'} className={styles.header__title__mobile__link}>
          <h1 className={styles.header__title__mobile}>БУТИК64</h1>
        </Link>
        <div
          className={`${styles.menu__mobile} ${menuActive ? styles.active : ''}`}
        >
          <div
            className={styles.menu__mobile__blur}
            onClick={() => setMenuActive(false)}
          ></div>
          <nav className={styles.nav__mobile}>
            <Link href={'/stars'}>Звезды</Link>
            <Link href={'/lifestyle'}>Стиль жизни</Link>
            <Link href={'/beauty'}>Beauty</Link>
            <Link href={'/fashion'}>Fashion</Link>
            <Link href={'/contacts'}>Контакты</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
