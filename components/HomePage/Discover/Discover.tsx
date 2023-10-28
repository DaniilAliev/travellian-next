import styles from './Discover.module.scss';
import prevButton from '../../../public/chevron-down.svg'
import nextButton from '../../../public/chevron-up.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { DestinationsData, destinationsData } from './data';
import Item from './Item/Item';
import { useRef} from 'react';
import Image from 'next/image';
import { useStateContext } from '@/context';

const Discover = ({ isMobile }: { isMobile: boolean }) => {
  const swiperNextRef: any = useRef();
  const swiperPrevRef: any = useRef();

  const isClient = useStateContext();

  const buttons =
    <div className={styles.buttons}>
      <button className={styles.prevBtn} onClick={() => swiperPrevRef.current.slidePrev()}><Image src={prevButton} alt="prev" /></button>
      <button className={styles.nextBtn} onClick={() => swiperNextRef.current.slideNext()}><Image src={nextButton} alt="next" /></button>
    </div>;

  return (
    <>
      <section>
        <div className={styles['headers-and-buttons-container']}>
          <div className={styles.headers}>
            <h1>Popular Destinations</h1>
            <div className={styles['orange-border']}></div>
            <p>Most popular destinations around the world, from historical places to natural wonders.</p>
          </div>
          {(!isMobile && isClient) && buttons}
        </div>
      </section>

      <section>
        {isClient ? <div className={styles.swipers}>
          <Swiper
            slidesPerView='auto'
            spaceBetween={32}
            freeMode={true}
            modules={[FreeMode]}
            onSwiper={(swiper) => {
              swiperNextRef.current = swiper;
              swiperPrevRef.current = swiper;
            }}
            className={styles.mySwiper}
          >
            {destinationsData.map((item: DestinationsData) => (
              <SwiperSlide key={item.name} className={styles.slide}>
                <Item item={item} />
              </SwiperSlide>))
            }
          </Swiper>
        </div> : <></>}
        
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

export default Discover;