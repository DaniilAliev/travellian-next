import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import { OrderItem } from "./OrderItem";
import styles from './Order.module.scss';
import { useRouter } from 'next/dist/client/router';
import { CustomSkeleton } from "../CustomSkeleton/Orders";
import { HotelOrder } from "./types";
import API_ROUTES from "@/routes/apiRoutes";

const Order = () => {
  const { data } = useSession();
  const email = data?.user?.email;

  const router = useRouter()

  const [orders, setOrders] = useState([]);

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    async function fetchData() {
      if (email) {
        try {
          const res = await axios.get(`${API_ROUTES.URL}${API_ROUTES.ORDER}`)

          const filtered = res.data.filter((item: HotelOrder) => item.user === email)
          console.log(filtered);
          setOrders(filtered);
          setIsLoaded(true)
        } catch (e) {
          console.log(e)
        }
      }
    };

    fetchData()
  }, [email, router])

  return (
    <section>
      <div className={styles.orders}>
        <h1 className={styles.header}>Your orders:</h1>
        {isLoaded ? (orders.length === 0 ? <p className={styles['no-orders']}>You have no orders yet</p> : orders.map((order: HotelOrder) => (
          <OrderItem key={order.id} order={order} />
        ))) :
          <CustomSkeleton />
        }
      </div>
    </section>
  )
};

export { Order };