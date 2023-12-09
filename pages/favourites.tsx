import Favourites from "@/components/Favourites/Favourites";

interface HotelFavInfo {
  user: string,
  name: string,
  hotelId: number,
  adress: string,
  rating: number,
}

const FavouritePage = () => {
  return <Favourites />
}

export default FavouritePage;
