import Nav from "./Nav/Nav";
import Form from "./Form/Form";
import styles from './HeroSection.module.scss';

const HeroSection = () => 
  <Nav>
    <div className={styles["text-section"]}>
      <div className={styles.container}>
        <div className={styles["text-hero"]}>
          <div>
            <h1>Start your unforgettable <br /> journey with us.</h1>
            <p>The best travel for your jouney begins now</p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  </Nav>

export default HeroSection;