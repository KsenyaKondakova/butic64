import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { AfishaProps } from '@/types/placesType';

import styles from './Afisha.module.scss';

const Afisha: React.FC<AfishaProps> = ({ afisha, title }) => {
  return (
    <div className={styles.component + ' ' + 'grid__afisha'}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.afisha__container}>
        <div className={styles.afisha}>
          {afisha.map((item, index) =>
            item.parent ? (
              <Link
                href={`/place/${item.parent}`}
                key={index}
                className={styles.container}
              >
                <img src={item.image} className={styles.image} />
              </Link>
            ) : (
              <div key={index} className={styles.container}>
                <img src={item.image} className={styles.image} />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Afisha;
//<img src={image} alt="" className={styles.image} />
