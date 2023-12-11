import axios from "axios";
import API_ROUTES from "@/routes/apiRoutes";
import { Hotel } from "@/types/types";

const fetchData = async (setHotel: (data: Hotel) => void, setIsLoaded: (isLoaded: boolean) => void, id: string) => {
  const res = await axios.get(`${API_ROUTES.URL}${API_ROUTES.DESTINATIONS}/${id}`);
  setHotel(res.data)
  setIsLoaded(true)
}

export default fetchData;