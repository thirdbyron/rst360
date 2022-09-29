import React, { useRef } from 'react';
import styles from './GuideBox.module.scss';

export const GuideBox = ({
  title,
  description,
  id,
  buttonText,
  checkOpenedBoxes,
}) => {
  const descRef = useRef();
  const guideBoxRef = useRef();
  const stepRef = useRef();
  const topWrapper = useRef();
  const descTextRef = useRef();
  const descButtonRef = useRef();
  const titleRef = useRef();

  const setActiveId = () => {
    if (guideBoxRef.current.classList.contains(`${styles.guideBoxOpened}`)) {
      guideBoxRef.current.setAttribute('id', 'active');
    } else {
      guideBoxRef.current.setAttribute('id', null);
    }
    checkOpenedBoxes();
  };

  const toggleGuideBoxStyle = (evt) => {
    console.log(evt.target, evt.currentTarget)
    if (evt.target === topWrapper.current || evt.target === stepRef.current || evt.target === titleRef.current || evt.target === titleRef.current.firstElementChild) {
      guideBoxRef.current.classList.toggle(`${styles.guideBoxOpened}`);
      descRef.current.classList.toggle(`${styles.guideBoxDescOpened}`);
      stepRef.current.classList.toggle(`${styles.stepActive}`);
      topWrapper.current.classList.toggle(`${styles.topWrapperActive}`);
      descTextRef.current.classList.toggle(`${styles.guideBoxDescTextReveal}`);
      descButtonRef.current.classList.toggle(
        `${styles.guideBoxDescButtonReveal}`,
      );
      setActiveId();
    }
  };
  return (
    <li
      className={styles.guideBox}
      onClick={toggleGuideBoxStyle}
      ref={guideBoxRef}
    >
      <div
        className={styles.topWrapper}
        ref={topWrapper}
      >
        <div
          className={styles.step}
          ref={stepRef}
        >
          {id}
        </div>
        <h5 className={styles.guideBoxTitle} ref={titleRef}>
          <span className={styles.guideBoxTitleText}>{title}</span>
        </h5>
      </div>

      <article
        className={styles.guideBoxDesc}
        ref={descRef}
      >
        <p
          className={styles.guideBoxDescText}
          ref={descTextRef}
        >
          {description}
        </p>
        <button
          className={styles.guideBoxDescButton}
          ref={descButtonRef}
        >
          {buttonText}
        </button>
      </article>
    </li>
  );
};
