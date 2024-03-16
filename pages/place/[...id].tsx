import { usePlaceFetch } from '@/hooks/useDataFetching';
import { useLifeStyleCategories } from '@/hooks/useReduxSelectors';
import axios from 'axios';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AfishaCard } from '@/components/AfishaCard/AfishaCard';
import { Footer } from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
import Nav from '@/components/Nav/Nav';
import { NewsCard } from '@/components/NewsCard/NewsCard';
import Slider from '@/components/Slider/Slider';

import { setPlaceInfoLifeStyle } from '@/redux/slices/lifeStyle';
import { RootState } from '@/redux/store';

import styles from './Place.module.scss';

const ViewPlace = () => {
  const router: NextRouter = useRouter();
  const dispatch = useDispatch();
  const placeInfo = useSelector(
    (state: RootState) => state.lifeStyle.placeInfo,
  );
  const lifeStyleCategories = useLifeStyleCategories();
  console.log(lifeStyleCategories.find((item) => item.name === 'Психолог'));
  const id: string | string[] | undefined = router.query.id;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/getPlace?id=' + id).then((response) => {
      dispatch(setPlaceInfoLifeStyle(response.data));
      console.log(response.data);
    });
  }, [id]);
  usePlaceFetch();
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.content__title}>{placeInfo.title}</h2>

          {placeInfo.logo && placeInfo.logo[0] && (
            <div className={styles.logo__container}>
              <Image
                src={placeInfo.logo[0]}
                alt="Picture of the author"
                sizes="500px"
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          )}

          <p
            className={styles.content__text}
            dangerouslySetInnerHTML={{
              __html: placeInfo.description
                .split('\n') // Разбиваем текст по символу новой строки
                .map((line) => `<span>${line}</span>`) // Оборачиваем каждую строку в тег <span>
                .join('<br>'), // Объединяем строки с использованием тега <br>
            }}
          />
          <div className="gallery__place">
            {placeInfo?.images && placeInfo.images.length !== 0 && (
              <Slider images={placeInfo.images} sliderIndex={1} />
            )}
          </div>

          {placeInfo.news.length !== 0 && (
            <NewsCard news={placeInfo.news} title="Новости" />
          )}
          {placeInfo.afisha?.length !== 0 && (
            <AfishaCard afisha={placeInfo.afisha} title="Афиша" />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ViewPlace;
