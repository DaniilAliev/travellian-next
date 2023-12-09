import styles from './Menu.module.scss';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '@/slices/generalSlice';

type Menu = {
  setOpen: (state: true | false) => void
}

const Menu: FC<Menu> = ({setOpen}) => {
  const { data } = useSession();

  const dispatch = useDispatch();

  const username = data?.user?.email;

  const handleSignOut = () =>{
    signOut();
    dispatch(actions.removeAuthToken())
  }

  return (
    <div className={styles.menu}>
      <h1>{username}</h1>
      <Link href='/orders' onClick={() => setOpen(false)}><p>My Orders</p></Link>
      <Link href='/favourites' onClick={() => setOpen(false)}><p>My Favorites</p></Link>
      <p className={styles.logout} onClick={handleSignOut}>Logout</p>
    </div>
  )
}

export { Menu };