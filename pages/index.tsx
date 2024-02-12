import galleryImage from '@/public/assets/images/abstract-background-border-black-smoke-texture-border-cinematic-design 1.jpeg';
import afishaImage from '@/public/assets/images/greyscale-clouds-reflection-in-a-building 1.jpeg';
import newsImage from '@/public/assets/images/old-buildings-and-street-view-in-waitan-of-shanghai-in-black-and-white 1.jpeg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Afisha from '@/components/Afisha/Afisha';
import Banner from '@/components/Banner/Banner';
import Layout from '@/components/Layout/Layout';
import MainCard from '@/components/MainCard/MainCard';
import Nav from '@/components/Nav/Nav';
import News from '@/components/News/News';
import Slider from '@/components/Slider/Slider';

import { setPlaces } from '@/redux/slices/placeSlice';
import { RootState } from '@/redux/store';

import { IPlaceList } from '@/types/placesType';

export default function Home() {
  const dispatch = useDispatch();

  const places = useSelector((state: RootState) => state.placeSlice.places);
  const images = useSelector((state: RootState) => state.placeSlice.images);
  const news = useSelector((state: RootState) => state.placeSlice.news);
  const afisha = useSelector((state: RootState) => state.placeSlice.afisha);
  useEffect(() => {
    axios.get('/api/places').then((response) => {
      dispatch(setPlaces(response.data));
    });
  }, []);
  console.log(news);
  return (
    <>
      <Nav />
      <Layout>
        <div className="main__page__container">
          {/* <MainCard
            title={'Новости города'}
            text={'Здесь вы найдете последние новости города'}
            image={newsImage}
            gridClass="news"
            link="/news"
          />
          <MainCard
            title={'Афиша города'}
            text={'Город происходит в один клик'}
            image={afishaImage}
            gridClass="afisha"
            link="/afisha"
          />
          <MainCard
            title={'Галерея'}
            text={'Визуальный праздник для глаз'}
            image={galleryImage}
            gridClass="gallery"
            link="/gallery"
          /> */}
          <News news={news} />
          <div className="gallery">
            {images.map(
              (imageList, index) =>
                imageList.length !== 0 && (
                  <Slider key={index} images={imageList} sliderIndex={index} />
                ),
            )}
          </div>
          <Afisha afisha={afisha} />
        </div>
        <Banner />
      </Layout>
    </>
  );
}
