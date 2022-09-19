import React from 'react'
import styles from './GuideBox.module.scss'

export const GuideBox = ({title, desc}) => {
  return (
    <article className={styles.guideBox}>
      <h5 className={styles.guideBoxTitle}>
        <span className={styles.guideBoxTitleText}></span>
      </h5>
      <p guideBoxDesc> </p>
    </article>
  )
}
