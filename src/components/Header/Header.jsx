import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import clsx from 'clsx';

 const buildLinkClass = ({ isActive }) => {
   return clsx(s.link, isActive && s.active);
 };
    

const Header = () => {
  return (
    <header className={s.header}>
      <div className={clsx('container', s.headerContainer)}>
        <svg width='104' height='16'>
          <use href='/icons.svg#logo'></use>
        </svg>
        <nav className={s.nav}>
          <ul className={s.navList}>
            <li>
              <NavLink to='/' className={buildLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/catalog' className={buildLinkClass}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
