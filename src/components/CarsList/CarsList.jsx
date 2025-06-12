import CarsListItem from '../CarsListItem/CarsListItem'
import { useSelector } from 'react-redux'
import { selectCars } from '../../redux/selectors'
import s from './CarsList.module.css'

const CarsList = () => {
  const cars = useSelector(selectCars)

  return (
    <ul className={s.carsList}>
      {cars.map((item) => <CarsListItem car={item} key={item.id} />)}
    </ul>
  )
}

export default CarsList
