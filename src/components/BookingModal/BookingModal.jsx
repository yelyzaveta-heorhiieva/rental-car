import s from './BookingModal.module.css';

const BookingModal = ({ onClose, details, handleClose }) => {
  const arr = Object.keys(details);

  return (
    <div className={s.backdrop} onClick={handleClose}>
      <div className={s.modal}>
        <p className={s.bookingText}>Booking successful!</p>
        <ul className={s.detailsList}>
          {arr.map(
            (item) =>
              details[item] && (
                <li>
                  <span className={s.detailsItem}>{item}:</span> {details[item]}
                </li>
              )
          )}
        </ul>
        <button type='button' className={s.closeBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
