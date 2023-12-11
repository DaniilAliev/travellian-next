import { Main } from "@/components/Destinations/Main";
import API_ROUTES from "@/routes/apiRoutes";
import { Hotel } from "@/types/types";
import axios from "axios";
import { FC } from "react";

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