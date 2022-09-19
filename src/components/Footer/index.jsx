import React from 'react';
import { Separator } from '../Separator';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Separator rotate={true} />
      <span className={styles.copyright}>{'(c) Restaurant 360, 2022'}</span>
    </footer>
  );
};
