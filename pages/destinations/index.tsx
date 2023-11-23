import Main from "@/components/Destinations/Main";
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

interface DestinationsProps {
  response: Hotel[];
}

const Destinations: FC<DestinationsProps> = ({response}) => {
  return (<Main response={response}/>)
}

export async function getStaticProps() {
  const res = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2/destinations`);
  const response = res.data || [];

  return {
    props: {
      response
    }
  };
}

export default Destinations;