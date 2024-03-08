import {
  useBeautyCategoriesFetch,
  useFashionCategoriesFetch,
  useLyfeStyleCategoriesFetch,
} from '@/hooks/useDataFetching';
import {
  useBeautyCategories,
  useFashionCategories,
  useLifeStyleCategories,
  usePlacesData,
} from '@/hooks/useReduxSelectors';
import axios from 'axios';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import styles from './Nav.module.scss';

function Nav() {
  const router: NextRouter = useRouter();
  const places = usePlacesData();
  const pathname: string = router.pathname || '';
  const [menuActive, setMenuActive] = useState<boolean>(false);
  useLyfeStyleCategoriesFetch();
  useFashionCategoriesFetch();
  useBeautyCategoriesFetch();
  const lifeStyleCategories = useLifeStyleCategories();
  const beautyCategories = useBeautyCategories();
  const fashionCategories = useFashionCategories();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href={'/'}>
          <h1 className={styles.header__title}>БУТИК64</h1>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.topmenu}>
            <li>
              <span>Звезды</span>
              <ul className={styles.submenu}>
                <li>
                  <Link href={'/stars'}>Все звезды</Link>
                </li>
                <li>
                  <a href="">Author</a>
                </li>
                <li>
                  <a href="">Archive</a>
                </li>
                <li>
                  <a href="">Tags</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Стиль жизни</span>
              <ul className={styles.submenu}>
                <li>
                  <Link href={'/lifestyle/'}>Все заведения</Link>
                </li>
                {lifeStyleCategories.map((item, index) => {
                  return (
                    places.find((obj) => obj.category === item._id) && (
                      <li key={index}>
                        <Link href={'/lifestyle/' + item._id}>{item.name}</Link>
                      </li>
                    )
                  );
                })}
              </ul>
            </li>
            <li>
              <span className={styles.down}>Beauty</span>
              <ul className={styles.submenu}>
                <li>
                  <Link href={'/beauty/'}>Все заведения</Link>
                </li>
                {beautyCategories.map((item, index) => {
                  return (
                    places.find((obj) => obj.category === item._id) && (
                      <li key={index}>
                        <Link href={'/beauty/' + item._id}>{item.name}</Link>
                      </li>
                    )
                  );
                })}
              </ul>
            </li>
            <li>
              <span className={styles.down}>Fashion</span>
              <ul className={styles.submenu}>
                <li>
                  <Link href={'/fashion/'}>Все заведения</Link>
                </li>
                {fashionCategories.map((item, index) => {
                  return (
                    places.find((obj) => obj.category === item._id) && (
                      <li key={index}>
                        <Link href={'/fashion' + item._id}>{item.name}</Link>
                      </li>
                    )
                  );
                })}
              </ul>
            </li>
            <li>
              <span>Контакты</span>
            </li>
          </ul>
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
