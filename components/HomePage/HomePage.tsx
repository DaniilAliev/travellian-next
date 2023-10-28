import HeroSection from "./HeroSection/HeroSection";
import Discover from "./Discover/Discover";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import OurBlog from "./OurBlog/OurBlog";
import TripPlanners from "./TripPlanners/TripPlanners";
import DestinationGallery from "./DestinationGallery/DestinationGallery"; 
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import useMobile from "../../hooks/useMobile";
import ClientStateProvider from "../clientStateProvider";

const HomePage = () => {
  let isMobile: boolean = useMobile();

  return (
    <ClientStateProvider>
      <div className="container">
        <HeroSection />
        <Discover isMobile={isMobile}/>
        <SpecialOffer isMobile={isMobile}/>
        <OurBlog />
        <TripPlanners isMobile={isMobile}/>
        <DestinationGallery isMobile={isMobile}/>
        <Experience/>
        {/* <Footer /> */}
      </div>
    </ClientStateProvider>
  )
}

export default HomePage;