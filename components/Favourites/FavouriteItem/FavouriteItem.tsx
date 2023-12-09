import { FC, useState } from "react";
import { Fav } from "../Favourites";
import Link from 'next/link';
import styles from './FavouriteItem.module.scss';
import { Score } from "@/components/Destinations/Score";
import { Session } from 'next-auth';
import axios from "axios";

const FavouriteItem:FC<{ fav: Fav, data: Session | null }> = ({fav, data}) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false)

  const handleClick = async () => {
    console.log(fav.hotelId)
    await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2/favourite/${fav.id}`)
    setIsDeleted(true)
  }

  return (
    <div className={styles.favourite}>
      <div className={styles.container}>
        <div className={styles['flex-container']}>
          <div>
            <h1><Link href={`/destinations/${fav.hotelId}`}>{fav.name}</Link></h1>
            <p>{fav.adress}</p>
          </div>
          <div>
            <Score rating={fav.rating}/>
          </div>
        </div>
        {!isDeleted ? <div className={styles.delete}>
          <button onClick={handleClick}><p>Delete</p></button>
        </div> : 
        <div className={styles.deleted}>
          <button><p>Deleted</p></button>
        </div>}
      </div>
    </div>
  )
}

export default FavouriteItem;