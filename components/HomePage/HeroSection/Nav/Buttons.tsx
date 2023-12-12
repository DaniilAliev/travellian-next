import Link from 'next/link';
import { State, StylesPropType } from './types';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import User from './User';
import { Menu } from './AuthorizedMenu';
import { useRouter } from 'next/router';
import openCloseMenu from './openCloseMenu';

const ButtonsComponent: FC<StylesPropType> = ({styles}) => {
  const [isOpen, setOpen] = useState(false);
  const [path, setPath] = useState('');

  const authToken = useSelector((state: State) => state.general.authToken);
  const router = useRouter();

  useEffect(() => {
    openCloseMenu(setPath, setOpen, router, path);
  }, [router, path])

  return (
    authToken ?
      <>
        <div className={styles['icon-container']} onClick={() => setOpen(!isOpen)}>
          <User />
        </div>
        {isOpen && <Menu setOpen={setOpen} />}
      </>
      :
      <div className={styles['login-buttons']}>
        <Link href='/login' className={styles['nav-link']}>Login</Link>
        <Link className={`${styles['signup-btn']} ${styles['nav-link']}`} href='/signup'>Signup</Link>
      </div>
  )
}

export default ButtonsComponent;