import { Main } from "@/components/Destinations/Main";
import API_ROUTES from "@/routes/apiRoutes";
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
  user: string,
  hotelId: number,
};

interface DestinationsProps {
  response: Hotel[];
}

const Destinations: FC<DestinationsProps> = ({response}) => {
  return (<Main response={response}/>)
}

export async function getStaticProps() {
  const res = await axios.get(`${API_ROUTES.URL}${API_ROUTES.DESTINATIONS}`);
  const response = res.data || [];

  return {
    props: {
      response
    }
  };
}

export default Destinations;