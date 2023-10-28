import styles from './Footer.module.scss';
import Form from './Form/Form';
import Logo from '../../public/Logo.svg';
import Facebook from '../../public/facebook.svg';
import Pinterest from '../../public/pinterest.svg';
import Insta from '../../public/instagram.svg';
import Twitter from '../../public/twitter.svg';
import Image from 'next/image';

const Footer = ({ settings }: { settings: boolean }) => {
  return (
    <footer>
      {settings && <section>
        <Form />
      </section>}

      <div className={styles.info}>
        <section>
          <div className={styles.container}>
            <div>
              <Image src={Logo} alt="Logo" />
              <p className={styles['rights-reserved']}>Copyright © Travellian 2020 All rights reserved</p>
            </div>

            <div>
              <p className={styles['bold-p']}>Menu</p>
              <a href="#"><p>Home</p></a>
              <a href="#"><p>Explore</p></a>
              <a href="#"><p>Travel</p></a>
              <a href="#"><p>Blog</p></a>
              <a href="#"><p>Pricing</p></a>
            </div>

            <div>
              <p className={styles['bold-p']}>Information</p>
              <a href="#"><p>Destinations</p></a>
              <a href="#"><p>Supports</p></a>
              <a href="#"><p>Terms & Conditions</p></a>
              <a href="#"><p>Privacy</p></a>
            </div>

            <div>
              <p className={styles['bold-p']}>Contact Info</p>
              <a href="#"><p>+123 456 789</p></a>
              <a href="#"><p>info@travellian.com</p></a>
              <a href="#"><p>1245, New Yourk, USA</p></a>
            </div>

            <div>
              <p className={styles['bold-p']}>Follow us on</p>
              <div className={styles.socials}>
                <Image src={Facebook} alt="" />
                <Image src={Pinterest} alt="" />
                <Image src={Insta} alt="" />
                <Image src={Twitter} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>)
}

export default Footer;