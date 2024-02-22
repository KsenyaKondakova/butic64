import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './News.module.scss';

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={300}
    height={80}
    viewBox="0 0 300 80"
    backgroundColor="#313131"
    foregroundColor="#faf7ef"
    className={styles.skeleton}
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="300" height="65" />
  </ContentLoader>
);

export default Skeleton;
