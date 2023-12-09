import styles from './CustomFavSkeleton.module.scss';
import Skeleton from '@mui/material/Skeleton';

const CustomFavSkeleton = () => {
	return (
		<div className={styles.favourite}>
			<div className={styles.container}>
				<div style={{ 'paddingBottom': 10 }}>
					<Skeleton variant="rounded" width={220} height={38} />
				</div>
				<div style={{ 'maxWidth': 270, 'paddingTop': 10 }}>
					<Skeleton variant="rounded" height={15} />
				</div>
				<div style={{ 'paddingTop': 10 }} className={styles.flex}>
					<Skeleton variant="rounded" width={112} height={48.5} />
				</div>
			</div>
		</div>
	)
}

export { CustomFavSkeleton };