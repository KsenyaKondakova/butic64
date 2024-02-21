import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { AfishaProps } from '@/types/placesType';

import styles from './Afisha.module.scss';

const Afisha: React.FC<AfishaProps> = ({ afisha, title }) => {
  return (
    <div className={styles.afisha}>
      <h3 className={styles.title}>{title}</h3>
      {afisha.map((item, index) =>
        item.parent ? (
          <Link
            href={`/place/${item.parent}`}
            key={index}
            className={styles.news__container}
          >
            <Image
              src={item.image}
              alt=""
              layout="responsive"
              objectFit="contain"
              width={100}
              height={100}
            />
          </Link>
        ) : (
          <div key={index} className={styles.container}>
            <Image
              src={item.image}
              alt=""
              layout="responsive"
              objectFit="contain"
              width={100}
              height={100}
            />
          </div>
        ),
      )}
    </div>
  );
};

export default Afisha;
//<img src={image} alt="" className={styles.image} />
