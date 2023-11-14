import styles from './Menu.module.scss';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Menu = () => {
  const { data } = useSession();

  const username = data?.user?.email;

  return (
    <div className={styles.menu}>
      <h1>{username}</h1>
      <Link href='#'><p>My Orders</p></Link>
      <Link href='#'><p>My Favorites</p></Link>
      <p className={styles.logout} onClick={() => signOut()}>Logout</p>
    </div>
  )
}

export default Menu;