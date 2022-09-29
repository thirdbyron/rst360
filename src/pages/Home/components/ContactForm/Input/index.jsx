import React from 'react';
import styles from './Input.module.scss';

export const Input = ({ id, placeholder, label, type='input' }) => {
  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        {type === 'textarea' ? (
          <textarea
            id={id}
            placeholder={placeholder}
            className={styles.input}
          ></textarea>
        ) : (
          <input
            id={id}
            type='text'
            placeholder={placeholder}
            className={styles.input}
          />
        )}
      </div>
    </div>
  );
};
