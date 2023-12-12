import { Nav } from "./Nav";
import { Form } from "./Form";
import styles from './HeroSection.module.scss';
import { FC } from 'react';

interface Props {
  settings: boolean,
}

const HeroSection: FC<Props> = ({ settings }) => {
  return (
    <Nav settings={settings}>
      {settings && <div className={styles["text-section"]}>
        <div className={styles.container}>
          <div className={styles["text-hero"]}>
            <div>
              <h1>Start your unforgettable <br /> journey with us.</h1>
              <p>The best travel for your jouney begins now</p>
            </div>
          </div>
          <Form />
        </div>
      </div>}
    </Nav>
  )
}

export { HeroSection };