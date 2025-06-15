import CarsListItem from '../CarsListItem/CarsListItem';
import { useSelector } from 'react-redux';
import { selectCars, selectLoading } from '../../redux/selectors';
import s from './CarsList.module.css';

const CarsList = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);

  return (
    <>
      {!cars.length && !loading && (
        <p className={s.errorText}>There are no cars for your request</p>
      )}
      <ul className={s.carsList}>
        {cars.map((item) => (
          <CarsListItem car={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default CarsList;
