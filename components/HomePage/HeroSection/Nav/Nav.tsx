import { useState, FC, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Logo from '../../../../public/Logo.svg'
import Burger from '../../../../public/hamburger.svg';
import styles from './Nav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import User from './User';
import { Menu } from './AuthorizedMenu';
import useMobile from '@/hooks/useMobile';
import { useStateContext } from '@/context';
import { Buttons, Nav, State } from './types';
 
const NavList = () => {
  return (
  <ul>
    <li><Link href='/' className={styles['nav-link']}>Home</Link></li>
    <li><Link href='/explore' className={styles['nav-link']}>Explore</Link></li>
    <li><Link href='/travel' className={styles['nav-link']}>Travel</Link></li>
    <li><Link href='/blog' className={styles['nav-link']}>Blog</Link></li>
    <li><Link href='https://www.google.com' target="_blank" className={styles['nav-link']}>Pricing</Link></li>
  </ul>
  )};

const Buttons: FC<Buttons> = () => {
  const [isOpen, setOpen] = useState(false);

  const authToken = useSelector((state: State) => state.general.authToken);

  return (
    authToken ? 
    <>
      <div className={styles['icon-container']} onClick={() => setOpen(!isOpen)}>
        <User />
      </div>
      {isOpen && <Menu setOpen={setOpen}/>}
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

  const isClient = useStateContext();

  useMobile();

  const isMobile = useSelector((state: State) => state.general.isMobile);
 
  const router = useRouter();

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

  useEffect(() => {
    if (router.pathname !== '/') {
      setIsMenuOpen(false);
    }
  }, [router.pathname])

  return ( isClient &&
  <header>
    <div className={styles["hero-section"]} style={navStyles}>
      <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src={Logo} alt='logo'/>
          </Link>
        </div>

        <div className={styles['nav-bar']}>
          <NavList />
        </div>

        {!isMobile && <Buttons data={data} />}

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

            {isMobile && <Buttons data={data} />}
          </div>
        )}
    </nav>
    {children}
    </div>
  </header>
  )
}

export { Nav };
