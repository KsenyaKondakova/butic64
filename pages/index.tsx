import {
  useAfishaFetch,
  useNewsFetch,
  usePlaceFetch,
} from '@/hooks/useDataFetching';
import {
  useMainAfisha,
  useMainNews,
  useMergeAfisha,
  useMergeNews,
  useModalAfisha,
  useModalNews,
  usePlacesAfisha,
  usePlacesData,
  usePlacesNews,
} from '@/hooks/useReduxSelectors';
import { convertISOToCustomFormat } from '@/utils/date';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Afisha from '@/components/Afisha/Afisha';
import Layout from '@/components/Layout/Layout';
import { Modal } from '@/components/Modal/Modal';
import News from '@/components/News/News';
import Slider from '@/components/Slider/Slider';

import { setMergeAfisha } from '@/redux/slices/afishaSlice';
import { setMergeNews } from '@/redux/slices/newsSlice';

export default function Home() {
  const dispatch = useDispatch();
  const places = usePlacesData();
  const placesNews = usePlacesNews();
  const placesAfisha = usePlacesAfisha();
  const mainNews = useMainNews();
  const mainAfisha = useMainAfisha();
  const mergeNews = useMergeNews();
  const mergeAfisha = useMergeAfisha();
  const modalNews = useModalNews();
  const modalAfisha = useModalAfisha();
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalNewsOrImage, setModalNewsOrImage] = useState<boolean>(false);
  usePlaceFetch();
  useNewsFetch();
  useAfishaFetch();

  useEffect(() => {
    dispatch(setMergeNews({ placesNews, mainNews }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placesNews, mainNews]);
  useEffect(() => {
    dispatch(setMergeAfisha({ placesAfisha, mainAfisha }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placesAfisha, mainAfisha]);

  return (
    <Layout>
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
                <Slider key={index} images={place.images} sliderIndex={index} />
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

      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        {modalNewsOrImage ? (
          <>
            <span className="modal__newsName">{modalNews.newsName}</span>
            <p
              className="modal__newsText"
              dangerouslySetInnerHTML={{
                __html: modalNews.newsText
                  .split('\n')
                  .map((line) => `<span>${line}</span>`)
                  .join('<br>'),
              }}
            />
            <span className="modal__newsDate">
              {convertISOToCustomFormat(modalNews.date)}
            </span>
          </>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="modal__afisha" src={modalAfisha.image} alt="f" />
        )}
      </Modal>
    </Layout>
  );
}
