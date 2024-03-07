import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ChevronLeft from '@/public/assets/icons/ChevronLeft';
import ChevronRight from '@/public/assets/icons/ChevronRight';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

interface SliderProps {
  images: string[];
  sliderIndex: number;
}
const Slider: React.FC<SliderProps> = ({ images, sliderIndex }) => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        centerInsufficientSlides={true}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        className={'mySwiper ' + sliderIndex}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          450: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
          850: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
          1030: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          1150: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
          1250: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
          1350: {
            slidesPerView: 7,
            spaceBetween: 2,
          },
          1450: {
            slidesPerView: 8,
            spaceBetween: 2,
          },
          1700: {
            slidesPerView: 9,
            spaceBetween: 2,
          },
        }}
      >
        <button className={`button-prev ${styles.button}`}>
          <ChevronLeft />
        </button>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="photo" />
          </SwiperSlide>
        ))}
        <button className={`button-next ${styles.button}`}>
          <ChevronRight />
        </button>
      </Swiper>
    </div>
  );
};

export default Slider;
