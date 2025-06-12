import clsx from 'clsx';
import s from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
      <section className={clsx('page', s.hero)}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.text}>Reliable and budget-friendly rentals for any journey</p>
        <Link to='/catalog' className={s.link}>View Catalog</Link>
    </section>
  );
};

export default HomePage;
