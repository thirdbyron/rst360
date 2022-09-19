import React from 'react';
import styles from './Benefit.module.scss';

export const Benefit = ({
  title,
  description,
  type,
  isActive,
  side = null,
}) => {
  const getCurrentStyles = () => {
    if (isActive) {
      return `${styles.benefit} ${styles.benefitActive}`;
    } else {
      if (side) {
        return `${styles.benefit} ${styles[side]}`;
      } else {
        return `${styles.benefit}`
      }
    }
  };

  return (
    <article className={getCurrentStyles()}>
      <img
        src={`/img/benefits/${type}.jpg`}
        alt={type}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={side ? `${styles.descTransform}` : `${styles.desc}`}>{description}</p>
    </article>
  );
};
