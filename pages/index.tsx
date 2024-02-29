import { convertISOToCustomFormat } from '@/utils/date';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Afisha from '@/components/Afisha/Afisha';
import Banner from '@/components/Banner/Banner';
import { Footer } from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
import { Modal } from '@/components/Modal/Modal';
import Nav from '@/components/Nav/Nav';
import News from '@/components/News/News';
import Slider from '@/components/Slider/Slider';

import { setAfisha, setMergeAfisha } from '@/redux/slices/afishaSlice';
import { setMergeNews, setNews } from '@/redux/slices/newsSlice';
import { setPlaces } from '@/redux/slices/placeSlice';
import { RootState } from '@/redux/store';

export default function Home() {
  const dispatch = useDispatch();

  const places = useSelector((state: RootState) => state.placeSlice.places);
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
  const [modalActive, setModalActive] = useState<boolean>(false);
  const modalNews = useSelector(
    (state: RootState) => state.newsSlice.modalNews,
  );
  const modalAfisha = useSelector(
    (state: RootState) => state.afishaSlice.modalAfisha,
  );
  const [modalNewsOrImage, setModalNewsOrImage] = useState<boolean>(false);
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
  }, []);

  useEffect(() => {
    dispatch(setMergeNews({ placesNews, mainNews }));
  }, [placesNews, mainNews]);
  useEffect(() => {
    dispatch(setMergeAfisha({ placesAfisha, mainAfisha }));
  }, [placesAfisha, mainAfisha]);
  console.log(mergeNews);
  return (
    <>
      <Nav />
      <Layout>
        <div className="main__page__container__index">
          <News
            news={mergeNews}
            title={'Новости города'}
            setModalActive={setModalActive}
            setModalNewsOrImage={setModalNewsOrImage}
          />
          <div className="gallery">
            {places.map((place, index) => {
              if (place.images && place.images.length > 0) {
                return (
                  <div key={place._id} className="gallery__container">
                    <Slider
                      key={index}
                      images={place.images}
                      sliderIndex={index}
                    />
                    <div className="gallery__container__text">
                      <Link href={`/place/${place._id}`}>{place.title}</Link>
                      {place.dateImages !== 'NaN.NaN.NaN' ? (
                        <span>{place.dateImages}</span>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <Afisha
            afisha={mergeAfisha}
            title={'Афиша города'}
            setModalActive={setModalActive}
            setModalNewsOrImage={setModalNewsOrImage}
          />
        </div>
        <Footer />
        <Modal modalActive={modalActive} setModalActive={setModalActive}>
          {modalNewsOrImage ? (
            <>
              <span className="modal__newsName">{modalNews.newsName}</span>
              <p
                className="modal__newsText"
                dangerouslySetInnerHTML={{
                  __html: modalNews.newsText
                    .split('\n') // Разбиваем текст по символу новой строки
                    .map((line) => `<span>${line}</span>`) // Оборачиваем каждую строку в тег <span>
                    .join('<br>'), // Объединяем строки с использованием тега <br>
                }}
              />
              <span className="modal__newsDate">
                {convertISOToCustomFormat(modalNews.date)}
              </span>
            </>
          ) : (
            <img className="modal__afisha" src={modalAfisha.image} alt="f" />
          )}
        </Modal>
      </Layout>
    </>
  );
}
