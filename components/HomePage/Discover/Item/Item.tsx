import { FC } from 'react';
import styles from './Item.module.scss';
import locationImg from '../../../../public/locationImage.png'
import { DestinationsData } from '../data';
import Image from 'next/image';

interface Item {
  item : DestinationsData,
}

const Item: FC<Item> = ({ item }) => (
  <div className={styles.item} style={{ backgroundImage: `url(${item.img})`}}>
    <h3>{item.name}</h3>
    <div>
      <Image src={locationImg} alt="" />
      <p>{item.location}</p>
    </div>
  </div>
);

export default Item;