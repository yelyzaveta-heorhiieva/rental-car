import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomCalendar.css';

const CustomCalendar = ({ name, selected, setFieldValue }) => {
  return (
    <DatePicker
      name={name}
      className='calendar-input'
      popperClassName='myCalendar'
      selected={selected}
      minDate={new Date()}
      calendarStartDay={1}
      formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3).toUpperCase()}
      dateFormat='dd.MM.yyyy'
      onChange={(date) => {
        setFieldValue('date', date);
      }}
      placeholderText='Booking date'
    />
  );
};

export default CustomCalendar;
