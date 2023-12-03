import styles from './HotelSkeleton.module.scss';
import Skeleton from '@mui/material/Skeleton';

const HotelSkeleton = () => {
  return (
    <section>
      <div className={styles['hotel-container']}>
        <div className={styles.info}>
          <div style={{'width' : '100%'}}>
            <div style={{'maxWidth' : 1000, 'width': '100%', 'paddingBottom': 20}}>
              <Skeleton variant="rounded"  height={40}/>
            </div>
            <div style={{'maxWidth' : 1200, 'width': '100%'}}>
              <Skeleton variant="rounded"  height={30}/>
            </div>
          </div>
          
          <div className={styles['buttons-and-score']}>
            <Skeleton variant="rounded" width={110} height={42.5}/>
            <Skeleton variant="rounded" width={155} height={68.5}/>
          </div>
        </div>

        
        <div className={styles.swiper}>
          <div className={styles.container}>
            <Skeleton variant="rounded" height={660}/>
          </div>  
        </div>
      </div>
    </section>

  )
}

export default HotelSkeleton;