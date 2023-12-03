import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import styles from './Favoutites.module.scss';
import { useRouter } from 'next/dist/client/router';
import FavouriteItem from "./FavouriteItem/FavouriteItem";
import { useDispatch, useSelector } from "react-redux";
import { actions as favActions } from "@/slices/favouriteSlice";
import { selectors } from "@/slices/favouriteSlice";
import CustomFavSkeleton from "../CustomSkeleton/Favourites/CustomFavSeketon";

export type Fav = {
  id: number,
  created_at: number,
  user: string,
  name: string,
  hotelId: number,
  adress: string,
  rating: number,
}

const Favourites = () => {
  const { data } = useSession();
  const email = data?.user?.email;

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const router = useRouter()

  const dispatch = useDispatch();

  const favs = useSelector(selectors.selectAll)

  useEffect(() => {
    async function fetchData() {
      if (email) {
        try {
          const res = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2/favourite`)

          const filtered = res.data.filter((item: Fav) => item.user === email)
          console.log(filtered);
          dispatch(favActions.addFavs(filtered))
          setIsLoaded(true);
        } catch (e) {
          console.log(e)
        }
      }
    };

    fetchData()
  }, [email, router, dispatch])

  return (
    <section>
      <div className={styles.favs}>
        <h1 className={styles.header}>Your Favourites:</h1>
        {isLoaded ? (favs.length === 0 ? <p className={styles['no-orders']}>You have no favourites yet</p> : favs.map((fav: unknown) => {
          const favItem = fav as Fav
          return <FavouriteItem key={favItem.id} fav={favItem} data={data} />
        })) : <CustomFavSkeleton />}
      </div>
    </section>
  )
};

export default Favourites;