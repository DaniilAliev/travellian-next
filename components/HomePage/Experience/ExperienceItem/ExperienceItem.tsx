import Image from 'next/image';
import Star from '../../../../public/star.svg';
import styles from './ExperienceItem.module.scss';
import { ExperienseData } from '../experienseData';
import { FC } from 'react';

interface Item {
  item: ExperienseData,
}

const ExperienseItem: FC<Item> = ({ item }) => 
  <div className={styles['slide-container']}>
    <Image src={item.avatar} alt={item.name} className={styles.avatar}/>
    <p>{item.review}
    </p>
    <div className={styles.stars}>
      {[...Array(5)].map((_, index) => (
        <Image key={index} src={Star} alt="" />
      ))}
    </div>
    <h3>{item.name}</h3>
    <p>{item.profession}</p>
  </div>

export { ExperienseItem };