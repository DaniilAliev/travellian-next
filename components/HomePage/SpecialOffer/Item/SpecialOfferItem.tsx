import styles from './ItemSpecialOffer.module.scss';
import Star from '../../../../public/star.svg';
import { SpecialOfferData } from '../data';
import Image from 'next/image';

const Item = ({ item } : { item: SpecialOfferData}) => {
  return (
  <div className={styles.card}>
    <div className={styles['image-container']}>
      <Image src={item.img} alt='item'/>
    </div>
    <div className={styles.info}>
      <h3>{`${item.city}, ${item.country}`}</h3>
      <div className={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <Image key={index} src={Star} alt="star" />
        ))}
      </div>
      <p>
      5 nights and 4 days in 5 star hotel, breakfast and lunch included. 
      Very popular during the renaissance. Passage and going through the 
      cites of the world in classical literature.
      </p>
      <div className={styles.details}>
        <h3>From <span>{`€${item.price}`}</span></h3>
        <button>DETAILS</button>
      </div>
    </div>
  </div>
  )
};

export default Item;