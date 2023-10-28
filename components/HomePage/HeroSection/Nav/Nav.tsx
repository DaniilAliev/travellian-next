import { useState } from 'react';
import Logo from '../../../../public/Logo.svg'
import Burger from '../../../../public/hamburger.svg';
import styles from './Nav.module.scss';
// import { useMemo } from 'react';
import Image from 'next/image';

const NavList = () => (
  <ul>
    <li className={styles.active}><a href='#' className={styles['nav-link']}>Home</a></li>
    <li><a href='#' className={styles['nav-link']}>Explore</a></li>
    <li><a href='#' className={styles['nav-link']}>Travel</a></li>
    <li><a href='#' className={styles['nav-link']}>Blog</a></li>
    <li><a href='#' className={styles['nav-link']}>Pricing</a></li>
  </ul>
  );

const Nav = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen);
      setIsClosing(false);
    }, 200); // 200 миллисекунд - время анимации fadeOut
  };

  return (
  <header>
    <div className={styles["hero-section"]}>
      <nav className={styles.navigation}>
      <div>
        <div className={styles.logo}>
          <Image src={Logo} alt='logo'/>
        </div>

        <div className={styles['nav-bar']}>
          <NavList />
        </div>

        <div className={styles['login-buttons']}>
          <a href='#' className={styles['nav-link']}>Login</a>
          <a className={`${styles['signup-btn']} ${styles['nav-link']}`} href='#'>Signup</a>
        </div>

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
