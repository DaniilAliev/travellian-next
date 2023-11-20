import Discover from "./Discover/Discover";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import OurBlog from "./OurBlog/OurBlog";
import TripPlanners from "./TripPlanners/TripPlanners";
import DestinationGallery from "./DestinationGallery/DestinationGallery"; 
import Experience from "./Experience/Experience";
import useMobile from "../../hooks/useMobile";
import ClientStateProvider from "../clientStateProvider";
import { useSession } from 'next-auth/react';

const HomePage = () => {
  const { data } = useSession();

  console.log(data)

  return (
    <div className="container">
      <Discover />
      <SpecialOffer />
      <OurBlog />
      <TripPlanners />
      <DestinationGallery />
      <Experience/>
    </div>
  )
}

export default HomePage;