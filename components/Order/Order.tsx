import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import OrderItem from "./OrderItem/OrderItem";
import styles from './Order.module.scss';
import { useRouter } from 'next/dist/client/router';

export type HotelOrder = {
  id: number,
  created_at: number,
  user: string,
  name: string,
  adress: string,
  price: number,
  guests: string,
  daysDiff: number,
  checkIn: string,
  checkOut: string,
}

const Order = () => {
  const { data } = useSession();
  const email = data?.user?.email;

  const router = useRouter()

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (email) {
        try{
          const res = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2/order`)
        
          const filtered = res.data.filter((item: HotelOrder) => item.user === email)
          console.log(filtered);
          setOrders(filtered);
        } catch (e) {
          console.log(e)
        }
      } 
      // else {
      //   router.push('/');
      // }
    };

    fetchData()
  }, [email, router])

  return (
    <section>
      <div className={styles.orders}>
        <h1 className={styles.header}>Your orders:</h1>
        {orders.length === 0 ? <p className={styles['no-orders']}>You have no orders yet</p> : orders.map((order: HotelOrder) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </section>
  )
};

export default Order;