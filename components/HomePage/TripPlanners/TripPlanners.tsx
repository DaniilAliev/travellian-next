import styles from'./TripPlanners.module.scss';
import Item from './TripPlannersItem/TripPlannersItem';
import tripPlanners, { TripPlanners } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useStateContext } from '@/context';
import { useSelector } from 'react-redux';

const SliderContainer = () => 
  <div className={styles['sliders-container']}>
    <Swiper
      slidesPerView='auto'
      spaceBetween={32}
      freeMode={true}
      modules={[FreeMode]}
      className={styles['trip-planners']}
    >
    {tripPlanners.map((item: TripPlanners) => (
      <SwiperSlide key={item.city} className={styles.slide}>
        <Item item={item} isMobile={false}/>
      </SwiperSlide>
    ))}
    </Swiper>;
  </div>
  
const NoSwiperContainer = ({ isMobile }: { isMobile : boolean } ) => 
  <section className={styles['no-swiper']}>
    <div>
    {tripPlanners.map((item) => (
        <Item item={item} key={item.city} isMobile={isMobile}/>
    ))}
    </div>
  </section>;

const TripPlanners = () => {

  const isMobile = useSelector((state: any) => state.general.isMobile);

  const isClient = useStateContext();

  return(
    <>
      <section>
        <div className={styles['general-container']}>
          <div className={styles.description}>
            <div className={styles.headers}>
              <h1>Trip Planners</h1>
              <div className={styles['orange-border']}></div>
              <p>20 years from now you will be more disappointed 
                by the things that you didn’t do. Stop regretting 
                and start travelling, start throwing off the bowlines.</p>
            </div>
            <div className={styles['button-decoration']}>
              <div className={styles['black-rectangle']}></div>
              <button><p>View all trip plans</p></button>
              <div className={styles['grey-rectangle']}></div>
            </div>
          </div>

            {(!isMobile && isClient) && 
              < SliderContainer /> 
            }
        </div>
      </section>

      {(isMobile && isClient) && <NoSwiperContainer  isMobile={isMobile}/>}
    </>
  )
}

export default TripPlanners;