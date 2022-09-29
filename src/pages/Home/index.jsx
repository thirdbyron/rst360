import React from 'react';
import { BenefitsList } from './components/BenefitsList';
import { MainTitle } from '../../components/MainTitle';
import { Promo } from './components/Promo';
import styles from './Home.module.scss';
import { Separator } from '../../components/Separator';
import { ContactForm } from './components/ContactForm';
import { Guide } from './components/Guide';

export const Home = () => {
  return (
    <main className={styles.home}>
      <Promo />
      <MainTitle
        titleText={'Панорамный ресторан на 89 этаже в Москва-Сити'}
        main
        
      />
      <BenefitsList />
      <Separator rotate/>
      <Guide />
     
      <Separator />
      <ContactForm />
    </main>
  );
};
