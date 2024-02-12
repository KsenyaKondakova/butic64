import React from 'react';

import { AfishaProps } from '@/types/placesType';

import styles from './Afisha.module.scss';

const Afisha: React.FC<AfishaProps> = ({ afisha }) => {
  return (
    <div className={styles.afisha}>
      {afisha.map((image, index) => (
        <div key={index} className={styles.container}>
          <img src={image} alt="" className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default Afisha;
