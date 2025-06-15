import clsx from 'clsx';
import s from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
      <Helmet>
          <title>Rental Car</title>
        </Helmet>
        <section className={clsx('page', s.hero)}>
          <div className='container'>
            <h1 className={s.title}>Find your perfect rental car</h1>
            <p className={s.text}>Reliable and budget-friendly rentals for any journey</p>
            <Link to='/catalog' className={s.link}>View Catalog</Link>
          </div>
      </section>
    </>
  );
};

export default HomePage;
