import { Swiper, SwiperSlide } from 'swiper/react';
import _ from "lodash";
import 'swiper/css';
import Image from 'next/image';
import { Hotel, Styles } from '@/types/types';
import { FC } from 'react';

interface HotelSwiper {
  styles: Styles,
  swiperNextRef: any,
  swiperPrevRef: any,
  hotel: Hotel
}

const HotelSwiper: FC<HotelSwiper> = ({styles, swiperNextRef, swiperPrevRef, hotel}) => {
	return (
    <Swiper
      className={styles.swiper}
      autoHeight
      onSwiper={(swiper) => {
        swiperNextRef.current = swiper;
        swiperPrevRef.current = swiper;
      }}
    >
      {hotel.pictures.map((picture) => (
        <SwiperSlide key={_.uniqueId()} className={styles.slide}>
          <Image src={picture} width={10000} height={10000} alt="Hotel image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HotelSwiper;