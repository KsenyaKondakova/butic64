import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { MainCardProps } from '@/types/placesType';

import styles from './MainCard.module.scss';

const MainCard: React.FC<MainCardProps> = ({
  title,
  text,
  image,
  gridClass,
  link,
}) => {
  return (
    <Link
      href={link}
      className={`${styles.card} ${gridClass && styles[gridClass]}`}
    >
      <article>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__text}>{text}</p>
        <Image
          src={image}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          alt="Picture of the author"
        />
      </article>
    </Link>
  );
};

export default MainCard;
