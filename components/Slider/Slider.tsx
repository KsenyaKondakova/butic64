import React, { useEffect } from 'react';
import styles from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import ChevronLeft from '@/public/assets/icons/ChevronLeft';
import ChevronRight from '@/public/assets/icons/ChevronRight';
interface SliderProps {
  images: string[];
  sliderIndex: number;
}
const Slider: React.FC<SliderProps> = ({ images, sliderIndex }) => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        className={'mySwiper ' + sliderIndex}>
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
