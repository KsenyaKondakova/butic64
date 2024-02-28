import axios from 'axios';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Afisha from '@/components/Afisha/Afisha';
import Cards from '@/components/Cards/Cards';
import { Footer } from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
import Nav from '@/components/Nav/Nav';
import News from '@/components/News/News';
import Slider from '@/components/Slider/Slider';

import { setAfisha, setMergeAfisha } from '@/redux/slices/afishaSlice';
import { setMergeNews, setNews } from '@/redux/slices/newsSlice';
import { setPlaces } from '@/redux/slices/placeSlice';
import { setStars, setViewStar } from '@/redux/slices/starsSlice';
import { RootState } from '@/redux/store';

import { StarList } from '@/types/placesType';

const Stars = () => {
  const dispatch = useDispatch();
  const stars = useSelector((state: RootState) => state.starsSlice.stars);
  const placesNews = useSelector((state: RootState) => state.placeSlice.news);
  const placesAfisha = useSelector(
    (state: RootState) => state.placeSlice.afisha,
  );
  const mainNews = useSelector((state: RootState) => state.newsSlice.news);
  const mainAfisha = useSelector(
    (state: RootState) => state.afishaSlice.afisha,
  );
  const mergeNews = useSelector(
    (state: RootState) => state.newsSlice.mergeNews,
  );
  const mergeAfisha = useSelector(
    (state: RootState) => state.afishaSlice.mergeAfisha,
  );
  const viewStar = useSelector((state: RootState) => state.starsSlice.viewStar);

  const handleClickStar = (star: StarList) => {
    dispatch(setViewStar(star));
  };
  useEffect(() => {
    axios.get('/api/places').then((response) => {
      dispatch(setPlaces(response.data));
    });
    axios.get('/api/news').then((response) => {
      dispatch(setNews(response.data));
    });
    axios.get('/api/afisha').then((response) => {
      dispatch(setAfisha(response.data));
    });
    axios.get('/api/stars').then((response) => {
      dispatch(setStars(response.data));
    });
  }, []);
  useEffect(() => {
    dispatch(setMergeNews({ placesNews, mainNews }));
  }, [placesNews, mainNews]);
  useEffect(() => {
    dispatch(setMergeAfisha({ placesAfisha, mainAfisha }));
  }, [placesAfisha, mainAfisha]);
  useEffect(() => {
    const mainStar = stars.filter((obj) => obj.orderStar === '2');
    console.log(mainStar);
    dispatch(setViewStar(mainStar[0]));
  }, [stars]);
  return (
    <>
      <Nav />
      <Layout>
        <div className="main__page__container__index">
          <News news={mergeNews} title={'Новости города'} />
          {viewStar && (
            <article className="stars">
              <h2 className="stars__title">
                {viewStar.name}&nbsp;
                {viewStar.secondName}
              </h2>
              <Slider
                images={viewStar.images ? viewStar.images : []}
                sliderIndex={1}
              />
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
              <div className="stars__list">
                {stars.map((obj) => (
                  <div
                    key={obj._id}
                    className="stars__list__item"
                    onClick={() => handleClickStar(obj)}
                  >
                    <div className="stars__list__item__container">
                      {obj.images && (
                        <Image
                          src={obj.images[0]}
                          alt={obj.name}
                          layout="fill"
                          objectFit="cover"
                          className="stars__list__item__img"
                        />
                      )}
                    </div>

                    <span>{obj.name}</span>
                  </div>
                ))}
              </div>
            </article>
          )}
          <Afisha afisha={mergeAfisha} title={'Афиша города'} />
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Stars;
