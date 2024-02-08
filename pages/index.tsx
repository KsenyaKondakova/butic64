import galleryImage from '@/public/assets/images/abstract-background-border-black-smoke-texture-border-cinematic-design 1.jpeg';
import afishaImage from '@/public/assets/images/greyscale-clouds-reflection-in-a-building 1.jpeg';
import newsImage from '@/public/assets/images/old-buildings-and-street-view-in-waitan-of-shanghai-in-black-and-white 1.jpeg';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Banner from '@/components/Banner/Banner';
import Layout from '@/components/Layout/Layout';
import MainCard from '@/components/MainCard/MainCard';
import Nav from '@/components/Nav/Nav';
import Slider from '@/components/Slider/Slider';

import { IPlaceList } from '@/types/placesType';

export default function Home() {
  const [places, setPlaces] = useState<IPlaceList[]>([]);
  const [images, setImages] = useState<string[][]>([]);
  useEffect(() => {
    axios.get('/api/places').then((response) => {
      setPlaces(response.data);
    });
  }, []);
  console.log(places);
  const getImagesPlaces = () => {
    setImages(places.map((place) => place.images || [])); // flat() используется для устранения вложенности
  };
  console.log('картинки', images);
  useEffect(() => {
    // Вызывать getImagesPlaces только если places изменился
    getImagesPlaces();
  }, [places]);
  return (
    <>
      <Nav />
      <Layout>
        <div className="main__page__container">
          <MainCard
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
          />
          {/* <div className="gallery">
            {images.map((imageList, index) => (
              <Slider key={index} images={imageList} sliderIndex={index} />
            ))}
          </div> */}
        </div>
        <Banner />
      </Layout>
    </>
  );
}
