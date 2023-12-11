import styles from "./Button.module.scss";
import Arrow from '../../../../public/Arrow1.svg';
import Image from "next/image";
import { FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface IsSubmit {
  isSubmit: boolean,
}

const Button: FC<IsSubmit> = ({ isSubmit }) => {

  return (
    <button className={styles.button} type="submit">
      <div className={styles.container}>
        {
          isSubmit ?
            <div className={styles['spinner-container']}>
              <ClipLoader color="white" size={50} />
            </div>
            :
            <>
              <p>Book Now!</p>
              <Image src={Arrow} alt="arrow" />
            </>
        }
      </div>
    </button>
  )
};

export { Button };