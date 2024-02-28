import Image from 'next/image';
import React from 'react';

import { AfishaCardProps } from '@/types/placesType';

import styles from './AfishaCard.module.scss';

export const AfishaCard: React.FC<AfishaCardProps> = ({ afisha, title }) => {
  return (
    <div className={styles.afisha__container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.grid__container}>
        {afisha &&
          afisha.map((obj, index) => (
            <div key={index} className={styles.image__container}>
              <Image
                src={obj}
                alt=""
                layout="responsive"
                objectFit="cover"
                width={300}
                height={300}
                className={styles.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
