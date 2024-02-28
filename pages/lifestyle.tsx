import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Afisha from '@/components/Afisha/Afisha';
import Cards from '@/components/Cards/Cards';
import { Footer } from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
import Nav from '@/components/Nav/Nav';
import News from '@/components/News/News';

import { setAfisha, setMergeAfisha } from '@/redux/slices/afishaSlice';
import {
  setLyfeStyleCategories,
  setLyfeStylePlaces,
} from '@/redux/slices/lifeStyle';
import { setMergeNews, setNews } from '@/redux/slices/newsSlice';
import { setPlaces } from '@/redux/slices/placeSlice';
import { RootState } from '@/redux/store';

function Lifestyle() {
  const dispatch = useDispatch();
  const places = useSelector((state: RootState) => state.lifeStyle.places);
  const categories = useSelector(
    (state: RootState) => state.lifeStyle.categories,
  );
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
    axios.get('/api/lifestyle').then((response) => {
      dispatch(setLyfeStylePlaces(response.data.establishments));
      dispatch(setLyfeStyleCategories(response.data.subCategories));
    });
  }, []);

  useEffect(() => {
    dispatch(setMergeNews({ placesNews, mainNews }));
  }, [placesNews, mainNews]);
  useEffect(() => {
    dispatch(setMergeAfisha({ placesAfisha, mainAfisha }));
  }, [placesAfisha, mainAfisha]);

  return (
    <>
      <Nav />
      <Layout>
        <div className="main__page__container">
          <News news={mergeNews} title={'Новости города'} />
          <Cards data={places} categories={categories} />
          <Afisha afisha={mergeAfisha} title={'Афиша города'} />
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default Lifestyle;
