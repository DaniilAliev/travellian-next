import Footer from "./Footer/Footer"
import Nav from "./HomePage/HeroSection/Nav/Nav";

const Layout = ({ children, settings }) => {
  
  return (
    <>
      {children}
      <Footer settings={settings}/>
    </>
  )
}

export default Layout;