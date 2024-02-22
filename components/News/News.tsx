import { convertISOToCustomFormat } from '@/utils/date';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsLoading } from '@/redux/slices/placeSlice';
import { RootState } from '@/redux/store';

import { NewsProps } from '@/types/placesType';

import styles from './News.module.scss';
import Skeleton from './Skeleton';

const News: React.FC<NewsProps> = ({ news, title }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.placeSlice.isLoading);

  useEffect(() => {
    dispatch(setIsLoading(news.length === 0));
    if (news.length > 0) {
      dispatch(setIsLoading(false));
    }
  }, [news]);

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const newsItems = news.map((obj) =>
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
  );

  return (
    <div className={styles.news}>
      <h3 className={styles.title}>{title}</h3>

      {loading ? skeletons : newsItems}
    </div>
  );
};

export default News;
