import styles from './Item.module.scss';
import Image from 'next/image';

const Item = ({ hotel }) => {
  return(
		<div className={styles.card}>
			<div className={styles.image}>
				<Image width={300} height={300} src={hotel.pictures[0]} alt="" />
			</div>

			<div className={styles['info-container']}>
				<div className={styles.names}>
					<a href=""><p>{hotel.name}</p></a>
					<p className={styles.adress}>{hotel.adress}</p>
				</div>

				<div className={styles.rating}>
					<div className={styles.score}>
						<p>{hotel.rating}</p>
					</div>
					<div>
						<p className={styles.nights}>1 night, 2 adults</p>
						<p><span>{`€${hotel.price}`}</span></p>
						<button><p>See availability</p></button>
					</div>
				</div>
			</div>
			
		</div>
	)
};

export default Item;