import { FC, ReactNode } from "react";
import Footer from "../Footer/Footer"
import HeroSection from "../HomePage/HeroSection/HeroSection";
import styles from './Layout.module.scss';

interface Layout {
  children: ReactNode,
  settings: boolean,
}

const Layout: FC<Layout> = ({ children, settings }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <HeroSection settings={settings} />
        <div className={styles.children}>
          {children}
        </div>
      </div>
      <Footer settings={settings} />
    </div>
  )
}

export default Layout;