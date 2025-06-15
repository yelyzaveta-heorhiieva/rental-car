import { useEffect, useState } from 'react';
import s from './NotFoundPage.module.css';
import { useNavigate } from 'react-router-dom';
import { FaCarSide } from 'react-icons/fa6';

const NotFoundPage = () => {
  const [counter, setCounter] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    if (counter === 0) {
      navigate('/');
    }

    return () => clearInterval(id);
  }, [counter]);

  return (
    <div className='container'>
      <p className={s.text}>
        Page is not found, after <span className={s.counter}>{counter}s</span>
        you will be redirected to the home page
      </p>
      <FaCarSide className={s.carIcon} />
    </div>
  );
};

export default NotFoundPage;
