import { usePlaceFetch } from '@/hooks/useDataFetching';
import { useLifeStyleCategories } from '@/hooks/useReduxSelectors';
import axios from 'axios';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AfishaCard } from '@/components/AfishaCard/AfishaCard';
import Layout from '@/components/Layout/Layout';
import { Modal } from '@/components/Modal/Modal';
import ModalSlider from '@/components/ModalSlider/ModalSlider';
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

  const id: string | string[] | undefined = router.query.id;
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalWindow, setModalWindow] = useState<string>('');
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndexImages, setModalIndexImages] = useState<number>(1);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/getPlace?id=' + id).then((response) => {
      dispatch(setPlaceInfoLifeStyle(response.data));
    });
  }, [id]);
  usePlaceFetch();
  return (
    <Layout title={`Бутик 64 ${placeInfo.title}`} description="" keywords="">
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
                .split('\n')
                .map((line) => `<span>${line}</span>`)
                .join('<br>'),
            }}
          />
          <div className="gallery__place">
            {placeInfo?.images && placeInfo.images.length !== 0 && (
              <Slider
                images={placeInfo.images}
                sliderIndex={1}
                setModalActive={setModalActive}
                setModalWindow={setModalWindow}
                setModalImages={setModalImages}
                setModalIndexImages={setModalIndexImages}
              />
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
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        {modalWindow === 'slider' && (
          <ModalSlider
            images={modalImages}
            sliderIndex={11}
            modalIndexImages={modalIndexImages}
          />
        )}
      </Modal>
    </Layout>
  );
};

export default ViewPlace;
