import { Discover } from "./Discover";
import { SpecialOffer } from "./SpecialOffer";
import { OurBlog } from "./OurBlog";
import { TripPlanners } from "./TripPlanners";
import { DestinationGallery }from "./DestinationGallery"; 
import { actions } from "@/slices/generalSlice";
import { useDispatch } from "react-redux";
import { Experience } from "./Experience";
import { useSession } from 'next-auth/react';
import { useEffect } from "react";
import { Modal } from "./Modal";

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