import { useState, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Logo from '../../../../public/Logo.svg'
import Burger from '../../../../public/hamburger.svg';
import styles from './Nav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import useMobile from '@/hooks/useMobile';
import { useStateContext } from '@/context';
import { Nav, State } from './types';
import ButtonsComponent from './Buttons';
import NavList from './NavList';
import openCloseMenu from './openCloseMenu';

const Nav: FC<Nav> = ({ children, settings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [path, setPath] = useState('');

  const isClient = useStateContext();

  useMobile();

  const isMobile = useSelector((state: State) => state.general.isMobile);

  const router = useRouter();

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
    openCloseMenu(setPath, setIsMenuOpen, router, path);
  }, [router, path])

  return (isClient &&
    <header>
      <div className={styles["hero-section"]} style={navStyles}>
        <nav className={styles.navigation}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Link href='/'>
                <Image src={Logo} alt='logo' />
              </Link>
            </div>

            <div className={styles['nav-bar']}>
              <NavList styles={styles} />
            </div>

            {!isMobile && <ButtonsComponent styles={styles} />}

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
                <NavList styles={styles} />
              </div>

              {isMobile && <ButtonsComponent styles={styles} />}
            </div>
          )}
        </nav>
        {children}
      </div>
    </header>
  )
}

export { Nav };
