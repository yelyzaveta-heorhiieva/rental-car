import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from '../../redux/cars/operations';
import { useParams } from 'react-router-dom';
import { selectCarById } from '../../redux/selectors';
import clsx from 'clsx';
import s from './CarDetailsPage.module.css';
import CarInfo from '../../components/CarInfo/CarInfo';

const CarDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectCarById);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch]);

  const { img, description } = car;

  return (
    <div className={clsx('page', 'container', s.details)}>
      <div className={s.wrapper}>
        <img src={img} alt={description} className={s.img} />
      </div>
      <CarInfo car={car} />
    </div>
  );
};

export default CarDetailsPage;
