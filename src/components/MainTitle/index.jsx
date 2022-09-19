import React from 'react';
import { Separator } from '../Separator';

import styles from './MainTitle.module.scss';

export const MainTitle = ({
  titleText,
  isBottomSeparator = false,
  main = false,
}) => {
  return (
    <div className={styles.wrapper}>
      <Separator />
      {main ? (
        <h1 className={styles.mainTitle}>
          <span className={styles.mainTitleText}> {titleText}</span>
        </h1>
      ) : (
        <h2 className={styles.mainTitle}>
          <span className={styles.mainTitleText}> {titleText}</span>
        </h2>
      )}

      {isBottomSeparator ? <Separator /> : ''}
    </div>
  );
};
