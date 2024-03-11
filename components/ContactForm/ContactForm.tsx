import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

import { IContactForm } from '@/types/placesType';

import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContactForm>();
  const onSubmit = (data: IContactForm) => {
    axios.post('/api/contacts', data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__container}>
        <label className={styles.form__label} htmlFor="userName">
          Имя
        </label>
        <input
          className={styles.form__input}
          {...register('userName', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 1,
              message: 'Минимальная длина 1 символ',
            },
            maxLength: {
              value: 20,
              message: 'Максимальная длина 20 символов',
            },
            pattern: {
              value: /^[a-zA-Zа-яА-Я]+$/,
              message: 'Можно вводить только русские и английские буквы',
            },
          })}
          defaultValue={''}
          id="userName"
          placeholder="Введите ваше имя"
        />
        {errors?.userName && (
          <div className={styles.form__error}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <p>{errors?.userName?.message}</p>
          </div>
        )}
      </div>
      <div className={styles.form__container}>
        <label className={styles.form__label} htmlFor="userEmail">
          Почта
        </label>
        <input
          className={styles.form__input}
          {...register('userEmail', {
            required: 'Поле обязательно к заполнению',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Неверный формат электронной почты',
            },
          })}
          defaultValue={''}
          id="userEmail"
          placeholder="Введите вашу электронную почту"
          type="text"
        />
        {errors?.userEmail && (
          <div className={styles.form__error}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <p>{errors?.userEmail?.message}</p>
          </div>
        )}
      </div>
      <div className={styles.form__container}>
        <label className={styles.form__label} htmlFor="userPhone">
          Телефон
        </label>
        <input
          className={styles.form__input}
          {...register('userPhone', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 11,
              message: 'Минимальная длина телефона 11 цифр',
            },
            maxLength: {
              value: 12,
              message: 'Максимальная длина телефона 12 цифр',
            },
            pattern: {
              value: /^[\+\-]?\d+$/,
              message: 'Можно вводить только цифры, символ + и -',
            },
          })}
          defaultValue={''}
          id="userPhone"
          placeholder="Введите ваш телефон"
          type="text"
        />
        {errors?.userPhone && (
          <div className={styles.form__error}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <p>{errors?.userPhone?.message}</p>
          </div>
        )}
      </div>
      <div className={styles.form__container}>
        <label className={styles.form__label} htmlFor="userMessage">
          Сообщение
        </label>
        <textarea
          className={styles.form__input}
          {...register('userMessage', {
            required: 'Поле обязательно к заполнению',
          })}
          defaultValue={''}
          id="userMessage"
          placeholder="Введите ваше сообщение"
          rows={6}
        />
        {errors?.userMessage && (
          <div className={styles.form__error}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <p>Это поле должно быть заполнено</p>
          </div>
        )}
      </div>
      <div className={styles.form__container_}>
        <p className={styles.form__container__privacy}>
          Нажимая кнопку «Отправить» вы соглашаетесь с политикой{' '}
          <Link href={'/'}>Конфиденциальности</Link>
        </p>
      </div>
      <div className={styles.form__container__button}>
        <input
          className={styles.form__container__button__submit}
          type="submit"
          value="Отправить"
        />
      </div>
    </form>
  );
};
