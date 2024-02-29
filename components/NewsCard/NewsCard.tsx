import { convertISOToCustomFormat } from '@/utils/date';
import React from 'react';

import { NewsCardProps } from '@/types/placesType';

import styles from './NewsCard.module.scss';

export const NewsCard: React.FC<NewsCardProps> = ({ news, title }) => {
  return (
    <div className={styles.news__container}>
      <h3 className={styles.title}>{title}</h3>
      {news &&
        news.map((obj) => (
          <article key={obj._id} className={styles.news__item}>
            <p className={styles.news__name}>{obj.newsName}</p>
            <p
              className={styles.content__text}
              dangerouslySetInnerHTML={{
                __html: obj.newsText
                  .split('\n')
                  .map((line) => `<span>${line}</span>`)
                  .join('<br>'),
              }}
            />
            <span className={styles.news__date}>
              {convertISOToCustomFormat(obj.date)}
            </span>
          </article>
        ))}
    </div>
  );
};
