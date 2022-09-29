import React, { useRef } from 'react';
import styles from './Guide.module.scss';
import guides from '../../../../json/guides.json';
import { GuideBox } from './GuideBox';

export const Guide = () => {
  const guideListRef = useRef();

  const checkOpenedBoxes = () => {
    const isAnyBoxOpen = Array.from(guideListRef.current.children).some(
      (el) => el.getAttribute('id') === 'active',
    );
    if (isAnyBoxOpen) {
      guideListRef.current.classList.add(`${styles.guideListToggle}`);
    } else {
      guideListRef.current.classList.remove(`${styles.guideListToggle}`);
    }
  };

  return (
    <section className={styles.guide}>
      <h2 className={styles.title}> Как мы работаем </h2>

      <ol
        className={styles.guideList}
        ref={guideListRef}
      >
        {guides.map((guide, index) => (
          <GuideBox
            key={guide.id}
            {...guide}
            checkOpenedBoxes={checkOpenedBoxes}
          />
        ))}
      </ol>
    </section>
  );
};
