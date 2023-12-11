import styles from './Item.module.scss';
import Image from 'next/image';
import { FC } from 'react';
import { ItemProps } from '@/types/types';
import { useSelector } from 'react-redux';
import { selectOrder } from '@/slices/orderSlice';
import getPrice from '../getPrice';
import Link from 'next/link';
import { Score } from '../Score';
import { FavoriteButton } from '@/components/FavoriteButton';

const Item: FC<ItemProps> = ({ hotel, data }) => {
  const orderState = useSelector(selectOrder);

  const guests = orderState.guestsNumber as string;
  const daysDiff = orderState.daysDiff as number;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image width={300} height={300} src={hotel.pictures[0]} alt="" />
      </div>

      <div className={styles['info-container']}>
        <div className={styles.names}>
          <Link href={`/destinations/${hotel.id}`}><p>{hotel.name}</p></Link>
          <p className={styles.adress}>{hotel.adress}</p>
        </div>

        <div className={styles.rating}>
        <Score rating={hotel.rating} />
        <FavoriteButton hotel={hotel} data={data}/>
          <div>
            <p className={styles.nights}>{`${daysDiff} nights, ${orderState.guestsNumber} adults`}</p>
            <p><span>{`€${getPrice(guests, hotel.price, daysDiff)}`}</span></p>
            <Link href={`/destinations/${hotel.id}`}><button><p>See availability</p></button></Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export { Item };