import styles from "./Button.module.scss";
import Arrow from '../../../../public/Arrow1.svg';
import Image from "next/image";

const Button = () => 
  <button className={styles.button}>
      <div>
        <p>Book Now!</p>
        <Image src={Arrow} alt="arrow"/>
      </div> 
  </button>;

export default Button;