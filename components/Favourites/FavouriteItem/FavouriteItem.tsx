import { FC, useState } from "react";
import { Hotel } from "@/types/types";
import Link from 'next/link';
import styles from './FavouriteItem.module.scss';
import { Score } from "@/components/Destinations/Score";
import { Session } from 'next-auth';
import axios from "axios";
import API_ROUTES from "@/routes/apiRoutes";

const FavouriteItem:FC<{ fav: Hotel, data: Session | null }> = ({fav, data}) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false)

  const handleClick = async () => {
    await axios.delete(`${API_ROUTES.URL}${API_ROUTES.FAVOURITE}/${fav.id}`)
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

export { FavouriteItem };