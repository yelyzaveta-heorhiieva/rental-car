import React, { useState, useRef, useEffect } from 'react';
import { useField } from 'formik';
import s from './CustomSelect.module.css'
import clsx from 'clsx';


const CustomSelect = ({ label, options, text, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    helpers.setValue(value);
    setOpen(false);
  };

  return (
    <div className={s.selectWrapper} ref={ref}>
      {label && (
        <label className={s.label}>
          {label}
          <div
            className={s.select}
            onClick={() => setOpen(!open)}
          >
            {field.value ? `${text}${options.find((o) => o === field.value)}` : 'Choose a brand'}
            <svg width='16' height='16' className={clsx(s.icon, open && s.isActive)}>
            <use href='/icons.svg#arrow-down'></use>
          </svg>
          </div>

          {open && (
            <div className={s.scrollContainer}>
              <ul className={s.optionList}>
                {options?.map((item, i) => (
                  <li
                    key={`${item}-${i}`}
                    className={s.option}
                    onClick={() => handleSelect(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </label>
      )}
    </div>
  );
};

export default CustomSelect;
