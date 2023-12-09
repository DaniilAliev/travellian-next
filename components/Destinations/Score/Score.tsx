import { FC } from 'react';
import styles from './Score.module.scss';

const Score: FC<{ rating: number }> = ({ rating }) => {
  return <div className={styles.score}><p className={styles.rating}>{rating}</p></div>
};

export { Score };