import { useEffect, useRef, useState } from "react";
import styles from './HotelItem.module.scss';
import Image from 'next/image';
import prevButton from '../../public/chevron-down.svg';
import nextButton from '../../public/chevron-up.svg';
import { useSelector } from "react-redux";
import { selectOrder } from "@/slices/orderSlice";
import getPrice from "../Destinations/getPrice";
import axios from "axios";
import { useRouter } from "next/router";
import { Score } from "../Destinations/Score";
import { useSession } from 'next-auth/react';
import { YMapComponent } from "./Map";
import { FavoriteButton, HotelSkeleton, BookButton, Modal } from ".";
import { Hotel } from "@/types/types";
import API_ROUTES from "@/routes/apiRoutes";
import fetchData from "./fetch";
import HotelSwiper from "./HotelSwiper";

const HotelItem = () => {
  const orderState = useSelector(selectOrder);

  const guests = orderState.guestsNumber as string;
  const daysDiff = orderState.daysDiff as number;
  const checkIn = orderState.checkIn;
  const checkOut = orderState.checkOut;

  const {data} = useSession();

  const [hotel, setHotel] = useState<Hotel>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [modalState, setModalState] = useState<'opened' | 'closed'>('closed');

  const [isOrdered, setIsOrdered] = useState<boolean>(false);

  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchData(setHotel, setIsLoaded, id as string);
    }
  }, [router.query, id]);

  const handleClick = async () => {
    console.log(data)
    if (!data) {
      setModalState('opened');
    } else {
      if (hotel) {
        const dataToFetch = {
          user: data?.user?.email,
          name: hotel.name,
          adress: hotel.adress,
          price: getPrice(guests, hotel.price, daysDiff),
          guests,
          daysDiff,
          checkIn: checkIn,
          checkOut: checkOut,
          hotelId: hotel.id,
        }
  
        const post = await axios.post(`${API_ROUTES.URL}${API_ROUTES.ORDER}`, dataToFetch);
  
        if (post) {
          setIsOrdered(true);
        }
      };
    }
  }

  const swiperNextRef: any = useRef();
  const swiperPrevRef: any = useRef();

  const buttons =
    <div className={styles.buttons}>
      <button className={styles.prevBtn} onClick={() => swiperPrevRef.current.slidePrev()}><Image src={prevButton} alt="prev" /></button>
      <button className={styles.nextBtn} onClick={() => swiperNextRef.current.slideNext()}><Image src={nextButton} alt="next" /></button>
    </div>;

  return ( isLoaded ? (hotel && 
    <>
    <section>
      <div className={styles['hotel-container']}>
        <div className={styles.info}>
          <div>
            <h1>{hotel.name}</h1>
            <p>{hotel.adress}</p>
          </div>
          <div className={styles['buttons-and-score']}>
            <div className={styles['fav-and-score']}>
              <Score rating={hotel.rating} />
              <FavoriteButton hotel={hotel} data={data}/>
            </div>
            <BookButton isOrdered={isOrdered} handleClick={handleClick} />
          </div>
        </div>

        <HotelSwiper styles={styles} swiperNextRef={swiperNextRef} swiperPrevRef={swiperPrevRef} hotel={hotel}/>
        <div className={styles['buttons-container']}>
          {buttons}
        </div>
        <p className={styles.description}>{hotel?.description}</p>
        <div className={styles['price-container']}>
          <div>
            <p><span>{`Your price: €${getPrice(guests, hotel.price, daysDiff)}`}</span></p>
          </div>
          <p className={styles.nights}>{`${daysDiff} nights, ${orderState.guestsNumber} adults`}</p>
        </div>
        <YMapComponent address={hotel.adress}/>
      </div>
    </section>
    {
      <Modal setModalState={setModalState} modalState={modalState}/>
    }
    </>) : <HotelSkeleton />
  )
}

export { HotelItem };