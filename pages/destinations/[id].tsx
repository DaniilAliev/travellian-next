import HotelItem from "@/components/Hotel/HotelItem";
import axios from "axios";
import { FC } from "react";

type Hotel = {
  adress: string,
  city: string,
  created_at: number,
  description: string,
  id: number,
  name: string,
  pictures: string[],
  price: number,
  rating: number,
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
	try {
		const id = context.params.id;

		const res = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2/destinations/${id}`);
		const hotel = res.data || null;

		return {
			props: {
				hotel
			},
			revalidate: 60, // Обновить данные каждые 60 секунд
		}
	} catch(e) {
		console.log(e)
	}
}

const Hotel: FC<{hotel: Hotel}> = ({hotel}) => {

	// console.log(hotel)
  return <HotelItem hotel={hotel} />
}

export default Hotel