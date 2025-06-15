import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './BookingForm.module.css';
import clsx from 'clsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const BookingForm = ({ handleSubmit }) => {
  
  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'The name is too short!')
      .max(50, 'The name is too long!')
      .matches(/^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/, 'Enter only letters')
      .required('Required!'),
    email: Yup.string()
      .email('Invalid email')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email')
      .required('Required!'),
    date: Yup.date().min(new Date(), 'Date must be today or later'),
    comment: Yup.string()
      .min(2, 'Comment must contain at least 2 characters')
      .max(260, 'The comment must not exceed 260 characters')
  });

  return (
    <div className={s.formContainer}>
      <strong className={s.formTitle}>Book your car now</strong>
      <p className={s.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form className={s.form}>
            <label>
              <Field
                className={s.input}
                type='text'
                name='name'
                placeholder='Name*'
              />
              <ErrorMessage className={s.error} name='name' component='span' />
            </label>
            <label>
              <Field
                className={s.input}
                type='email'
                name='email'
                placeholder='Email*'
              />
              <ErrorMessage className={s.error} name='email' component='span' />
            </label>
            <label>
              <div className={s.input}>
                <DatePicker
                  name='date'
                  className={s.calendar}
                  selected={values.date}
                  minDate={new Date()}
                  dateFormat='dd.MM.yyyy'
                  onChange={(date) => {
                    setFieldValue('date', date);
                  }}
                  placeholderText='Booking date'
                />
              </div>
              <ErrorMessage className={s.error} name='date' component='span' />
            </label>
            <label>
              <Field
                as='textarea'
                className={clsx(s.input, s.textArea)}
                type='text'
                name='comment'
                placeholder='Comment'
              />
              <ErrorMessage
                className={s.error}
                name='comment'
                component='span'
              />
            </label>
            <button className={s.btn} type='submit'>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
