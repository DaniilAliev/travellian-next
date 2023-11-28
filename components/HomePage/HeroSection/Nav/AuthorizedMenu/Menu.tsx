import styles from './Menu.module.scss';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FC } from 'react';

type Menu = {
  setOpen: (state: true | false) => void
}

const Menu: FC<Menu> = ({setOpen}) => {
  const { data } = useSession();

  const username = data?.user?.email;

  return (
    <div className={styles.menu}>
      <h1>{username}</h1>
      <Link href='/orders' onClick={() => setOpen(false)}><p>My Orders</p></Link>
      <Link href='#' onClick={() => setOpen(false)}><p>My Favorites</p></Link>
      <p className={styles.logout} onClick={() => signOut()}>Logout</p>
    </div>
  )
}

export default Menu;