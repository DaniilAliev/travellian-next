import styles from'./TripPlannersItem.module.scss';
import Star from '../../../../public/star.svg';
import { useState } from 'react';
import { TripPlanners } from '../data';
import Image from 'next/image';

const Item = ({ item, isMobile }: {item: TripPlanners, isMobile: boolean}) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
		<div className={styles['trip-planners-card']}>
			<div className={`${styles.image} ${isHovered ? styles.hovered : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<Image src={item.img} alt="city" />
			</div>
      {(isHovered || isMobile) && 
        <div className={`${styles.info} ${isHovered ? styles.visible : ''}`}>
				<div>
					<p>GUIDED TOUR</p>
					<p>{`${item.price}/Day`}</p>
				</div>
				<h3>{`${item.city} City Tour`}</h3>
        <div>
          <div className={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <Image key={index} src={Star} alt="star" />
          ))}
          </div>
          <p>7 Days tour</p>
        </div>
			</div>
      }
		</div>
	)
}

export default Item;