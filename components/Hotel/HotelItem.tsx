import { useEffect, useRef, useState } from "react";
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
import { Score } from "../Destinations/Score";
import { useSession } from 'next-auth/react';
import { MapComponent } from "./Map";
import { Modal } from "./Modal";
import { FavoriteButton } from "../FavoriteButton";
import { HotelSkeleton } from "../CustomSkeleton/Hotel";
import { BookButton } from "./Button";
import { YMaps } from "@pbe/react-yandex-maps";
import { Hotel } from "@/types/types";
import API_ROUTES from "@/routes/apiRoutes";

const HotelItem = () => {
  const orderState = useSelector(selectOrder);

  const guests = orderState.guestsNumber;
  const daysDiff = orderState.daysDiff;
  const checkIn = orderState.checkIn;
  const checkOut = orderState.checkOut;

  const {data} = useSession();

  const [hotel, setHotel] = useState<Hotel>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const [modalState, setModalState] = useState<'opened' | 'closed'>('closed');

  const [isOrdered, setIsOrdered] = useState<boolean>(false)

  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const res = await axios.get(`${API_ROUTES.URL}${API_ROUTES.DESTINATIONS}/${id}`);
        console.log(res.data)
        setHotel(res.data)
        setIsLoaded(true)
      }
  
      fetchData()
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

        <Swiper
          className={styles.swiper}
          autoHeight
          onSwiper={(swiper) => {
            swiperNextRef.current = swiper;
            swiperPrevRef.current = swiper;
          }}
        >
          {hotel.pictures.map(picture =>
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
          <div>
            <p><span>{`Your price: €${getPrice(guests, hotel.price, daysDiff)}`}</span></p>
          </div>
          <p className={styles.nights}>{`${daysDiff} nights, ${orderState.guestsNumber} adults`}</p>
        </div>
        <YMaps
          query={{
            apikey: '2d5c8c9d-bc56-4a60-9db0-41ced8408eed'
          }}
        >
          <MapComponent address={hotel.adress}/>
        </YMaps>
      </div>
    </section>
    {
      <Modal setModalState={setModalState} modalState={modalState}/>
    }
    </>) : <HotelSkeleton />
  )
}

export { HotelItem };