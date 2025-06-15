import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { selectBrands } from '../../redux/selectors';
import s from './Filters.module.css';
import CustomSelect from '../CustomSelect/CustomSelect';
import clsx from 'clsx';
import { NumericFormat } from 'react-number-format';

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
      {({ values, setFieldValue }) => (
        <Form className={s.form}>
          <CustomSelect
            label='Car brand'
            options={brands}
            name='brand'
            text=''
          />
          <CustomSelect
            label='Price/ 1 hour'
            options={price}
            name='rentalPrice'
            text='To $'
          />
          <label className={s.label}>
            Сar mileage / km
            <div className={s.inputWrapper}>
              <span className={clsx(s.inputText, s.leftText)}>From</span>
              <NumericFormat
                thousandSeparator=','
                allowNegative={false}
                onValueChange={(values) => {
                  setFieldValue('minMileage', values.value);
                }}
                className={clsx(s.input, s.left)}
              />
              <span className={clsx(s.inputText, s.rightText)}>To</span>
              <NumericFormat
                thousandSeparator=','
                allowNegative={false}
                onValueChange={(values) => {
                  setFieldValue('maxMileage', values.value);
                }}
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
      )}
    </Formik>
  );
};

export default Filters;
