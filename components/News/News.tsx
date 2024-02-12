import React from 'react';

import { NewsProps } from '@/types/placesType';

import styles from './News.module.scss';

const News: React.FC<NewsProps> = ({ news }) => {
  return (
    <div className={styles.news}>
      {news.map((obj) => (
        <p key={obj._id}>{obj.newsName}</p>
      ))}
    </div>
  );
};

export default News;
