import Favourites from "@/components/Favourites/Favourites";
import axios from "axios";
import { FC } from "react";

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

// export async function getStaticProps() {
//   const res = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2/destinations`)
//   const response = res.data;

//   return {
//     props: {
//       response
//     }
//   }
// }