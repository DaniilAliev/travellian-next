import styles from './Item.module.scss';
import Image from 'next/image';
import { FC } from 'react';
import { Hotel as Item } from '../Main';
import { useSelector } from 'react-redux';
import { selectOrder } from '@/slices/orderSlice';
import getPrice from '../getPrice';

const Item: FC<{ hotel: Item }> = ({ hotel }) => {
  const orderState = useSelector(selectOrder);

  const guests = orderState.guestsNumber;
  const daysDiff = orderState.daysDiff;

  return (
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
            <p className={styles.nights}>{`${daysDiff} nights, ${orderState.guestsNumber} adults`}</p>
            <p><span>{`€${getPrice(guests, hotel.price, daysDiff)}`}</span></p>
            <button><p>See availability</p></button>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Item;