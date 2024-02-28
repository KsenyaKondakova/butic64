import axios from 'axios';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Afisha from '@/components/Afisha/Afisha';
import Banner from '@/components/Banner/Banner';
import { Footer } from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
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
          <News news={mergeNews} title={'Новости города'} />
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
                      <span>{place.dateImages}</span>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <Afisha afisha={mergeAfisha} title={'Афиша города'} />
        </div>
        <Footer />
      </Layout>
    </>
  );
}
