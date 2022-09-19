import React from 'react';
import styles from './Separator.module.scss';

export const Separator = ({ rotate = null }) => {
  return (
    <span
      className={
        rotate
          ? `${styles.separatorRotated} ${styles.separator}`
          : styles.separator
      }
    ></span>
  );
};
