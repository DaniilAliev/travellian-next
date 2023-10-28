import styles from './DestinationGallery.module.scss';
import prevButton from '../../../public/chevron-down.svg'
import nextButton from '../../../public/chevron-up.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import images from './images';
import { useRef } from 'react';
import { useStateContext } from '@/context';
import Image from 'next/image';

const DestinationGallery = ({ isMobile }: { isMobile: boolean }) => {
  const swiperNextRef = useRef();
  const swiperPrevRef = useRef();

  const isClient = useStateContext();

  return (
    <>
    <section>
      <div className={styles['headers-and-buttons-container']}>
          <div className={styles.headers}>
            <h1>Destination Gallery</h1>
            <div className={styles['orange-border']}></div>
            <p>Our photo gallery on trip</p>
          </div>
          {(!isMobile && isClient) && <div className={styles.buttons}>
            <button className={styles.prevBtn} 
              onClick={() => swiperPrevRef.current.slidePrev()}
            >
              <Image src={prevButton} alt="prev" />
            </button>
            <button className={styles.nextBtn} 
            onClick={() => swiperNextRef.current.slideNext()}
            >
              <Image src={nextButton} alt="next" />
            </button>
          </div>}
        </div>
    </section>

    <section className={styles.container}>
      {(!isMobile && isClient) && <div className={styles.swipers}>
        <Swiper
          slidesPerView='auto'
          spaceBetween={32}
          freeMode={true}
          modules={[FreeMode]}
          onSwiper={(swiper) => {
            swiperNextRef.current = swiper;
            swiperPrevRef.current = swiper;
          }}
          className={`${styles.mySwiper} ${styles["destination-gallery"]}`}
        >
          {images.map((image) => (
            <SwiperSlide key={image} className={styles.slide}>
              <div className={styles.image}>
                <Image src={image} alt="" />
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>}
      {isMobile && isClient && 
        images.map((image) => (
          <div className={styles.image} key={image}>
            <Image src={image} alt="" />
          </div>
        ))
      } 
    </section>
    </>
  )
};

export default DestinationGallery;