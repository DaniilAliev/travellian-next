import { FC, useState } from "react";
import { HotelOrder } from "../Order";
import styles from './OrderItem.module.scss';
import axios from "axios";
import Link from 'next/link';


interface OrderItem {
  order: HotelOrder,
}

const OrderItem: FC<OrderItem> = ({ order }) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false)
  console.log(order);

  const handleClick = async () => {
    await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2/order/${order.id}`)
    setIsDeleted(true)
  }

  return (
    <div className={styles.order}>
      <div className={styles.container}>
        <h1><Link href={`/destinations/${order.id}`}>{order.name}</Link></h1>
        <p>{order.adress}</p>
        <p>{`${order.guests} guests, ${order.daysDiff} nights`}</p>
        <div className={styles['dates-and-price']}>
          <div>
            <p>{`Check In: ${order.checkIn.split(',')[0]}`}</p>
            <p>{`Check Out: ${order.checkOut.split(',')[0]}`}</p>
          </div>
          <p className={styles.price}>{`€${order.price}`}</p>
        </div>
        {!isDeleted ? <div className={styles.delete}>
          <button onClick={handleClick}><p>Delete</p></button>
        </div> :
          <div className={styles.deleted}>
            <button><p>Deleted</p></button>
          </div>}
      </div>
    </div>
  )
}

export default OrderItem;