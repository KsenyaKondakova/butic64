import {
  useBeautyCategoriesFetch,
  useFashionCategoriesFetch,
  useLyfeStyleCategoriesFetch,
  useStarsFetch,
} from '@/hooks/useDataFetching';
import {
  useBeautyCategories,
  useFashionCategories,
  useLifeStyleCategories,
  usePlacesData,
  useStarsData,
} from '@/hooks/useReduxSelectors';
import { convertMonthToString } from '@/utils/date';
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
  const stars = useStarsData();
  const [starsActive, setStarsActive] = useState<boolean>(false);
  const [beautyActive, setBeautyActive] = useState<boolean>(false);
  const [fashionActive, setFashionActive] = useState<boolean>(false);
  const [lifeStyleActive, setLifeStyleActive] = useState<boolean>(false);
  const currentMonth = new Date().getMonth() + 1;

  useStarsFetch();
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href={'/'} className={styles.title__link}>
          <h1 className={styles.header__title}>БУТИК64</h1>
          <span className={styles.header__subtitle}>СВЕТСКИЙ ПОРТАЛ</span>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.topmenu}>
            <li>
              <span>Звезды</span>
              <ul className={styles.submenu}>
                {stars.map((obj, index) => {
                  if (obj.orderStar === '1') {
                    return (
                      <li key={obj._id}>
                        <Link href={'/stars/' + obj._id}>
                          {'Звезда' +
                            ' ' +
                            convertMonthToString(String(currentMonth - 1)) +
                            ' ' +
                            obj.name +
                            ' ' +
                            obj.secondName}
                        </Link>
                      </li>
                    );
                  } else if (obj.orderStar === '2') {
                    return (
                      <li key={obj._id}>
                        <Link href={'/stars/' + obj._id}>
                          {'Звезда' +
                            ' ' +
                            convertMonthToString(String(currentMonth)) +
                            ' ' +
                            obj.name +
                            ' ' +
                            obj.secondName}
                        </Link>
                      </li>
                    );
                  } else if (obj.orderStar === '3') {
                    return (
                      <li key={obj._id}>
                        <span>
                          {'Звезда' +
                            ' ' +
                            convertMonthToString(String(currentMonth + 1)) +
                            ' ' +
                            obj.name +
                            ' ' +
                            obj.secondName}
                        </span>
                      </li>
                    );
                  }
                })}
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
                        <Link href={'/fashion/' + item._id}>{item.name}</Link>
                      </li>
                    )
                  );
                })}
              </ul>
            </li>
            <li>
              <Link href={'/contacts'}>Контакты</Link>
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
            <ul className={styles.topmenu__mobile}>
              <li>
                <span onClick={() => setStarsActive(!starsActive)}>Звезды</span>
                <ul
                  className={`${styles.submenu__mobile} ${starsActive ? styles.active : ''}`}
                >
                  {stars.map((obj, index) => {
                    if (obj.orderStar === '1') {
                      return (
                        <li key={obj._id}>
                          <Link href={'/stars/' + obj._id}>
                            {'Звезда' +
                              ' ' +
                              convertMonthToString(String(currentMonth - 1)) +
                              ' ' +
                              obj.name +
                              ' ' +
                              obj.secondName}
                          </Link>
                        </li>
                      );
                    } else if (obj.orderStar === '2') {
                      return (
                        <li key={obj._id}>
                          <Link href={'/stars/' + obj._id}>
                            {'Звезда' +
                              ' ' +
                              convertMonthToString(String(currentMonth)) +
                              ' ' +
                              obj.name +
                              ' ' +
                              obj.secondName}
                          </Link>
                        </li>
                      );
                    } else if (obj.orderStar === '3') {
                      return (
                        <li key={obj._id}>
                          <span>
                            {'Звезда' +
                              ' ' +
                              convertMonthToString(String(currentMonth + 1)) +
                              ' ' +
                              obj.name +
                              ' ' +
                              obj.secondName}
                          </span>
                        </li>
                      );
                    }
                  })}
                </ul>
              </li>
              <li>
                <span onClick={() => setLifeStyleActive(!lifeStyleActive)}>
                  Стиль жизни
                </span>
                <ul
                  className={`${styles.submenu__mobile} ${lifeStyleActive ? styles.active : ''}`}
                >
                  <li>
                    <Link href={'/lifestyle/'}>Все заведения</Link>
                  </li>
                  {lifeStyleCategories.map((item, index) => {
                    return (
                      places.find((obj) => obj.category === item._id) && (
                        <li key={index}>
                          <Link href={'/lifestyle/' + item._id}>
                            {item.name}
                          </Link>
                        </li>
                      )
                    );
                  })}
                </ul>
              </li>
              <li>
                <span
                  className={styles.down__mobile}
                  onClick={() => setBeautyActive(!beautyActive)}
                >
                  Beauty
                </span>
                <ul
                  className={`${styles.submenu__mobile} ${beautyActive ? styles.active : ''}`}
                >
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
                <span
                  className={styles.down__mobile}
                  onClick={() => setFashionActive(!fashionActive)}
                >
                  Fashion
                </span>
                <ul
                  className={`${styles.submenu__mobile} ${fashionActive ? styles.active : ''}`}
                >
                  <li>
                    <Link href={'/fashion/'}>Все заведения</Link>
                  </li>
                  {fashionCategories.map((item, index) => {
                    return (
                      places.find((obj) => obj.category === item._id) && (
                        <li key={index}>
                          <Link href={'/fashion/' + item._id}>{item.name}</Link>
                        </li>
                      )
                    );
                  })}
                </ul>
              </li>
              <li>
                <Link href={'/contacts'}>Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
