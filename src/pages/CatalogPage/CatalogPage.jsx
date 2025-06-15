import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations.js';
import CarsList from '../../components/CarsList/CarsList.jsx';
import clsx from 'clsx';
import Filters from '../../components/Filters/Filters.jsx';
import s from './CatalogPage.module.css';
import {
  selectError,
  selectFilters,
  selectLoading,
  selectPage,
  selectTotalPages,
} from '../../redux/selectors.js';
import { fetchBrands } from '../../redux/filters/operations.js';
import { resetItems, upDatePage } from '../../redux/cars/slice.js';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setFilters } from '../../redux/filters/slice.js';
import Loader from '../../components/Loader/Loader.jsx';
import { Helmet } from 'react-helmet-async';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const updateSearchParams = (params) => {
    const updated = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') {
        updated.delete(key);
      } else {
        updated.set(key, value);
      }
    });
    setSearchParams(updated);
  };

  const currentPage = searchParams.get('page') || 1;
  const brand = searchParams.get('brand');
  const rentalPrice = searchParams.get('rentalPrice');
  const minMileage = searchParams.get('minMileage');
  const maxMileage = searchParams.get('maxMileage');

  useEffect(() => {
    dispatch(resetItems());
    dispatch(fetchBrands());
    for (let i = 1; i <= currentPage; i++) {
      dispatch(
        fetchCars({ page: i, brand, rentalPrice, minMileage, maxMileage }),
      );
    }
  }, [dispatch]);

  useEffect(() => {
    if (currentPage > 1 || brand || rentalPrice || minMileage || maxMileage)
      dispatch(
        fetchCars({
          page: currentPage,
          brand,
          rentalPrice,
          minMileage,
          maxMileage,
        }),
      );
    dispatch(upDatePage(currentPage));
  }, [dispatch, currentPage, brand, rentalPrice, minMileage, maxMileage]);

  const handleReset = () => {
    navigate('/catalog');
    dispatch(resetItems());
    dispatch(fetchCars({ currentPage }));
  };

  const handleSubmit = (values) => {
    dispatch(setFilters(values));
    if (JSON.stringify(filters) !== JSON.stringify(values))
      dispatch(resetItems());
    updateSearchParams({
      page: 1,
      ...values,
    });
  };

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <div className={clsx('page', 'container', s.catalog)}>
        <div className={s.formContainer}>
          <Filters handleSubmit={handleSubmit} handleReset={handleReset} />
        </div>
        <CarsList />
        {page < totalPages && (
          <button
            className={s.loadMoreBtn}
            type='button'
            onClick={() => updateSearchParams({ page: Number(page) + 1 })}
            disabled={loading}
          >
            Load more
          </button>
        )}
        {loading && !error && <Loader />}
      </div>
    </>
  );
};

export default CatalogPage;
