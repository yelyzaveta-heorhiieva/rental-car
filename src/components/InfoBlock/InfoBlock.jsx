import s from './InfoBlock.module.css'

const InfoBlock = ({ title, items}) => (
  <div>
    <h3 className={s.blockTitle}>{title}</h3>
    <ul className={s.list}>
      {items?.map((item, i) => (
        <li className={s.item} key={`${item}-${i}`}>
          <svg width='16' height='16'>
            <use href={`/icons.svg#${item.icon || 'check-circle'}`}></use>
          </svg>
          <p>
            {typeof item === 'string' ? item : `${item.title}: ${item.item}`}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default InfoBlock
