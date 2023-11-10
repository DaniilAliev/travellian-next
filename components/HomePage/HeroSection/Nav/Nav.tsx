import { useState, FC, ReactNode } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import Logo from '../../../../public/Logo.svg'
import Burger from '../../../../public/hamburger.svg';
import styles from './Nav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import User from './User/User';
import Menu from './AuthorizedMenu/Menu';

interface Buttons {
  data: Session | null,
};

interface Nav {
  children: ReactNode,
  settings: boolean,
}
 
const NavList = () => (
  <ul>
    <li className={styles.active}><a href='#' className={styles['nav-link']}>Home</a></li>
    <li><a href='#' className={styles['nav-link']}>Explore</a></li>
    <li><a href='#' className={styles['nav-link']}>Travel</a></li>
    <li><a href='#' className={styles['nav-link']}>Blog</a></li>
    <li><a href='#' className={styles['nav-link']}>Pricing</a></li>
  </ul>
  );

const Buttons: FC<Buttons> = ({data}) => {
  const [isOpen, setOpen] = useState(false)

  return (
    data ? 
    <>
      <div className={styles['icon-container']} onClick={() => setOpen(!isOpen)}>
        <User />
      </div>
      {isOpen && <Menu />}
    </>
    : 
    <div className={styles['login-buttons']}>
      <Link href='/login' className={styles['nav-link']}>Login</Link>
      <Link className={`${styles['signup-btn']} ${styles['nav-link']}`} href='/signup'>Signup</Link>
    </div>
    )
  }


const Nav: FC<Nav> = ({ children, settings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const {data} = useSession();

  const toggleMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen);
      setIsClosing(false);
    }, 200);
  };

  const navStyles = {
    height: settings ? 'initial' : 'auto',
  };


  return (
  <header>
    <div className={styles["hero-section"]} style={navStyles}>
      <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={Logo} alt='logo'/>
        </div>

        <div className={styles['nav-bar']}>
          <NavList />
        </div>

        <Buttons data={data} />

        <div className={styles['burger-button']} onClick={toggleMenu}>
          <Image src={Burger} alt="menu" />
        </div>
      </div>

      {isMenuOpen && (
          <div className={`${styles['nav-bar-dropdown']} ${isMenuOpen ? styles.open : (isClosing ? styles.closed : '')}`}>

            <div className={styles['burger-button']} onClick={toggleMenu}>
            <Image src={Burger} alt="menu" />
            </div>

            <div className={styles.nav}>
              <NavList />
            </div>
          </div>
        )}
    </nav>
    {children}
    </div>
  </header>
  )
}

export default Nav;
