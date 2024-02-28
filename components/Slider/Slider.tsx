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
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        className={'mySwiper ' + sliderIndex}
        breakpoints={{
          780: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          900: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          1740: {
            slidesPerView: 3,
            spaceBetween: 10,
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
