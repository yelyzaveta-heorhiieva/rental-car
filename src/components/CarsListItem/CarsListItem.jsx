import clsx from 'clsx';
import s from './CarsListItem.module.css';
import { Link } from 'react-router-dom';

const CarsListItem = ({ car }) => {
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

  return (
    <li className={s.card}>
      <img src={img} alt={description} className={s.img} />
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
      <Link to={`/catalog/${id}`} className={s.detailsLink}>
        Read more
      </Link>
    </li>
  );
};

export default CarsListItem;
