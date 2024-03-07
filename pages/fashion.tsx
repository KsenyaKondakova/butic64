import {
  useAfishaFetch,
  useFashionFetch,
  useNewsFetch,
  usePlaceFetch,
} from '@/hooks/useDataFetching';
import {
  useFashionCategories,
  useFashionPlacesData,
  useMainAfisha,
  useMainNews,
  useMergeAfisha,
  useMergeNews,
  useModalAfisha,
  useModalNews,
  usePlacesAfisha,
  usePlacesNews,
} from '@/hooks/useReduxSelectors';
import { convertISOToCustomFormat } from '@/utils/date';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Afisha from '@/components/Afisha/Afisha';
import Cards from '@/components/Cards/Cards';
import Layout from '@/components/Layout/Layout';
import { Modal } from '@/components/Modal/Modal';
import News from '@/components/News/News';

import { setMergeAfisha } from '@/redux/slices/afishaSlice';
import { setMergeNews } from '@/redux/slices/newsSlice';

function Lifestyle() {
  const dispatch = useDispatch();
  const places = useFashionPlacesData();
  const categories = useFashionCategories();
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
  useFashionFetch();
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
      <Cards data={places} categories={categories} />
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

export default Lifestyle;
