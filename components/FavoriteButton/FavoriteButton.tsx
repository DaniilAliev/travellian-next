import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { IconContext } from 'react-icons';
import { FC, useEffect, useState } from "react";
import { HotelFavInfo, ItemProps } from '@/types/types';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectors as favSelectors } from "@/slices/favouriteSlice";
import { actions as favActions } from "@/slices/favouriteSlice";
import API_ROUTES from "@/routes/apiRoutes";

const styles = {
  'cursor': 'pointer'
}

const FavoriteButton: FC<ItemProps>= ({ hotel, data }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const dispatch = useDispatch()

  const favs = useSelector(favSelectors.selectAll);
  console.log(favs)

  useEffect(() => {
    const foundFav = favs.find((fav: unknown) => {
      const hotelFav = fav as HotelFavInfo;
      return hotelFav.hotelId === hotel.id
    }); 
    if (foundFav) {
      setIsLiked(true);
    }
  }, [favs, hotel.id]);

  const handleClick = async () => {
    if (!isLiked) {
      setIsLiked(true);
      if (data?.user?.email) {
        const dataToPost: HotelFavInfo = {
          user: data?.user?.email,
          name: hotel.name,
          hotelId: hotel.id,
          adress: hotel.adress,
          rating: hotel.rating,
        }

        const res = await axios.post(`${API_ROUTES.URL}${API_ROUTES.FAVOURITE}`, dataToPost);
        console.log(res.data)
        dispatch(favActions.addFav(res.data))
      }
      
    } else if (isLiked) {
      setIsLiked(false);
      const resFav = await axios.get(`${API_ROUTES.URL}${API_ROUTES.FAVOURITE}`);
      if (data?.user?.email) {
        const filtered = resFav.data.filter((item: HotelFavInfo) => item.user === data?.user?.email);
        const [hotelToDelete] = filtered.filter((item: HotelFavInfo) => item.hotelId === hotel.id);
        dispatch(favActions.removeFav(hotelToDelete.id))
        await axios.delete(`${API_ROUTES.URL}${API_ROUTES.FAVOURITE}/${hotelToDelete.id}`)
      }
    }
  }

  return (
    <>
      {data?.user?.email && <div style={styles} onClick={handleClick}>
        <IconContext.Provider value={{ size: '30' }}>
          {isLiked ? <FcLike /> : <FcLikePlaceholder />}
        </IconContext.Provider>
      </div>}
    </>
  )
}

export { FavoriteButton };