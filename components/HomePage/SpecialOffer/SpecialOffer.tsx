import styles from './SpecialOffer.module.scss';
import prevButton from '../../../public/chevron-down.svg';
import nextButton from '../../../public/chevron-up.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { Item } from './Item/SpecialOfferItem';
import 'swiper/css';
import 'swiper/css/free-mode';
import specialOfferData, { SpecialOfferData } from './data';
import { useRef } from 'react';
import Image from 'next/image';
import { useStateContext } from '@/context';
import { useSelector } from 'react-redux';

const SpecialOffer = () => {
  const swiperNextRef: any = useRef();
  const swiperPrevRef: any = useRef();

  const isMobile = useSelector((state: any) => state.general.isMobile);

  const isClient = useStateContext();

  const buttons = 
    <div className={styles.buttons}>
      <button className={styles.prevBtn} onClick={() => swiperPrevRef.current.slidePrev()}><Image src={prevButton} alt="prev" /></button>
      <button className={styles.nextBtn} onClick={() => swiperNextRef.current.slideNext()}><Image src={nextButton} alt="next" /></button>
    </div>;

  return (
    <>
      <section id='special-offer'>
        <div className={styles['headers-and-buttons-container']}>
          {(!isMobile && isClient) && buttons}
          <div className={styles.headers}>
            <h1>Special Offer</h1>
            <div className={styles['orange-border']}></div>
            <p>Check out our special offer and discounts</p>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.swipers}>
          <Swiper
            slidesPerView='auto'
            spaceBetween={32}
            freeMode={true}
            modules={[FreeMode]}
            onSwiper={(swiper) => {
              swiperNextRef.current = swiper;
              swiperPrevRef.current = swiper;
            }}
            className={`${styles.mySwiper} ${styles['special-offer']}`}
          >
            {specialOfferData.map((item: SpecialOfferData) => (
              <SwiperSlide key={item.city} className={styles.slide}>
                <Item item={item}/>
              </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </section>

      {(isMobile && isClient) && 
      <section>
        <div className={styles['buttons-container']}>
          {buttons}
        </div>
      </section>}
    </>
  )
}

export { SpecialOffer };