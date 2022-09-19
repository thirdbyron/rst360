import React from 'react';
import { Input } from './Input';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.info}>
      <h2 className={styles.contactFormTitle}> Обратный звонок </h2>
      <p className={styles.contactFormDescription}>Перезвоним вам в рабочее время и ответим на все ваши вопросы!</p>
      </div>
    
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <Input
          id='name'
          placeholder='Введите ваше имя'
          label='Ваше имя'
        />
        <Input
          id='tel'
          placeholder='Введите номер телефона для связи'
          label='Номер телефона'
        />
        <Input
          id='comment'
          placeholder='Задайте вопрос или напишите важи пожелания'
          label='Комментарий'
          type='textarea'
        />
  
        <button
          type='submit'
          className={styles.submitButton}
        >
          Заказать звонок
        </button>
      </form>
    </section>
  );
};
