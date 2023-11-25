import { FC, useEffect, useRef, useState } from "react";
import styles from './HotelItem.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import _ from "lodash";
import 'swiper/css';
import Image from 'next/image';
import prevButton from '../../public/chevron-down.svg';
import nextButton from '../../public/chevron-up.svg';
import { useSelector } from "react-redux";
import { selectOrder } from "@/slices/orderSlice";
import getPrice from "../Destinations/getPrice";
import axios from "axios";
import { useRouter } from "next/router";

type Hotel = {
  adress: string,
  city: string,
  created_at: number,
  description: string,
  id: number,
  name: string,
  pictures: string[],
  price: number,
  rating: number,
};

const HotelItem = () => {
  const [hotel, setHotel] = useState<Hotel>();
  const [idPage, setId] = useState();

  const router = useRouter();

  const pathname = router.pathname;
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const res = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2/destinations/${id}`);
        console.log(res.data)
        setHotel(res.data)
      }
  
      fetchData()
    }
   

  }, [idPage, router.query, id])

  const swiperNextRef: any = useRef();
  const swiperPrevRef: any = useRef();

  const orderState = useSelector(selectOrder);

  const guests = orderState.guestsNumber;
  const daysDiff = orderState.daysDiff;

  const buttons =
    <div className={styles.buttons}>
      <button className={styles.prevBtn} onClick={() => swiperPrevRef.current.slidePrev()}><Image src={prevButton} alt="prev" /></button>
      <button className={styles.nextBtn} onClick={() => swiperNextRef.current.slideNext()}><Image src={nextButton} alt="next" /></button>
    </div>;

  return ( hotel && 
    <section>
      <div className={styles['hotel-container']}>
        <div className={styles.info}>
          <div>
            <h1>{hotel?.name}</h1>
            <p>{hotel?.adress}</p>
          </div>
          <div className={styles['buttons-and-score']}>
            <div className={styles.score}><p>{hotel?.rating}</p></div>
            <button><p>Book now!</p></button>
          </div>

        </div>

        <Swiper
          className={styles.swiper}
          autoHeight
          onSwiper={(swiper) => {
            swiperNextRef.current = swiper;
            swiperPrevRef.current = swiper;
          }}
        >
          {hotel?.pictures.map(picture =>
            <SwiperSlide key={_.uniqueId()} className={styles.slide}>
              <Image src={picture} width={10000} height={10000} alt="Hotel imge" />
            </SwiperSlide>
          )}
        </Swiper>
        <div className={styles['buttons-container']}>
          {buttons}
        </div>
        <p className={styles.description}>{hotel?.description}</p>
        <div className={styles['price-container']}>

          <p><span>{`Your price: €${getPrice(guests, hotel.price, daysDiff)}`}</span></p>
          <p className={styles.nights}>{`${daysDiff} nights, ${orderState.guestsNumber} adults`}</p>
        </div>
      </div>
    </section>
  )
}

export default HotelItem;