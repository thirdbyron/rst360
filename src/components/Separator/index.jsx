import React from 'react';
import styles from './Separator.module.scss';

export const Separator = ({ rotate = null, margin = null }) => {
  return (
    <span 
    style={margin && {marginBottom: margin}}
      className={
        rotate
          ? `${styles.separatorRotated} ${styles.separator}`
          : styles.separator
      }
    ></span>
  );
};
