import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import styles from './Favoutites.module.scss';
import { useRouter } from 'next/dist/client/router';
import { FavouriteItem } from "./FavouriteItem";
import { useDispatch, useSelector } from "react-redux";
import { favouriteActions } from "@/slices";
import { selectors } from "@/slices/favouriteSlice";
import { CustomFavSkeleton } from "../CustomSkeleton/Favourites";
import { Hotel } from "@/types/types";
import API_ROUTES from "@/routes/apiRoutes";

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
          const res = await axios.get(`${API_ROUTES.URL}${API_ROUTES.FAVOURITE}`)

          const filtered = res.data.filter((item: Hotel) => item.user === email)
          console.log(filtered);
          dispatch(favouriteActions.addFavs(filtered))
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
          const favItem = fav as Hotel
          return <FavouriteItem key={favItem.id} fav={favItem} data={data} />
        })) : <CustomFavSkeleton />}
      </div>
    </section>
  )
};

export { Favourites };