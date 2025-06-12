import InfoBlock from '../InfoBlock/InfoBlock';
import s from './CarInfo.module.css';

const CarInfo = ({ car }) => {
  const {
    accessories,
    address,
    brand,
    description,
    engineSize,
    fuelConsumption,
    id,
    mileage,
    model,
    rentalConditions,
    rentalPrice,
    type,
    year,
  } = car;

  const [city, region] = address?.split(',').slice(1, 3) || [];

  const specifications = [
    { icon: 'calendar', title: 'Year', item: year },
    { icon: 'car', title: 'Type', item: type },
    {
      icon: 'fuel-pump',
      title: 'Fuel Consumption',
      item: fuelConsumption,
    },
    { icon: 'gear', title: 'Engine Size', item: engineSize },
  ];

  return (
    <div className={s.carInfo}>
      <div className={s.mainBlock}>
        <h2 className={s.model}>
          {brand} {model}, {year} <span className={s.id}>Id: {id}</span>
        </h2>
        <div className={s.locationBox}>
          <p className={s.location}>
            <svg width='16' height='16'>
              <use href='/icons.svg#point'></use>
            </svg>
            {city}, {region}
          </p>
          <p>
            Mileage: {mileage?.toLocaleString('en-US').replace(',', ' ')} km
          </p>
        </div>
        <p className={s.price}>${rentalPrice}</p>
        <p>{description}</p>
      </div>
      <div className={s.infoBlocks}>
        <InfoBlock title='Rental Conditions:' items={rentalConditions} />
        <InfoBlock title='Car Specifications:' items={specifications} />
        <InfoBlock
          title='Accessories and functionalities:'
          items={accessories}
        />
      </div>
    </div>
  );
};

export default CarInfo;
