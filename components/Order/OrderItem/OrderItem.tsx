import { FC, useState } from "react";
import styles from './OrderItem.module.scss';
import axios from "axios";
import Link from 'next/link';
import API_ROUTES from "@/routes/apiRoutes";
import { Hotel } from "@/types/types";

interface OrderItem {
  order: Hotel,
}

const OrderItem: FC<OrderItem> = ({ order }) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false)

  const handleClick = async () => {
    await axios.delete(`${API_ROUTES.URL}${API_ROUTES.ORDER}/${order.id}`)
    setIsDeleted(true)
  }

  return (
    <div className={styles.order}>
      <div className={styles.container}>
        <h1><Link href={`/destinations/${order.hotelId}`}>{order.name}</Link></h1>
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

export { OrderItem };