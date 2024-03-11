import {
  useAfishaFetch,
  useNewsFetch,
  usePlaceFetch,
  useStarsFetch,
} from '@/hooks/useDataFetching';
import {
  useMainAfisha,
  useMainNews,
  useMergeAfisha,
  useMergeNews,
  useModalAfisha,
  useModalNews,
  usePlacesAfisha,
  usePlacesNews,
  useStarsData,
  useViewStarData,
} from '@/hooks/useReduxSelectors';
import { convertISOToCustomFormat } from '@/utils/date';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Afisha from '@/components/Afisha/Afisha';
import Layout from '@/components/Layout/Layout';
import { Modal } from '@/components/Modal/Modal';
import ModalSlider from '@/components/ModalSlider/ModalSlider';
import News from '@/components/News/News';
import Slider from '@/components/Slider/Slider';

import { setMergeAfisha } from '@/redux/slices/afishaSlice';
import { setMergeNews } from '@/redux/slices/newsSlice';
import { setViewStar } from '@/redux/slices/starsSlice';

import { StarList } from '@/types/placesType';

const Stars = () => {
  const router: NextRouter = useRouter();
  const id: string | string[] | undefined = router.query.id;
  const dispatch = useDispatch();
  const stars = useStarsData();
  const placesNews = usePlacesNews();
  const placesAfisha = usePlacesAfisha();
  const mainNews = useMainNews();
  const mainAfisha = useMainAfisha();
  const mergeNews = useMergeNews();
  const mergeAfisha = useMergeAfisha();
  const modalNews = useModalNews();
  const modalAfisha = useModalAfisha();
  const viewStar = useViewStarData();
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalWindow, setModalWindow] = useState<string>('');
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndexImages, setModalIndexImages] = useState<number>(1);

  usePlaceFetch();
  useNewsFetch();
  useAfishaFetch();

  const handleClickStar = (star: StarList) => {
    dispatch(setViewStar(star));
  };
  useEffect(() => {
    dispatch(setMergeNews({ placesNews, mainNews }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placesNews, mainNews]);
  useEffect(() => {
    dispatch(setMergeAfisha({ placesAfisha, mainAfisha }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placesAfisha, mainAfisha]);
  useEffect(() => {
    if (!id) {
      return;
    }
    console.log(id);
    const starId = Array.isArray(id) ? id[0] : id;
    axios.get('/api/stars?id=' + starId).then((response) => {
      dispatch(setViewStar(response.data));
    });
  }, [id]);
  return (
    <Layout>
      <News
        news={mergeNews}
        title={'Новости города'}
        setModalActive={setModalActive}
        setModalWindow={setModalWindow}
      />

      <article className="stars">
        {viewStar && (
          <>
            <h2 className="stars__title">
              {viewStar.name}&nbsp;
              {viewStar.secondName}
            </h2>
            <Slider
              images={viewStar.images ? viewStar.images : []}
              sliderIndex={1}
            />
            <div className="stars__text__container">
              {viewStar.description && (
                <p
                  className="stars__text"
                  dangerouslySetInnerHTML={{
                    __html: viewStar.description
                      .split('\n')
                      .map((line) => `<span>${line}</span>`)
                      .join('<br>'),
                  }}
                />
              )}
              {viewStar.subdescription && (
                <p
                  className="stars__text"
                  dangerouslySetInnerHTML={{
                    __html: viewStar.subdescription
                      .split('\n')
                      .map((line) => `<span>${line}</span>`)
                      .join('<br>'),
                  }}
                />
              )}
            </div>
            <div className="stars__list">
              {stars.map((obj, index) => {
                return index === 2 ? (
                  <div key={obj._id} className="stars__list__item__div">
                    <div className="stars__list__item__container">
                      {obj.images && (
                        <img
                          src={obj.images[0]}
                          alt={obj.name}
                          className="stars__list__item__img"
                        />
                      )}
                    </div>

                    <p className="stars__list__item__name">
                      <span>{obj.name}</span>&nbsp;{' '}
                      <span>{obj.secondName}</span>
                    </p>
                  </div>
                ) : (
                  <Link
                    key={obj._id}
                    className="stars__list__item"
                    href={'/stars/' + obj._id}
                  >
                    <div className="stars__list__item__container">
                      {obj.images && (
                        <img
                          src={obj.images[0]}
                          alt={obj.name}
                          className="stars__list__item__img"
                        />
                      )}
                    </div>

                    <p className="stars__list__item__name">
                      <span>{obj.name}</span>&nbsp;{' '}
                      <span>{obj.secondName}</span>
                    </p>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </article>

      <Afisha
        afisha={mergeAfisha}
        title={'Афиша города'}
        setModalActive={setModalActive}
        setModalWindow={setModalWindow}
      />

      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        {modalWindow === 'news' && (
          <>
            <span className="modal__newsName">{modalNews.newsName}</span>
            <p
              className="modal__newsText"
              dangerouslySetInnerHTML={{
                __html: modalNews.newsText
                  .split('\n')
                  .map((line, index) => `<span key=${index}>${line}</span>`)
                  .join('<br>'),
              }}
            />
            <span className="modal__newsDate">
              {convertISOToCustomFormat(modalNews.date)}
            </span>
          </>
        )}
        {modalWindow === 'afisha' && (
          <img className="modal__afisha" src={modalAfisha.image} alt="f" />
        )}
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

export default Stars;
