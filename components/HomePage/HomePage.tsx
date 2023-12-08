import Discover from "./Discover/Discover";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import OurBlog from "./OurBlog/OurBlog";
import TripPlanners from "./TripPlanners/TripPlanners";
import DestinationGallery from "./DestinationGallery/DestinationGallery"; 
import { actions } from "@/slices/generalSlice";
import { useDispatch } from "react-redux";
import Experience from "./Experience/Experience";
import { useSession } from 'next-auth/react';
import { useEffect } from "react";
import { Modal } from "./Modal";
import { useRouter } from "next/router";

interface User {
  email?: string | null;
  exp?: number | null;
  iat?: number | null;
  authToken?: string | null;
  jti?: string | null;
}

const HomePage = () => {
  const { data } = useSession();

  console.log(data)

  const user = data?.user as User;

  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      const authToken = user.authToken as string;
      dispatch(actions.setAuthToken(authToken))
    }
  }, [dispatch, data]);

  return (
    <div className="container">
      <Discover />
      <SpecialOffer />
      <OurBlog />
      <TripPlanners />
      <DestinationGallery />
      <Experience/>
      <Modal />
    </div>
  )
}

export default HomePage;