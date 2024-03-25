import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ChevronLeft from '@/public/assets/icons/ChevronLeft';
import ChevronRight from '@/public/assets/icons/ChevronRight';
import Image from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

interface SliderProps {
  images: string[];
  sliderIndex: number;
  setModalActive?: React.Dispatch<React.SetStateAction<boolean>>;
  setModalWindow?: React.Dispatch<React.SetStateAction<string>>;
  setModalImages?: React.Dispatch<React.SetStateAction<string[]>>;
  modalIndexImages?: number;
}
const ModalSlider: React.FC<SliderProps> = ({
  images,
  sliderIndex,
  setModalActive,
  setModalWindow,
  setModalImages,
  modalIndexImages,
}) => {
  const handleClickSlider = (images: string[], index: number) => {
    if (setModalWindow) {
      setModalWindow('slider');
    }
    if (setModalActive) {
      setModalActive(true);
    }
    if (setModalImages) {
      setModalImages(images);
    }
  };
  console.log('индекс', modalIndexImages);
  return (
    <div className={styles.container}>
      <Swiper
        key={modalIndexImages}
        modules={[Navigation]}
        centerInsufficientSlides={true}
        slidesPerView={1}
        initialSlide={modalIndexImages}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        className={'mySwiperModal ' + sliderIndex}
      >
        <button className={`button-prev ${styles.button}`}>
          <ChevronLeft />
        </button>
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            onClick={() => handleClickSlider(images, index)}
          >
            <Image
              src={image}
              alt="photo"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
        <button className={`button-next ${styles.button}`}>
          <ChevronRight />
        </button>
      </Swiper>
    </div>
  );
};

export default ModalSlider;
