import React from 'react';

import styles from './Banner.module.scss';

function Banner() {
  return (
    <div className={styles.banner}>
      <h4 className={styles.banner__title}>
        Присоединяйся <br /> к Butik64!
      </h4>
    </div>
  );
}

export default Banner;
