import s from './Loader.module.css';
import { Circles } from 'react-loader-spinner';

const Loader = ({newClass}) => {
  return (
    <div className={s[newClass] || s.loader}>
      <Circles
        height='60'
        width='60'
        color='#0b44cd'
        ariaLabel='circles-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
};

export default Loader;
