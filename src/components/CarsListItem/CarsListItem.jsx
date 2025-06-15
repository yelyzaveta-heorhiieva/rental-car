import clsx from 'clsx';
import s from './CarsListItem.module.css';
import { Link } from 'react-router-dom';
import { resetSelected, setSelected } from '../../redux/filters/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelected } from '../../redux/selectors';
import { useLocation } from 'react-router-dom';

const CarsListItem = ({ car }) => {
  const dispatch = useDispatch();
  const selected = useSelector(selectSelected);
  const location = useLocation();

  const {
    id,
    img,
    description,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;

  const [city, region] = address?.split(',').slice(1, 3) || [];

  const handleClick = () => {
    if (selected.some((obj) => obj.id === id)) {
      dispatch(resetSelected(car));
    } else {
      dispatch(setSelected(car));
    }
  };

  return (
    <li className={s.card}>
      <img src={img} alt={description} className={s.img} />
      <button type='button' className={s.btn} onClick={handleClick}>
        <svg width='16' height='16' className={s.heartIcon}>
          <use
            href={`/icons.svg#${
              selected.some((obj) => obj.id === id) ? 'heart-full' : 'heart'
            }`}
          ></use>
        </svg>
      </button>
      <div className={s.cardTitle}>
        <h2 className={s.model}>
          {brand} <span>{model}</span>, {year}
        </h2>
        <p className={s.price}>${rentalPrice}</p>
      </div>
      <div className={s.infoContainer}>
        <ul className={s.infoList}>
          <li className={s.infoListItem}>{city}</li>
          <li className={s.infoListItem}>{region}</li>
          <li className={s.infoListItem}>{rentalCompany}</li>
        </ul>
        <ul className={s.infoList}>
          <li className={s.infoListItem}>{type}</li>
          <li className={clsx(s.infoListItem, s.lastEl)}>
            {mileage.toLocaleString('en-US').replace(',', ' ')} km
          </li>
        </ul>
      </div>
      <Link to={`/catalog/${id}`} className={s.detailsLink} state={location}>
        Read more
      </Link>
    </li>
  );
};

export default CarsListItem;
