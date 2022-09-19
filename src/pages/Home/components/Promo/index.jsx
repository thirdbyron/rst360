import React from 'react';
import styles from './Promo.module.scss';
import promo from '../../../../assets/img/promo.jpg';

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <img
        src={promo}
        alt='promo'
        className={styles.promoImg}
      />
    </section>
  );
};
