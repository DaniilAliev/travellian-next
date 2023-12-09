import styles from './CustomSkeleton.module.scss';
import Skeleton from '@mui/material/Skeleton';

const CustomSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.container} >
        <div style={{ 'paddingBottom': 10 }}>
          <Skeleton variant="rounded" width={220} height={38} />
        </div>
        <div style={{ 'maxWidth': 270, 'paddingTop': 10 }}>
          <Skeleton variant="rounded" height={15} />
        </div>
        <div style={{ 'maxWidth': 150, 'paddingTop': 10 }}>
          <Skeleton variant="rounded" height={15} />
        </div>
        <div style={{ 'maxWidth': 200, 'paddingTop': 10 }}>
          <Skeleton variant="rounded" height={15} />
        </div>
        <div style={{ 'maxWidth': 220, 'paddingTop': 10 }}>
          <Skeleton variant="rounded" height={15} />
        </div>
      </div>
    </div>
  )
}

export { CustomSkeleton };