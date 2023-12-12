import Link from 'next/link';
import { FC } from 'react';
import { StylesPropType } from './types';

const NavList: FC<StylesPropType> = ({styles}) => {
	return (
		<ul>
			<li><Link href='/' className={styles['nav-link']}>Home</Link></li>
			<li><Link href='/explore' className={styles['nav-link']}>Explore</Link></li>
			<li><Link href='/travel' className={styles['nav-link']}>Travel</Link></li>
			<li><Link href='/blog' className={styles['nav-link']}>Blog</Link></li>
			<li><Link href='https://www.google.com' target="_blank" className={styles['nav-link']}>Pricing</Link></li>
		</ul>
	)
};

export default NavList;