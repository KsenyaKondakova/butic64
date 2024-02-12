import Link from 'next/link';
import React from 'react';

import { CardsProps } from '@/types/placesType';

import styles from './Cards.module.scss';

const Cards: React.FC<CardsProps> = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      {data.map((obj) => (
        <article key={obj._id}>
          <Link href={'/place/' + obj._id}>
            <h3>{obj.title}</h3>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Cards;
