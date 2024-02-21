import { convertISOToCustomFormat } from '@/utils/date';
import Link from 'next/link';
import React from 'react';

import { NewsProps } from '@/types/placesType';

import styles from './News.module.scss';

const News: React.FC<NewsProps> = ({ news, title }) => {
  return (
    <div className={styles.news}>
      <h3 className={styles.title}>{title}</h3>
      {news.map((obj) =>
        obj.parent ? (
          <Link
            href={`/place/${obj.parent}`}
            key={obj._id}
            className={styles.news__container}
          >
            <p className={styles.news__name}>{obj.newsName}</p>
            <span className={styles.news__date}>
              {convertISOToCustomFormat(obj.date)}
            </span>
          </Link>
        ) : (
          <div key={obj._id} className={styles.news__container}>
            <p className={styles.news__name}>{obj.newsName}</p>
            <span className={styles.news__date}>
              {convertISOToCustomFormat(obj.date)}
            </span>
          </div>
        ),
      )}
    </div>
  );
};

export default News;
