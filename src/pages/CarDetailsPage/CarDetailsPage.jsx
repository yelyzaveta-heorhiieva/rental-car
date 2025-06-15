import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from '../../redux/cars/operations';
import { useParams } from 'react-router-dom';
import { selectCarById, selectError, selectLoading } from '../../redux/selectors';
import clsx from 'clsx';
import s from './CarDetailsPage.module.css';
import CarInfo from '../../components/CarInfo/CarInfo';
import BookingForm from '../../components/BookingForm/BookingForm';
import BookingModal from '../../components/BookingModal/BookingModal';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const CarDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const car = useSelector(selectCarById);
  const [details, setDetails] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location?.state ?? '/catalog');

  const isTab = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch]);

  const { img, description } = car;

  const handleSubmit = (values, actions) => {
    const obj = {
      name: values.name.trim(),
      email: values.email,
      date: values.date ? values.date.toLocaleDateString() : '',
      comment: values.comment.trim(),
    };
    setFormIsOpen(false);
    setIsOpen(true);
    setDetails(obj);
    actions.resetForm();
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setFormIsOpen(false);
      setIsOpen(false);
    }
  };

  return (
    <div className={clsx('page', 'container')}>
      {loading && !error && <Loader newClass='container' />}
      <Link to={backLinkHref.current} className={s.backLink}>
        <svg width='16' height='16' className={s.backIcon}>
          <use href='/icons.svg#long-arrow'></use>
        </svg>
        Go back
      </Link>
      {!error && <div className={s.details}>
        <div className={s.wrapper}>
          <img src={img} alt={description} className={s.img} />
          {!isTab ? (
            <>
              <button
                className={s.btn}
                type='button'
                onClick={() => setFormIsOpen(true)}
              >
                Book now!
              </button>
              {formIsOpen && (
                <div className={s.backdrop} onClick={handleClose}>
                  <div className={s.modal}>
                    <button
                      className={s.closeBtn}
                      onClick={() => setFormIsOpen(false)}
                    >
                      <svg width='16' height='16' className={s.icon}>
                        <use href='/icons.svg#close'></use>
                      </svg>
                    </button>
                    <BookingForm handleSubmit={handleSubmit} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <BookingForm handleSubmit={handleSubmit} />
          )}
        </div>
        <CarInfo car={car} />
        {isOpen && (
          <BookingModal
            onClose={() => setIsOpen(false)}
            handleClose={handleClose}
            details={details}
          />
        )}
      </div>}
    </div>
  );
};

export default CarDetailsPage;
