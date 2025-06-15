import CarsListItem from '../CarsListItem/CarsListItem';
import { useSelector } from 'react-redux';
import { selectCars, selectLoading } from '../../redux/selectors';
import s from './CarsList.module.css';
import { useEffect, useRef } from 'react';

const CarsList = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  const carRefs = useRef({});

 useEffect(() => {
   const id = sessionStorage.getItem('scrollToId');
   if (!id) return;

   const interval = setInterval(() => {
     const el = carRefs.current[id];
     if (el) {
       el.scrollIntoView({ behavior: 'smooth' });
       sessionStorage.removeItem('scrollToId');
       clearInterval(interval);
     }
   }, 100);

   return () => clearInterval(interval);
 }, []);

  return (
    <>
      {!cars.length && !loading && (
        <p className={s.errorText}>There are no cars for your request</p>
      )}
      <ul className={s.carsList}>
        {cars.map((item) => (
          <CarsListItem
            car={item}
            key={item.id}
            ref={(el) => (carRefs.current[item.id] = el)}
          />
        ))}
      </ul>
    </>
  );
};

export default CarsList;
