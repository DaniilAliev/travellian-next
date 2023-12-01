import Discover from "./Discover/Discover";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import OurBlog from "./OurBlog/OurBlog";
import TripPlanners from "./TripPlanners/TripPlanners";
import DestinationGallery from "./DestinationGallery/DestinationGallery"; 
import { actions as favActions } from '@/slices/favouriteSlice';
import { useDispatch } from "react-redux";
import Experience from "./Experience/Experience";
import { useSession } from 'next-auth/react';
import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const { data } = useSession();

  console.log(data);

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