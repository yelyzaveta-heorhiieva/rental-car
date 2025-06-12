import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations.js';
import { selectCars } from '../../redux/selectors.js'
import CarsList from '../../components/CarsList/CarsList.jsx';
import clsx from 'clsx';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className={clsx('page', 'container')}>
      <CarsList/>
    </div>
  );
};

export default CatalogPage;
