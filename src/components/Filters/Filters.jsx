import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { selectBrands, selectCars } from '../../redux/selectors';
import s from './Filters.module.css';
import CustomSelect from '../CustomSelect/CustomSelect';
import clsx from 'clsx';

const Filters = ({ handleSubmit, handleReset }) => {
  const brands = useSelector(selectBrands);
  const price = ['30', '40', '50', '60', '70', '80'];

  const initialValues = {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={s.form}>
        <CustomSelect label='Car brand' options={brands} name='brand' text='' />
        <CustomSelect
          label='Price/ 1 hour6226'
          options={price}
          name='rentalPrice'
          text='To $'
        />
        <label className={s.label}>
          Сar mileage / km
          <div className={s.inputWrapper}>
            <span className={clsx(s.inputText, s.leftText)}>From</span>
            <Field
              type='number'
              name='minMileage'
              className={clsx(s.input, s.left)}
            />
            <span className={clsx(s.inputText, s.rightText)}>To</span>
            <Field
              type='number'
              name='maxMileage'
              className={clsx(s.input, s.right)}
            />
          </div>
        </label>
        <button className={s.btn} type='submit'>
          Search
        </button>
        <button className={s.btn} type='reset' onClick={handleReset}>
          Reset
        </button>
      </Form>
    </Formik>
  );
};

export default Filters;
