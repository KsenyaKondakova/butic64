import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CardsProps } from '@/types/placesType';

import styles from './Cards.module.scss';

const Cards: React.FC<CardsProps> = ({ data, categories }) => {
  return (
    <div className={styles.container + ' ' + 'grid__cards'}>
      {data.map((obj) => {
        const category = categories.find((cat) => cat._id === obj.category);
        console.log(category);
        return (
          <article key={obj._id} className={styles.article}>
            <Link href={'/place/' + obj._id} className={styles.link}>
              <div className={styles.image__container}>
                <Image
                  src={obj.logo && obj.logo[0] ? obj.logo[0] : ''}
                  alt=""
                  layout="responsive"
                  objectFit="contain"
                  width={100}
                  height={100}
                  className={styles.image}
                />
              </div>
              <span className={styles.category}>{category?.name}</span>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Cards;
