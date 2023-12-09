import { FC } from 'react';
import styles from '../HotelItem.module.scss';

interface BookButton {
	isOrdered: boolean,
	handleClick: () => void
}

const BookButton: FC<BookButton> = ({isOrdered, handleClick}) => {
	return (
		isOrdered ? 
      <button disabled className={styles.booked}><p>Booked</p></button> : 
      <button onClick={handleClick}><p>Book now!</p></button>
	)
}

export { BookButton };