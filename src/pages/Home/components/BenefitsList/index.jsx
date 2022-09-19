import React, { useEffect, useState } from 'react';
import { Benefit } from './Benefit';
import styles from './BenefitsList.module.scss';
import benefits from '../../../../json/benefits.json';
import { Icon } from '@iconify/react';
import { useRef } from 'react';

const arrowStyle = {
  left: {
    color: 'lightgray',
    cursor: 'pointer',
  },
  right: {
    transform: 'rotate(180deg)',
    color: 'lightgray',
    cursor: 'pointer',
  },
};

const Dot = ({ index, currentBenefitId, setCurrentBenefitId }) => {
  const onChangeBenefit = () => {
    setCurrentBenefitId(index);
  };

  return index === currentBenefitId ? (
    <span className={`${styles.emptyDot} ${styles.emptyDotBig}`}>
      {' '}
      <span className={styles.choosenDot}></span>
    </span>
  ) : (
    <span
      className={styles.emptyDot}
      onClick={onChangeBenefit}
    ></span>
  );
};

export const BenefitsList = () => {
  const arrowRef = useRef();
  const [currentBenefitId, setCurrentBenefitId] = useState(0);

  useEffect(() => {
    arrowRef.current.disabled = true;
    setTimeout(() => {
      arrowRef.current.disabled = false;
    }, 800);
  }, [currentBenefitId]);

  const onClickRightArrow = (evt) => {
    arrowRef.current = evt.currentTarget;
    if (!evt.currentTarget.disabled) {
      if (currentBenefitId === benefits.length - 1) {
        setCurrentBenefitId(0);
      } else {
        setCurrentBenefitId(currentBenefitId + 1);
      }
    }
  };

  const onClickLeftArrow = (evt) => {
    arrowRef.current = evt.currentTarget;
    if (!evt.currentTarget.disabled) {
      if (currentBenefitId === 0) {
        setCurrentBenefitId(benefits.length - 1);
      } else {
        setCurrentBenefitId(currentBenefitId - 1);
      }
    }
  };

  const onHoverArrow = (evt) => {
    evt.target.style.color = '#6498f8';
    evt.target.style.transform = evt.target.id === 'left' ? 'rotate(180deg) scaleY(1.0)' : 'scaleY(1.2)';
    evt.target.style.transition = '0.5s';
  };

  const onLeaveArrow = (evt) => {
    evt.target.style.color = 'lightgray';
    evt.target.style.transform = 'scaleY(1.0)';
    evt.target.style.transition = '0.5s';
  };

  const getSideOfBenefit = (index) => {
    if (currentBenefitId === 0 && index === benefits.length - 1) {
      return 'benefitLeft';
    } else if (currentBenefitId === benefits.length - 1 && index === 0) {
      return 'benefitRight';
    } else if (index < currentBenefitId) {
      return 'benefitLeft';
    } else if (index > currentBenefitId) {
      return 'benefitRight';
    }
  };

  return (
    <section className={styles.benefitsList}>
      <button
        onClick={onClickLeftArrow}
        ref={arrowRef}
      >
        <Icon
          onMouseEnter={onHoverArrow}
          onMouseLeave={onLeaveArrow}
          icon='dashicons:arrow-left-alt2'
          width='60px'
          style={arrowStyle.left}
        />
      </button>
      <div className={styles.slider}>
        {benefits.map((benefit, index) => (
          <Benefit
            key={benefit.id}
            {...benefit}
            isActive={currentBenefitId === index}
            side={getSideOfBenefit(index)}
          />
        ))}
      </div>
      <ol className={styles.benefitsNav}>
        {benefits.map((benefit, index) => (
          <Dot
            key={benefit.id}
            index={index}
            currentBenefitId={currentBenefitId}
            setCurrentBenefitId={setCurrentBenefitId}
          />
        ))}
      </ol>

      <button onClick={onClickRightArrow}>
        <Icon
          onMouseEnter={(evt) => {
            evt.target.style.color = '#6498f8';
            evt.target.style.transform = 'rotate(180deg) scaleY(1.2)';
            evt.target.style.transition = '0.5s';
          }}
          onMouseLeave={(evt) => {
            evt.target.style.color = 'lightgray';
            evt.target.style.transform = 'rotate(180deg) scaleY(1.0)';
            evt.target.style.transition = '0.5s';
          }}
          icon='dashicons:arrow-left-alt2'
          width='60px'
          style={arrowStyle.right}
          id='left'
        />
      </button>
    </section>
  );
};
