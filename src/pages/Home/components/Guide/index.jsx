import React from 'react';
import { MainTitle } from '../../../../components/MainTitle';
import styles from './Guide.module.scss';
import guides from '../../../../json/guides.json'
import { GuideBox } from './GuideBox';

export const Guide = () => {
  return (
    <section className={styles.guide}>
      <MainTitle
        titleText={'Как мы работаем'}
      />
    <div className={styles.wrapper}>
      {guides.map((guide) => <GuideBox key={guide.id} {...guide}/>)}
    </div>
    </section>
  );
};
